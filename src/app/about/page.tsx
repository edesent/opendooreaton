import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import { beliefs, church, pastor, verse } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Who we are at ${church.name} in ${church.city}, Ohio: our pastor, our beliefs, and why the door is always open.`,
};

export default function About() {
  return (
    <>
      <PageHead eyebrow="About us" title={<>A little church <span className="display-i">with a big door.</span></>}>
        {church.focus}
      </PageHead>

      <section className="wrap grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="prose-church max-w-2xl text-lg leading-relaxed text-ink/80">
          <h2 className="display mb-6 text-4xl text-navy-ink sm:text-5xl">Why “Open Door”?</h2>
          <p>
            Because of a promise. In Revelation 3:8, Jesus says to a small church that felt like it had little strength:{" "}
            <em className="display-i text-xl text-navy">“{verse.text}”</em>
          </p>
          <p>
            That’s us. We’re not a big church, and we don’t try to be. We’re a family of believers on South Franklin Street who
            believe God still heals, still restores, and still opens doors that nobody can shut. So we keep ours open too.
          </p>
          <p>
            Look closely at the sign out front and you’ll see it: a door standing open onto the sky, with footprints walking in.
            That’s the invitation. Come on through.
          </p>
        </div>
        <figure className="polaroid mx-auto max-w-md rotate-1">
          <div className="relative aspect-[3/2] overflow-hidden">
            <Image
              src="/photos/front-doors.webp"
              alt="The church’s white front doors with a brass lantern on each side"
              fill
              sizes="28rem"
              className="object-cover"
            />
          </div>
          <figcaption className="display-i mt-4 text-center text-xl text-navy">215 South Franklin Street</figcaption>
        </figure>
      </section>

      <section className="bg-block">
        <div className="wrap grid items-center gap-12 py-20 md:grid-cols-[0.85fr_1.15fr]">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[1.75rem]">
            <Image
              src="/photos/pastor-paul-bane-sign.webp"
              alt="Pastor Paul Bane standing beside the Open Door Church of God sign"
              fill
              sizes="(min-width: 768px) 28rem, 90vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow text-brass">Our pastor</p>
            <h2 className="display mt-4 text-5xl text-navy-ink">{pastor.full}</h2>
            <div className="prose-church mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
              <p>
                Pastor Bane leads Open Door with a plain Bible, a ready prayer, and an open hand. He preaches on Sunday morning,
                Sunday night and Wednesday night, and he’s the one you’ll see on the lawn shaking hands before service.
              </p>
              <p>He’d love to meet you, whether that’s at the altar, over coffee, or on the phone.</p>
            </div>
            <Link href="/contact" className="btn btn-navy mt-8">
              Reach Pastor Bane
            </Link>
          </div>
        </div>
      </section>

      <section className="wrap py-20">
        <p className="eyebrow text-brass">What we believe</p>
        <h2 className="display mt-4 max-w-3xl text-5xl text-navy-ink">
          Rooted in the {church.fellowship.replace(" (Cleveland, Tennessee)", "")} tradition.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-ink/70">
          We’re part of the {church.fellowship}, a Pentecostal holiness fellowship of churches around the world. In short:
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {beliefs.map((b) => (
            <div key={b.title} className="rounded-[1.5rem] bg-white p-7 ring-1 ring-navy/10">
              <p className="display text-2xl text-navy">{b.title}</p>
              <p className="mt-3 leading-relaxed text-ink/70">{b.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
