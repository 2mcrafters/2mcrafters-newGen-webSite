import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const requiredEnvVars = [
  "NEWSLETTER_SMTP_HOST",
  "NEWSLETTER_SMTP_PORT",
  "NEWSLETTER_SMTP_USER",
  "NEWSLETTER_SMTP_PASS",
];

let cachedTransporter: ReturnType<typeof nodemailer.createTransport> | null = null;

function getTransporter() {
  if (cachedTransporter) {
    return cachedTransporter;
  }

  const missing = requiredEnvVars.filter((name) => !process.env[name]);
  if (missing.length > 0) {
    throw new Error(
      `Missing newsletter SMTP configuration: ${missing.join(", ")}. Please define the environment variables before starting the server.`
    );
  }

  const port = Number(process.env.NEWSLETTER_SMTP_PORT);

  cachedTransporter = nodemailer.createTransport({
    host: process.env.NEWSLETTER_SMTP_HOST!,
    port: isNaN(port) ? 587 : port,
    secure: process.env.NEWSLETTER_SMTP_SECURE === "true",
    auth: {
      user: process.env.NEWSLETTER_SMTP_USER!,
      pass: process.env.NEWSLETTER_SMTP_PASS!,
    },
  });

  return cachedTransporter;
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const email = (payload?.email ?? "").toString().trim();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ message: "Valid email is required." }, { status: 422 });
    }

    const transporter = getTransporter();
    const targetRecipient = process.env.NEWSLETTER_TARGET_EMAIL ?? "2m.crafters@gmail.com";

    await transporter.sendMail({
      from: `2M Crafters <${process.env.NEWSLETTER_SMTP_FROM ?? process.env.NEWSLETTER_SMTP_USER}>`,
      to: targetRecipient,
      subject: "Nouvelle adresse email pour la newsletter 2M Crafters",
      text: `Merci de contacter ${email} pour nos ressources marketing.`,
      html: `<p>Une nouvelle personne souhaite recevoir la newsletter : <strong>${email}</strong>.</p>
              <p>Envoyé via le formulaire sur <a href="https://www.2mcrafters.com">2m.crafters</a>.</p>`,
    });

    return NextResponse.json({ message: "Merci ! L'email a bien été transmis." });
  } catch (cause) {
    console.error("Newsletter submission failed:", cause);
    const message = cause instanceof Error ? cause.message : "Unknown error";
    return NextResponse.json({ message: message || "Unable to send email." }, { status: 500 });
  }
}
