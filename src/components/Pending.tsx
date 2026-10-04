import Link from "next/link";

/** Stands in for a tool the church hasn't set up yet, instead of a dead button. */
export default function Pending({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-[1.25rem] border-2 border-dashed border-navy/20 bg-white/60 p-6">
      <p className="eyebrow text-brass">Coming soon</p>
      <p className="display mt-2 text-2xl text-navy">{title}</p>
      <p className="mt-2 text-ink/70">{body}</p>
      <Link href="/contact" className="mt-4 inline-block font-semibold text-navy underline underline-offset-4">
        Questions? Reach the church →
      </Link>
    </div>
  );
}
