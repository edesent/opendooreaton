import Image from "next/image";
import Link from "next/link";
import ChurchSign from "@/components/ChurchSign";
import Doorway from "@/components/Doorway";
import StreetMap from "@/components/StreetMap";
import { church, knocks, pastor, upcomingEvents, verse, weekly } from "@/lib/site";

export const revalidate = 3600;

const smokies = [
  { src: "/photos/smokies-dinner-1.webp", alt: "Church members sharing a meal at round tables decorated for Christmas", rot: "-rotate-3" },
  { src: "/photos/smokies-purpose-quartet.webp", alt: "Purpose Quartet singing on stage at Christmas in the Smokies", rot: "rotate-2" },
  { src: "/photos/smokies-coffee-1.webp", alt: "Three men in caps talking over coffee at a table", rot: "-rotate-1" },
  { src: "/photos/smokies-the-oneys.webp", alt: "The Oneys singing on stage at Christmas in the Smokies", rot: "rotate-3" },
];

export default function Home() {
  const events = upcomingEvents();

  return (
    <>
      {/* ───────── Hero: the doors open ───────── */}
      <section className="blockwork relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/85 to-paper/30" />
        <div className="wrap relative grid items-center gap-14 pb-20 pt-10 lg:grid-cols-[1.05fr_1fr] lg:pb-28 lg:pt-16">
          <div>
            <p className="eyebrow text-brass">Church of God · {church.city}, {church.state}</p>
            <h1 className="display mt-5 text-[clamp(3.4rem,9vw,7rem)] text-navy-ink">
              The door
              <br />
              is <span className="display-i text-sky-deep">open.</span>
            </h1>
            <p className="mt-7 max-w-xl text-xl leading-relaxed text-ink/80">
              On South Franklin Street there’s a little white church with its doors propped open and the lanterns lit.
              Whatever you’re carrying, bring it in. {church.focus}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/visit#plan" className="btn btn-navy">
                Plan your first Sunday
              </Link>
              <Link href="#times" className="btn btn-line">
                Service times
              </Link>
            </div>
            <p className="mt-10 max-w-md border-l-2 border-brass/60 pl-4 text-ink/70">
              <span className="display-i text-lg text-navy">“{verse.text}”</span>
              <span className="eyebrow mt-1 block !text-[0.7rem] text-ink/50">{verse.ref}</span>
            </p>
          </div>
          <div className="px-[6%] sm:px-[10%] lg:px-[4%]">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[30rem] overflow-hidden rounded-[1.75rem] shadow-[0_40px_80px_-30px_rgba(12,18,48,0.55)]">
              <Image
                src="/photos/open-door-church-front.webp"
                alt="The white front of Open Door Church of God with its entrance and church sign"
                fill
                sizes="(min-width: 1024px) 30rem, 90vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───────── The sign out front ───────── */}
      <section id="times" className="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-sky via-sky to-[#cfe0bf]">
        <div className="wrap relative pt-20 text-center sm:pt-24" data-reveal>
          <p className="eyebrow text-navy/60">Out front on the lawn</p>
          <h2 className="display mx-auto mt-4 max-w-3xl text-5xl text-navy-ink sm:text-6xl">Four times a week, the lights are on.</h2>
        </div>
        <div className="wrap relative mt-14" data-reveal="1">
          <ChurchSign />
        </div>
        {/* lawn */}
        <div className="h-16 bg-gradient-to-b from-[#a9c48e] to-[#8fb172]" />
        <div className="bg-[#8fb172]">
          <div className="wrap grid gap-4 pb-20 sm:grid-cols-2 lg:grid-cols-4">
            {weekly.map((w, i) => (
              <div key={w.name} className="rounded-[1.25rem] bg-white/90 p-6 shadow-sm backdrop-blur" data-reveal={i}>
                <p className="eyebrow !text-[0.7rem] text-brass">{w.day}</p>
                <p className="display mt-2 text-3xl text-navy">{w.time}</p>
                <p className="mt-1 font-bold text-ink">{w.name}</p>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/65">{w.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Healing & restoration ───────── */}
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div className="grain absolute inset-0" />
        <div className="wrap relative py-24 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-end">
            <div data-reveal>
              <p className="eyebrow text-sky-mid">Why we’re here</p>
              <h2 className="display mt-5 text-5xl sm:text-6xl">
                Healing and restoration <span className="display-i text-brass-pale">for God’s people.</span>
              </h2>
            </div>
            <p className="text-xl leading-relaxed text-white/75" data-reveal="1">
              That’s how this church describes itself, in its own words, and it’s the whole idea. People come through these doors
              tired, grieving, starting over, or just curious. Nobody gets turned away at the threshold. We pray for the sick, we
              open the Bible, and we leave the light on for whoever needs it next.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {knocks.map((k, i) => (
              <Link
                key={k.title}
                href={k.href}
                className="group relative flex flex-col rounded-[1.5rem] bg-white/[0.06] p-8 ring-1 ring-white/10 transition hover:bg-white/[0.1]"
                data-reveal={i}
              >
                <span className="display text-6xl text-sky-mid/40">{String(i + 1).padStart(2, "0")}</span>
                <p className="display mt-4 text-3xl">{k.title}</p>
                <p className="mt-3 flex-1 leading-relaxed text-white/70">{k.body}</p>
                <p className="mt-6 font-bold text-brass-pale">
                  {k.cta} <span className="inline-block transition group-hover:translate-x-1">→</span>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Pastor ───────── */}
      <section className="wrap grid items-center gap-12 py-24 sm:py-28 md:grid-cols-[0.8fr_1.2fr]">
        <div className="relative mx-auto w-full max-w-sm" data-reveal>
          <div className="absolute -inset-3 -rotate-2 rounded-[2rem] bg-sky" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem]">
            <Image
              src={pastor.photo}
              alt="Pastor Paul Bane standing on the church lawn in a dark suit and tie"
              fill
              sizes="(min-width: 768px) 24rem, 90vw"
              className="object-cover object-top"
            />
          </div>
        </div>
        <div data-reveal="1">
          <p className="eyebrow text-brass">Meet the pastor</p>
          <h2 className="display mt-4 text-5xl text-navy-ink sm:text-6xl">{pastor.full}</h2>
          <div className="prose-church mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
            <p>
              Pastor Bane is the man you’ll find standing by the sign on Sunday morning, in a suit and a smile, shaking hands
              before the first song. He preaches the Bible plainly and prays like he means it.
            </p>
            <p>
              If you’ve got a question about God, a burden you can’t put down, or you just want to know what you’re walking into
              before you come, he’d be glad to hear from you.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/about" className="btn btn-navy">
              About our church
            </Link>
            <Link href="/contact" className="btn btn-line">
              Talk with Pastor Bane
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── Church family ───────── */}
      <section className="blockwork relative overflow-hidden py-24 sm:py-28">
        <div className="wrap relative grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <figure className="polaroid mx-auto w-full max-w-xl -rotate-1" data-reveal>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/photos/breaking-ground.webp"
                alt="The church family gathered on a lawn with shovels and a piece of turned sod, an older man in a suit seated in front"
                fill
                sizes="(min-width: 1024px) 36rem, 90vw"
                className="object-cover"
              />
            </div>
            <figcaption className="display-i mt-4 text-center text-xl text-navy">Breaking ground, together.</figcaption>
          </figure>
          <div data-reveal="1">
            <p className="eyebrow text-brass">The Open Door family</p>
            <h2 className="display mt-4 text-5xl text-navy-ink sm:text-6xl">Small enough to know your name.</h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/75">
              Grandparents, grandkids and everybody in between. We dig in together, eat together, and pile in the cars
              together, all the way to Christmas in the Smokies for an evening of gospel music.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {smokies.map((p) => (
                <div key={p.src} className={`polaroid !pb-3 ${p.rot}`}>
                  <div className="relative aspect-square overflow-hidden">
                    <Image src={p.src} alt={p.alt} fill sizes="160px" className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Upcoming (only when there is something) ───────── */}
      {events.length > 0 && (
        <section className="wrap py-20">
          <p className="eyebrow text-brass">Coming up</p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {events.map((e) => (
              <article key={e.title} className="rounded-[1.5rem] bg-white p-7 ring-1 ring-navy/10">
                <p className="font-bold text-sky-deep">{e.date}</p>
                <h3 className="display mt-2 text-3xl text-navy">{e.title}</h3>
                <p className="mt-3 text-ink/70">{e.body}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* ───────── Come on in ───────── */}
      <section className="wrap grid gap-10 py-24 sm:py-28 lg:grid-cols-2 lg:items-center">
        <div data-reveal>
          <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem]">
            <Image
              src="/photos/open-door-church-front.webp"
              alt="The white front of Open Door Church of God with its entrance and church sign"
              fill
              sizes="(min-width: 1024px) 36rem, 90vw"
              className="object-cover"
            />
          </div>
          <p className="mt-4 text-sm text-ink/55">Open Door Church of God on South Franklin Street.</p>
        </div>
        <div data-reveal="1">
          <p className="eyebrow text-brass">Come on in</p>
          <h2 className="display mt-4 text-5xl text-navy-ink sm:text-6xl">
            {church.street},
            <br />
            <span className="display-i text-sky-deep">{church.city}.</span>
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/75">
            Just south of Main Street, between Wadsworth and Israel. Park along Franklin and walk right in. Wear whatever you
            wore yesterday.
          </p>
          <StreetMap className="mt-8" />
        </div>
      </section>
    </>
  );
}
