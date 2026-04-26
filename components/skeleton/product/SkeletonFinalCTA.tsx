import Link from "next/link";

export function SkeletonFinalCTA() {
  return (
    <section className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h2 className="text-4xl font-semibold leading-tight sm:text-6xl">
          Built for the future.
          <br />
          Available today.
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="#"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950"
          >
            Get started
          </Link>
          <Link
            href="#"
            className="rounded-full border border-neutral-700 bg-neutral-800 px-6 py-3 text-sm font-medium text-white"
          >
            Contact expert
          </Link>
        </div>
      </div>
    </section>
  );
}
