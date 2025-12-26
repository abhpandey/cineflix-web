import LoginForm from "../_components/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen grid place-items-center p-4">
      <section className="w-full max-w-md rounded-xl border border-black/10 dark:border-white/15 bg-background p-6">
        <h1 className="text-2xl font-bold">Welcome back</h1>
        <p className="text-sm text-foreground/70 mt-1 mb-6">
          Sign in to continue
        </p>
        <LoginForm />
      </section>
    </main>
  );
}
