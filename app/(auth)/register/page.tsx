import RegisterForm from "../_components/RegisterForm";

export default function RegisterPage() {
  return (
    <main className="min-h-screen grid place-items-center p-4">
      <section className="w-full max-w-md rounded-xl border border-black/10 dark:border-white/15 bg-background p-6">
        <h1 className="text-2xl font-bold">Create account</h1>
        <p className="text-sm text-foreground/70 mt-1 mb-6">
          Get started in under a minute
        </p>
        <RegisterForm />
      </section>
    </main>
  );
}
