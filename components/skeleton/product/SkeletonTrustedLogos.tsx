const logos = [
  "ORA",
  "Dubai Holding",
  "Mubadala",
  "ADNOC",
  "Abu Dhabi Municipality",
  "Dubai Municipality",
  "Aldar",
  "Emaar",
  "Nakheel",
];

export function SkeletonTrustedLogos() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <p className="text-center text-xs uppercase tracking-widest text-neutral-500">
          Trusted by developers across the UAE
        </p>
        <div className="mt-6 grid grid-cols-3 items-center gap-6 sm:grid-cols-5 lg:grid-cols-9">
          {logos.map((logo) => (
            <div
              key={logo}
              className="flex h-10 items-center justify-center text-xs text-neutral-500"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
