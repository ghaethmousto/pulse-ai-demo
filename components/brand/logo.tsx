import Image from "next/image";

import { cn } from "@/lib/utils";

export function PulseLogo({
  className,
  withWordmark = true,
  variant = "auto",
}: {
  className?: string;
  withWordmark?: boolean;
  variant?: "auto" | "wine" | "white";
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span aria-hidden className="relative inline-grid size-8 shrink-0 place-items-center">
        {variant === "white" ? (
          <Image
            src="/assets/pulse/Pulse - White Circle Icon.svg"
            alt=""
            width={32}
            height={32}
            priority
          />
        ) : variant === "wine" ? (
          <Image
            src="/assets/pulse/Pulse - Red Circle Icon.svg"
            alt=""
            width={32}
            height={32}
            priority
          />
        ) : (
          <>
            <Image
              src="/assets/pulse/Pulse - Red Circle Icon.svg"
              alt=""
              width={32}
              height={32}
              className="block dark:hidden"
              priority
            />
            <Image
              src="/assets/pulse/Pulse - White Circle Icon.svg"
              alt=""
              width={32}
              height={32}
              className="hidden dark:block"
              priority
            />
          </>
        )}
      </span>
      {withWordmark && (
        <span className="font-semibold tracking-tight text-foreground">
          Pulse<span className="text-wine">AI</span>
        </span>
      )}
    </span>
  );
}
