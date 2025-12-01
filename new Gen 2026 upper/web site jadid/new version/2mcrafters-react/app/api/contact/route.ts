import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  type?: "contact" | "newsletter" | string;
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  message?: string;
};

let cachedTransporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (cachedTransporter) {
    return cachedTransporter;
  }

  const host = process.env.EMAIL_HOST;
  const port = Number(process.env.EMAIL_PORT ?? 587);
  const secure = process.env.EMAIL_SECURE === "true";
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  cachedTransporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });

  return cachedTransporter;
}

const normalizeString = (value?: string) => (value && value.trim() ? value.trim() : "N/A");

export async function POST(request: NextRequest) {
  const transporter = getTransporter();
  if (!transporter) {
    return NextResponse.json({ error: "Mailer is not configured." }, { status: 500 });
  }

  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  if (!payload?.type) {
    return NextResponse.json({ error: "Missing type." }, { status: 400 });
  }

  if (!payload.email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  const name = normalizeString(payload.name ?? payload.email);
  const subject =
    payload.type === "newsletter"
      ? `Newsletter · Nouvelle inscription · ${name}`
      : `Formulaire de contact · ${name}`;

  const htmlPayload =
    payload.type === "newsletter"
      ? `<p><strong>Inscription newsletter</strong></p><p>Email : ${payload.email}</p>`
      : `<h3>Nouveau projet</h3>
    <p><strong>Nom</strong>: ${name}</p>
    <p><strong>Entreprise</strong>: ${normalizeString(payload.company)}</p>
    <p><strong>Email</strong>: ${payload.email}</p>
    <p><strong>Téléphone</strong>: ${normalizeString(payload.phone)}</p>
    <p><strong>Type de projet</strong>: ${normalizeString(payload.projectType)}</p>
    <p><strong>Message</strong>: ${normalizeString(payload.message)}</p>`;

  const textPayload =
    payload.type === "newsletter"
      ? `Inscription newsletter\nEmail: ${payload.email}`
      : `Nom: ${name}\nSociété: ${normalizeString(payload.company)}\nEmail: ${payload.email}\nTéléphone: ${normalizeString(
          payload.phone,
        )}\nProjet: ${normalizeString(payload.projectType)}\nMessage: ${normalizeString(payload.message)}`;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject,
      html: htmlPayload,
      text: textPayload,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mailer error", error);
    return NextResponse.json({ error: "Email could not be sent." }, { status: 500 });
  }
}
