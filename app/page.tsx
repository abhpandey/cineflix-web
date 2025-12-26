import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-[calc(100vh-56px)] bg-black">
      {/* Background image */}
      <Image
        src="/background.jpg"
        alt="Cineflix hero background"
        fill
        priority
        className="object-cover opacity-80"
      />

      {/* Dark overlay like the sample */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Empty content area (you said no content yet) */}
      <div className="relative mx-auto max-w-6xl px-4 py-10" />
    </main>
  );
}
