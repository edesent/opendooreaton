"use client";

import { useMemo, useState } from "react";
import { nextSundays } from "@/lib/site";
import Phone from "./Phone";
import { useForm } from "./useFormToken";

function Sent({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-[1.5rem] bg-navy-deep p-8 text-white sm:p-10" role="status">
      <p className="display text-4xl text-brass-pale sm:text-5xl">{title}</p>
      <p className="mt-4 text-lg text-white/85">{body}</p>
    </div>
  );
}

function Honeypot() {
  return (
    <div className="absolute -left-[9999px]" aria-hidden>
      <label>
        Company <input name="company" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}

function ErrorNote({ error }: { error: string }) {
  return (
    <p role="alert" className="rounded-xl bg-navy/5 p-4 font-medium text-navy ring-1 ring-navy/30 sm:col-span-2">
      {error} <Phone className="font-bold underline" fallback="" />
    </p>
  );
}

function fields(form: HTMLFormElement) {
  return Object.fromEntries(new FormData(form).entries());
}

function Choice({
  name,
  options,
  value,
  onChange,
  cols = 3,
}: {
  name: string;
  options: { id: string; label: string; hint?: string }[];
  value: string;
  onChange: (v: string) => void;
  cols?: 2 | 3;
}) {
  return (
    <div className={`grid gap-2 ${cols === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`} role="radiogroup" aria-label={name}>
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          role="radio"
          aria-checked={value === o.id}
          onClick={() => onChange(o.id)}
          className={`rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
            value === o.id ? "bg-navy text-white shadow-lg" : "bg-white ring-1 ring-inset ring-ink/15 hover:ring-navy/50"
          }`}
        >
          {o.label}
          {o.hint && <span className={`mt-0.5 block text-xs font-normal ${value === o.id ? "text-white/75" : "text-ink/55"}`}>{o.hint}</span>}
        </button>
      ))}
    </div>
  );
}

const services = [
  { id: "both", label: "Sunday School & Worship", hint: "9:45 am" },
  { id: "morning", label: "Morning Worship", hint: "11:00 am" },
  { id: "night", label: "Sunday Night", hint: "6:00 pm" },
];

/** "We're coming." */
export function VisitForm() {
  const { submit, status, error } = useForm("visit");
  const [service, setService] = useState(services[0].id);
  const chosen = services.find((s) => s.id === service) ?? services[0];
  const days = useMemo(() => nextSundays(4), []);

  if (status === "sent")
    return (
      <Sent
        title="The door will be open."
        body="Pastor Bane and the church family will be watching for you on South Franklin Street. Come as you are."
      />
    );

  return (
    <form
      className="relative grid gap-5 sm:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        submit({ ...fields(e.currentTarget), service: `${chosen.label} (${chosen.hint})` });
      }}
    >
      <div className="sm:col-span-2">
        <label htmlFor="v-name" className="label">
          Your name
        </label>
        <input id="v-name" name="name" required className="field" autoComplete="name" />
      </div>
      <div className="sm:col-span-2">
        <span className="label">When will you arrive?</span>
        <Choice name="When will you arrive?" options={services} value={service} onChange={setService} />
      </div>
      <div>
        <label htmlFor="v-day" className="label">
          Which Sunday?
        </label>
        <select id="v-day" name="day" className="field" defaultValue={days[0].value}>
          {days.map((d) => (
            <option key={d.value} value={d.value}>
              {d.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="v-party" className="label">
          How many coming?
        </label>
        <select id="v-party" name="party" className="field" defaultValue="1">
          {["1", "2", "3", "4", "5", "6", "7", "8+"].map((n) => (
            <option key={n}>{n}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="v-contact" className="label">
          Phone or email (so we can say hello)
        </label>
        <input id="v-contact" name="contact" className="field" autoComplete="email" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="v-note" className="label">
          Anything we should know? (optional)
        </label>
        <textarea id="v-note" name="note" rows={3} className="field" />
      </div>
      <label className="flex items-center gap-3 sm:col-span-2">
        <input type="checkbox" name="kids" className="h-5 w-5 accent-[var(--navy)]" />
        I’m bringing kids
      </label>
      <Honeypot />
      {status === "error" && <ErrorNote error={error} />}
      <div className="sm:col-span-2">
        <button type="submit" className="btn btn-navy w-full sm:w-auto" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "We’re coming"}
        </button>
      </div>
    </form>
  );
}

const topics = ["Planning a visit", "Talking with the pastor", "Prayer or a hard season", "Giving", "Something else"];

export function ContactForm() {
  const { submit, status, error } = useForm("contact");

  if (status === "sent")
    return <Sent title="Message sent." body="Thank you for reaching out. Someone from Open Door will get back to you soon." />;

  return (
    <form
      className="relative grid gap-5 sm:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        submit(fields(e.currentTarget));
      }}
    >
      <div className="sm:col-span-2">
        <label htmlFor="c-name" className="label">
          Your name
        </label>
        <input id="c-name" name="name" required className="field" autoComplete="name" />
      </div>
      <div>
        <label htmlFor="c-email" className="label">
          Email
        </label>
        <input id="c-email" name="email" type="email" className="field" autoComplete="email" />
      </div>
      <div>
        <label htmlFor="c-phone" className="label">
          Phone
        </label>
        <input id="c-phone" name="phone" type="tel" className="field" autoComplete="tel" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="c-topic" className="label">
          What’s it about?
        </label>
        <select id="c-topic" name="topic" className="field" defaultValue={topics[0]}>
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="c-message" className="label">
          Message
        </label>
        <textarea id="c-message" name="message" rows={5} required className="field" />
      </div>
      <Honeypot />
      {status === "error" && <ErrorNote error={error} />}
      <div className="sm:col-span-2">
        <button type="submit" className="btn btn-navy" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}

/** Prayer requests reach the pastors; "confidential" marks them pastor-only. */
export function PrayerForm() {
  const { submit, status, error } = useForm("prayer");

  if (status === "sent")
    return <Sent title="We're praying." body="Your request reached Pastor Bane. You are not walking through this alone." />;

  return (
    <form
      className="relative grid gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        submit(fields(e.currentTarget));
      }}
    >
      <div>
        <label htmlFor="p-request" className="label">
          How can we pray for you?
        </label>
        <textarea id="p-request" name="request" rows={5} required className="field" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="p-name" className="label">
            Name (optional)
          </label>
          <input id="p-name" name="name" className="field" autoComplete="name" />
        </div>
        <div>
          <label htmlFor="p-contact" className="label">
            Phone or email (optional)
          </label>
          <input id="p-contact" name="contact" className="field" />
        </div>
      </div>
      <label className="flex items-center gap-3">
        <input type="checkbox" name="confidential" className="h-5 w-5 accent-[var(--navy)]" />
        Keep this between me and the pastor
      </label>
      <label className="flex items-center gap-3">
        <input type="checkbox" name="wantsCall" className="h-5 w-5 accent-[var(--navy)]" />
        I’d like someone to call me
      </label>
      <Honeypot />
      {status === "error" && <ErrorNote error={error} />}
      <div>
        <button type="submit" className="btn btn-navy" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send prayer request"}
        </button>
      </div>
    </form>
  );
}
