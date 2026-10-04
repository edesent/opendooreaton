import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap py-32 text-center">
      <p className="eyebrow text-brass">Page not found</p>
      <h1 className="display mt-4 text-6xl text-navy-ink">Wrong door.</h1>
      <p className="mx-auto mt-5 max-w-md text-lg text-ink/70">That page isn’t here, but the front door is always open.</p>
      <Link href="/" className="btn btn-navy mt-8">
        Back to the front door
      </Link>
    </section>
  );
}
