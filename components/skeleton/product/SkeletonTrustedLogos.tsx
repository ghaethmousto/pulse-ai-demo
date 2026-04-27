import Image from "next/image";

const logos = [
  { label: "ORA", src: "/assets/logos/ora.svg", imgClass: "max-h-6" },
  { label: "Dubai Holding", src: "/assets/logos/dubai-holding.svg", imgClass: "" },
  { label: "Mubadala", src: "/assets/logos/mubadala.svg", imgClass: "" },
  { label: "ADNOC", src: "/assets/logos/adnoc.svg", imgClass: "" },
  { label: "Dubai Municipality", src: "/assets/logos/dm.svg", imgClass: "" },
  { label: "Aldar", src: "/assets/logos/aldar.svg", imgClass: "" },
  { label: "Emaar", src: "/assets/logos/emaar.svg", imgClass: "" },
  { label: "Nakheel", src: "/assets/logos/nakheel.svg", imgClass: "" },
  { label: "Sobha", src: "/assets/logos/sobha.svg", imgClass: "" },
  { label: "ADCB", src: "/assets/logos/adcb.svg", imgClass: "" },
];

export function SkeletonTrustedLogos() {
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className="overflow-hidden border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <p className="text-center text-xs uppercase tracking-widest text-neutral-500">
          Trusted by developers across the UAE
        </p>
        <div className="mt-7 overflow-hidden">
          <div className="logo-marquee-track flex w-max items-center gap-12">
            {marqueeLogos.map((logo, index) => (
              <div
                key={`${logo.label}-${index}`}
                className="flex h-12 w-32 shrink-0 items-center justify-center opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.label}
                  width={128}
                  height={48}
                  className={`w-auto object-contain ${logo.imgClass || "max-h-10"}`}
                />
              </div>
            ))}
          </div>
        </div>
        <style>{`
          .logo-marquee-track {
            animation: logo-marquee 28s linear infinite;
          }

          @keyframes logo-marquee {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
