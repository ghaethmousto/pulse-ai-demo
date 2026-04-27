"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("skeleton.trustedLogos");
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className="overflow-hidden border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <p className="text-center text-xs uppercase tracking-widest text-muted-foreground">
          {t("label")}
        </p>
        <div className="mt-7 overflow-hidden">
          <div className="logo-marquee-track flex w-max items-center gap-12">
            {marqueeLogos.map((logo, index) => (
              <div
                key={`${logo.label}-${index}`}
                className="logo-strip-item flex h-12 w-32 shrink-0 items-center justify-center transition"
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

          /* Light mode: keep logos neutral with subtle opacity. */
          .logo-strip-item {
            opacity: 0.72;
            filter: grayscale(1);
          }
          .logo-strip-item:hover {
            opacity: 1;
            filter: grayscale(0);
          }
          /* Dark mode: invert dark logos to white monochrome via CSS treatment.
             We never mirror or flip the actual artwork — only its luminance. */
          :is(.dark) .logo-strip-item {
            opacity: 0.7;
            filter: brightness(0) invert(1);
          }
          :is(.dark) .logo-strip-item:hover {
            opacity: 1;
            filter: brightness(0) invert(1);
          }

          @keyframes logo-marquee {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          /* RTL: reverse marquee direction so the row appears to move
             with the natural reading flow. */
          [dir="rtl"] .logo-marquee-track {
            animation-direction: reverse;
          }
          @media (prefers-reduced-motion: reduce) {
            .logo-marquee-track { animation: none; }
          }
        `}</style>
      </div>
    </section>
  );
}
