import type { Metadata } from "next";
import { PrayerForm } from "@/components/Forms";
import PageHead from "@/components/PageHead";
import Phone from "@/components/Phone";
import { church } from "@/lib/site";

export const metadata: Metadata = {
  title: "Prayer",
  description: `Send a prayer request to ${church.name} in ${church.city}, Ohio. We pray for the sick and for anyone carrying a burden.`,
};

export default function Prayer() {
  return (
    <>
      <PageHead eyebrow="Prayer" title={<>Knock, and it shall be <span className="display-i">opened.</span></>}>
        Sickness, grief, addiction, a marriage, a prodigal, a bill you can’t pay. Whatever it is, you don’t have to carry it by
        yourself. Tell us, and we’ll take it to God.
      </PageHead>
      <section className="wrap grid gap-12 py-20 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[1.75rem] bg-white p-6 shadow-[0_30px_60px_-40px_rgba(12,18,48,0.5)] sm:p-10">
          <PrayerForm />
        </div>
        <aside className="space-y-8">
          <div>
            <p className="display text-3xl text-navy">“Is any sick among you?”</p>
            <p className="mt-3 leading-relaxed text-ink/75">
              “Let him call for the elders of the church; and let them pray over him, anointing him with oil in the name of the
              Lord.” <span className="text-ink/50">James 5:14</span>
            </p>
          </div>
          <div className="rounded-[1.5rem] bg-block p-7">
            <p className="font-bold text-navy">Prayer at the altar</p>
            <p className="mt-2 leading-relaxed text-ink/70">
              The altar is open at every service, Sunday morning, Sunday night and Wednesday night. Come forward, or just raise
              your hand, and someone will pray with you.
            </p>
          </div>
          <div className="rounded-[1.5rem] bg-navy-deep p-7 text-white">
            <p className="font-bold">Need someone right now?</p>
            <p className="mt-2 text-white/75">Call the church and leave a message.</p>
            <Phone className="mt-3 block text-2xl font-extrabold text-brass-pale" />
          </div>
        </aside>
      </section>
    </>
  );
}
