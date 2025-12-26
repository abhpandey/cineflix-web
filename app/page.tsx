import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-zinc-50 dark:bg-black">
      <div className="mx-auto max-w-3xl rounded-xl border border-black/10 dark:border-white/15 bg-white dark:bg-black p-6 space-y-4">
        <h1 className="text-3xl font-bold text-black dark:text-white">
          Cineflix Home (Dummy)
        </h1>

        <p className="text-zinc-600 dark:text-zinc-400">
          This is a placeholder home page for Sprint 1.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            className="px-4 py-2 rounded-md bg-foreground text-background font-semibold"
            href="/login"
          >
            Go to Login
          </Link>

          <Link
            className="px-4 py-2 rounded-md border border-black/10 dark:border-white/15 font-semibold"
            href="/register"
          >
            Go to Register
          </Link>

          <Link
            className="px-4 py-2 rounded-md border border-black/10 dark:border-white/15 font-semibold"
            href="/auth/dashboard"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
