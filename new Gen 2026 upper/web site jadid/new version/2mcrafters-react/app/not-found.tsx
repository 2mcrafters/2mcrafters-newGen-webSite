import Link from 'next/link';

export const dynamic = 'force-static';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center text-white">
      <p className="text-sm uppercase tracking-[0.4em] text-slate-400">404</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Page introuvable</h1>
      <p className="mt-6 max-w-xl text-base text-slate-300">
        Cette page semble ne pas exister. Revenez à l’accueil ou explorez nos services et expertises.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-black transition hover:bg-zinc-100"
        >
          Retour à l’accueil
        </Link>
      </div>
    </main>
  );
}
