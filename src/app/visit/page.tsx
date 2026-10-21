import type { Metadata } from "next";
import ChurchSign from "@/components/ChurchSign";
import { VisitForm } from "@/components/Forms";
import PageHead from "@/components/PageHead";
import StreetMap from "@/components/StreetMap";
import { church, pastor } from "@/lib/site";

export const metadata: Metadata = {
  title: "Plan a visit",
  description: `Service times, directions and what to expect at ${church.name}, ${church.street}, ${church.city}, Ohio.`,
};

const expect = [
  {
    q: "What should I wear?",
    a: "Whatever you’ve got. You’ll see suits and you’ll see jeans. Nobody is looking at your clothes.",
  },
  {
    q: "What is a service like?",
    a: "Heartfelt singing, the old songs and some newer ones. Prayer at the altar for anyone who wants it. Then Pastor Bane opens the Bible and preaches. Mornings run about an hour and a half.",
  },
  {
    q: "Will I be put on the spot?",
    a: "No. You won’t be asked to stand up or speak. Someone will say hello and shake your hand, and that’s about it.",
  },
  {
    q: "What about my kids?",
    a: "Children are welcome in every service, wiggles and all. Sunday School at 9:45 has a place for every age.",
  },
  {
    q: "Where do I park?",
    a: "Along South Franklin Street and the side streets right around the church. It’s a short walk to the front doors.",
  },
  {
    q: "Is the building accessible?",
    a: "Call ahead and we’ll be at the door to help you in.",
  },
];

export default function Visit() {
  return (
    <>
      <PageHead eyebrow="Plan a visit" title={<>Your first Sunday, <span className="display-i">made easy.</span></>}>
        Here’s everything you need to walk in with confidence: when, where, and what happens once you’re inside.
      </PageHead>

      <section className="bg-gradient-to-b from-sky to-paper pt-4">
        <div className="wrap">
          <ChurchSign />
        </div>
      </section>

      <section className="wrap grid gap-14 py-20 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="eyebrow text-brass">Finding us</p>
          <h2 className="display mt-4 text-4xl text-navy-ink sm:text-5xl">{church.street}</h2>
          <p className="mt-3 text-lg text-ink/70">
            {church.city}, {church.state} {church.zip} · {church.county}
          </p>
          <StreetMap className="mt-8" />
        </div>
        <div>
          <p className="eyebrow text-brass">What to expect</p>
          <dl className="mt-6 divide-y divide-navy/10 border-y border-navy/10">
            {expect.map((e) => (
              <div key={e.q} className="py-5">
                <dt className="display text-2xl text-navy">{e.q}</dt>
                <dd className="mt-2 leading-relaxed text-ink/75">{e.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="plan" className="scroll-mt-24 bg-block">
        <div className="wrap grid gap-12 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow text-brass">Let us know you’re coming</p>
            <h2 className="display mt-4 text-5xl text-navy-ink">We’ll hold the door.</h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/75">
              You don’t have to tell us. But if you do, {pastor.title} {pastor.name} will be watching for you, and someone will
              meet you at the door and save you a seat.
            </p>
          </div>
          <div className="rounded-[1.75rem] bg-white p-6 shadow-[0_30px_60px_-40px_rgba(12,18,48,0.5)] sm:p-10">
            <VisitForm />
          </div>
        </div>
      </section>
    </>
  );
}
