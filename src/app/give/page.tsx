import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Pending from "@/components/Pending";
import { church, links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Give",
  description: `Support the ministry of ${church.name} in ${church.city}, Ohio.`,
};

export default function Give() {
  return (
    <>
      <PageHead eyebrow="Give" title={<>Keep the lights on <span className="display-i">and the door open.</span></>}>
        Every gift keeps a small church on South Franklin Street praying for the sick, feeding its neighbors, and welcoming
        whoever walks in next.
      </PageHead>
      <section className="wrap grid gap-8 py-20 md:grid-cols-2">
        <div className="rounded-[1.75rem] bg-white p-8 ring-1 ring-navy/10">
          <p className="eyebrow text-brass">Online</p>
          <p className="display mt-3 text-3xl text-navy">Give from anywhere</p>
          {links.give ? (
            <a href={links.give} target="_blank" rel="noopener noreferrer" className="btn btn-navy mt-6">
              Give online →
            </a>
          ) : (
            <div className="mt-6">
              <Pending title="Online giving" body="A secure giving link will live right here, so you can give by card or bank from your phone." />
            </div>
          )}
          {links.otherGiving && <p className="mt-6 font-semibold text-ink/80">{links.otherGiving}</p>}
        </div>
        <div className="rounded-[1.75rem] bg-block p-8">
          <p className="eyebrow text-brass">In person</p>
          <p className="display mt-3 text-3xl text-navy">At any service</p>
          <p className="mt-4 leading-relaxed text-ink/75">
            The offering is received during Sunday and Wednesday services. You’re welcome to give by cash or check made out to{" "}
            <strong>{church.name}</strong>.
          </p>
          <p className="mt-6 text-ink/75">By mail:</p>
          <address className="mt-1 not-italic font-semibold text-navy">
            {church.name}
            <br />
            {church.street}
            <br />
            {church.city}, {church.stateCode} {church.zip}
          </address>
        </div>
      </section>
      <section className="wrap pb-20">
        <p className="display-i mx-auto max-w-3xl text-center text-2xl leading-snug text-navy sm:text-3xl">
          “Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a
          cheerful giver.”
        </p>
        <p className="eyebrow mt-4 text-center text-ink/50">2 Corinthians 9:7</p>
      </section>
    </>
  );
}
