import Link from "next/link";
import Image from "next/image";
import {
  skeletonAuthLinks,
  skeletonNavLinks,
} from "@/components/skeleton/nav-links";

export function SkeletonPlatformHeader() {
  return (
    <header className="w-full border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/pulse/Pulse%20-%20Red%20Rec%20Icon.svg"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7"
            aria-hidden
          />
          <span className="text-sm font-semibold tracking-wide">
            Pulse <span className="text-neutral-500">PROJECT INTELLIGENCE</span>
          </span>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {skeletonNavLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-neutral-700 hover:text-neutral-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden h-7 w-7 items-center justify-center rounded-full border border-neutral-300 text-xs sm:flex"
            aria-label="Toggle theme"
          >
            ◐
          </button>
          <button
            type="button"
            className="hidden h-7 items-center rounded-full border border-neutral-300 px-2 text-xs sm:flex"
            aria-label="Switch language"
          >
            EN
          </button>
          <Link
            href={skeletonAuthLinks.signIn}
            className="text-sm text-neutral-700 hover:text-neutral-950"
          >
            Sign in
          </Link>
          <Link
            href={skeletonAuthLinks.requestDemo}
            className="rounded-md border border-neutral-900 bg-neutral-900 px-3 py-1.5 text-sm text-white"
          >
            Request Demo →
          </Link>
        </div>
      </div>
    </header>
  );
}
