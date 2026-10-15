/**
 * Everything a pastor or volunteer is likely to change lives in this file:
 * service times, the pastor, events and the giving links.
 *
 * Any link left as "" shows a tidy "coming soon" card on the site instead of
 * a broken button. Paste the real link in and the card turns into the real thing.
 */

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.opendooreaton.org";

/**
 * Preview hosts stay out of search. The live site is www.opendooreaton.org
 * (NEXT_PUBLIC_SITE_URL in Vercel); any preview host set there turns this on.
 */
export const isDemo = /(\.dfd\.llc|\.vercel\.app|\.elijahdesent\.com)$/.test(new URL(siteUrl).hostname);

export const church = {
  name: "Open Door Church of God",
  short: "Open Door",
  /** Their own words, from the Facebook intro. */
  focus: "Our focus is the healing and restoration of God’s people.",
  street: "215 S. Franklin Street",
  city: "Eaton",
  stateCode: "OH",
  state: "Ohio",
  zip: "45320",
  county: "Preble County",
  /** Church of God (Cleveland, Tennessee). Listed in its church locator. */
  fellowship: "Church of God (Cleveland, Tennessee)",
  // (937) 301-5662, the number on the church sign. Base64 so it never sits in
  // the HTML for scrapers. See components/Phone.tsx.
  phoneB64: "OTM3MzAxNTY2Mg==",
  geo: { lat: 39.7382, lng: -84.6298 },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Open+Door+Church+of+God+215+S+Franklin+St+Eaton+OH+45320",
  facebook: "https://www.facebook.com/OpenDoorChurchofGod/",
};

export const pastor = {
  name: "Paul Bane",
  full: "Pastor Paul David Bane",
  title: "Pastor",
  photo: "/photos/pastor-paul-bane.webp",
};

/** Revelation 3:8 (KJV). The church’s name, in a sentence. */
export const verse = {
  text: "Behold, I have set before thee an open door, and no man can shut it.",
  ref: "Revelation 3:8",
};

/**
 * Online tools. Leave a value as "" until it exists — the site shows a
 * "coming soon" card in its place. See README → "Placeholders".
 */
export const links = {
  /** Online giving page (Tithe.ly, Givelify, PayPal…), e.g. "https://tithe.ly/give?c=1234567". */
  give: "",
  /** One short line of text, not a link, e.g. "Cash App: $OpenDoorEaton". */
  otherGiving: "",
  /** YouTube or Facebook Live, only if services are streamed. */
  live: "",
};

/** From the church sign out front. */
export const weekly = [
  {
    day: "Sunday",
    name: "Sunday School",
    short: "Sunday School",
    time: "10:00 am",
    note: "Open Bibles and honest questions, for every age, before worship.",
  },
  {
    day: "Sunday",
    name: "Sunday Morning Worship",
    short: "Sunday Morning",
    time: "11:00 am",
    note: "Singing, prayer at the altar, and the preaching of the Word.",
  },
  {
    day: "Sunday",
    name: "Sunday Night Service",
    short: "Sunday Night",
    time: "6:00 pm",
    note: "A smaller, closer evening of worship, testimony and prayer.",
  },
  {
    day: "Wednesday",
    name: "Wednesday Night Service",
    short: "Wednesday",
    time: "7:00 pm",
    note: "Midweek Bible study and prayer to carry you to Sunday.",
  },
];

/**
 * Dated events hide themselves the day after `endsOn` (Eastern time).
 * Add one: { title, date: "Sat, Nov 21 · 10 am", endsOn: "2026-11-21", body }
 */
export type ChurchEvent = { title: string; date: string; endsOn: string; body: string };
export const events: ChurchEvent[] = [];

export function upcomingEvents(now = new Date()) {
  const today = now.toLocaleDateString("en-CA", { timeZone: "America/New_York" });
  return events.filter((e) => e.endsOn >= today);
}

/** The next n Sundays (Eastern time), for the plan-a-visit form. */
export function nextSundays(n: number, now = new Date()) {
  const today = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));
  const d = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  d.setDate(d.getDate() + ((7 - d.getDay()) % 7));
  return Array.from({ length: n }, (_, i) => {
    const s = new Date(d);
    s.setDate(d.getDate() + i * 7);
    const value = `${s.getFullYear()}-${String(s.getMonth() + 1).padStart(2, "0")}-${String(s.getDate()).padStart(2, "0")}`;
    const label = s.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
    return { value, label: i === 0 && d.getTime() === today.setHours(0, 0, 0, 0) ? `Today, ${label}` : label };
  });
}

/** What a hurting person can knock on the door for. */
export const knocks = [
  {
    title: "Prayer",
    body: "Bring it to the altar on Sunday, or send it to us tonight. Someone will pray over it by name.",
    href: "/prayer",
    cta: "Send a prayer request",
  },
  {
    title: "A place to start over",
    body: "Healing and restoration is the whole reason this church exists. Come as you are, wherever you’ve been.",
    href: "/visit",
    cta: "Plan your first Sunday",
  },
  {
    title: "Someone to talk to",
    body: "Pastor Bane will sit down with you, listen, and open the Bible with you. No appointment too small.",
    href: "/contact",
    cta: "Reach the pastor",
  },
];

/**
 * A plain Church of God (Cleveland, TN) summary, written for visitors.
 * Not the church’s own statement — confirm with Pastor Bane.
 */
export const beliefs = [
  { title: "The Bible", body: "The whole Bible is the inspired Word of God, and the rule of faith and life." },
  { title: "Salvation", body: "Jesus Christ died for our sins and rose again. Whoever repents and believes is forgiven, made new, and welcome." },
  { title: "Holiness", body: "God doesn’t just forgive us; He changes us. We aim to live clean, set-apart lives by His grace." },
  { title: "The Holy Spirit", body: "The baptism in the Holy Spirit is for believers today, and the gifts of the Spirit are still at work in the church." },
  { title: "Divine healing", body: "Healing is provided for in the atonement. We anoint with oil and pray for the sick, as James 5 teaches." },
  { title: "His return", body: "Jesus is coming again. That hope keeps the door open and the porch light on." },
];

export const nav = [
  { href: "/visit", label: "Visit" },
  { href: "/about", label: "About" },
  { href: "/prayer", label: "Prayer" },
  { href: "/give", label: "Give" },
  { href: "/contact", label: "Contact" },
];
