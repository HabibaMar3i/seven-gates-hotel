export default function Home() {
  return (
    <div className="min-h-screen relative flex items-center justify-center bg-neutral-900">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('/images/pyramids.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-black/55" />

      {/* Content */}
      <main className="relative z-20 text-center px-6">
        <h1 className="text-white text-4xl md:text-6xl font-bold tracking-tight">7 Gates Boutique Hotel Egypt</h1>
        <p className="mt-4 text-amber-100 text-xl md:text-2xl">Coming Soon</p>
      </main>
    </div>
  );
}
