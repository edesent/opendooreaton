import type { Metadata } from "next";
import { ContactForm } from "@/components/Forms";
import PageHead from "@/components/PageHead";
import Phone from "@/components/Phone";
import { church, pastor } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Reach ${church.name} and ${pastor.full} in ${church.city}, Ohio.`,
};

export default function Contact() {
  return (
    <>
      <PageHead eyebrow="Contact" title={<>Come knock. <span className="display-i">Or just write.</span></>}>
        A question before your first visit, a need, or a word for Pastor Bane. Send it here and someone will get back to you.
      </PageHead>
      <section className="wrap grid gap-12 py-20 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[1.75rem] bg-white p-6 shadow-[0_30px_60px_-40px_rgba(12,18,48,0.5)] sm:p-10">
          <ContactForm />
        </div>
        <aside className="space-y-6">
          <div className="rounded-[1.5rem] bg-navy-deep p-7 text-white">
            <p className="eyebrow text-sky-mid">Call</p>
            <Phone className="mt-2 block text-3xl font-extrabold text-white hover:text-brass-pale" />
          </div>
          <div className="rounded-[1.5rem] bg-block p-7">
            <p className="eyebrow text-brass">Visit</p>
            <address className="mt-2 not-italic text-lg font-semibold leading-relaxed text-navy">
              {church.street}
              <br />
              {church.city}, {church.state} {church.zip}
            </address>
            <a href={church.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-semibold text-sky-deep hover:underline">
              Directions →
            </a>
          </div>
          <div className="rounded-[1.5rem] bg-white p-7 ring-1 ring-navy/10">
            <p className="eyebrow text-brass">Follow along</p>
            <a href={church.facebook} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-semibold text-navy hover:underline">
              Open Door Church of God on Facebook →
            </a>
          </div>
        </aside>
      </section>
    </>
  );
}
