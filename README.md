# Open Door Church of God, Eaton, Ohio

Website for Open Door Church of God, 215 S. Franklin Street, Eaton, OH 45320 (Preble County).
Pastor: **Paul David Bane**. Church of God (Cleveland, Tennessee). They have no website of their own; their only web presence is facebook.com/OpenDoorChurchofGod.

Preview: https://opendooreaton.dfd.llc (hidden from search engines; see "Going live").

## Read this before editing (for people and AI assistants)

- **Next.js 16.2 (App Router) + React 19 + Tailwind CSS v4.** This is NOT Next 13/14:
  - Page `params` and `searchParams` are **Promises**. Write `({ params }: { params: Promise<{ slug: string }> })` and `await params`.
  - Never name a component prop `ref`; it is reserved in React 19.
  - Tailwind v4 has no `tailwind.config.js`. Colours and fonts live in `src/app/globals.css` under `:root` and `@theme inline`. Custom classes go inside `@layer components`.
- **Type curly quotes and apostrophes as the characters themselves (’ “ ”), not as `&rsquo;` / `&ldquo;`.** An entity inside a multi-line JSX sentence can silently eat the space before it.
- **Deploys:** every push to `main` auto-deploys on Vercel. Run `npm run build` first. If the type-check fails, the live site does not update.
- **Commit email** must be `Elimark1611@gmail.com`, or Vercel blocks the deploy.
- **Fonts are self-hosted** in `src/fonts/`: DM Serif Display (headlines; italic for Scripture) and Figtree (body, and the lettering on the replica sign). Don't switch to `next/font/google`, because it can fail the Vercel build.

## Where things live

| To change… | Edit |
| --- | --- |
| Service times (also updates the replica sign, footer and search data) | `weekly` in `src/lib/site.ts` |
| Address, phone, pastor, verse | `church`, `pastor` and `verse` in `src/lib/site.ts` |
| Giving link, live stream | `links` in `src/lib/site.ts` (see "Placeholders") |
| Dated events | `events` in `src/lib/site.ts` |
| Beliefs | `beliefs` in `src/lib/site.ts` |
| Navigation | `nav` in `src/lib/site.ts` |
| Photos | `public/photos/`. Alt text sits next to each image where it is used |
| The opening doors on the home page | `src/components/Doorway.tsx` |
| The replica church sign | `src/components/ChurchSign.tsx` |
| The drawn street map | `src/components/StreetMap.tsx` |

## The concept

The church is named for **Revelation 3:8**: “I have set before thee an open door, and no man can shut it.” Their sign’s logo is a door standing open onto the sky, with footprints walking in. The site is built around that:

- **Home hero:** their real white double doors, with the narrow windows and the brass lanterns on each side, swing open onto the sky from the logo while footprints walk in. It is pure CSS. Visitors who prefer reduced motion see the doors already open.
- **The sign:** a working copy of the sign on the lawn shows the service times, the pastor and the phone number. It reads from `weekly`.
- **Colours:** navy and white from the sign, sky from the logo, brass from the lanterns, and the pale painted block of the building (`.blockwork`).
- **“Our focus is a healing and restoration of God’s people”** is their own Facebook intro. It is lightly smoothed to “the healing and restoration” in `church.focus`.

## Placeholders

While a value in `links` (`src/lib/site.ts`) is `""`, the site shows a tidy **"Coming soon"** card instead (`src/components/Pending.tsx`).

| `links.` | What to paste | Shows on |
| --- | --- | --- |
| `give` | Online giving link (Tithe.ly, Givelify, PayPal…) | /give |
| `otherGiving` | One line of text, e.g. "Cash App: $OpenDoorEaton" | /give |
| `live` | YouTube or Facebook Live, only if they stream | (not shown yet) |

## Rules that keep the site honest

- **Events expire by themselves.** Each event has `endsOn: "YYYY-MM-DD"` (Eastern time), and the site hides it after that day. Keep `export const revalidate = 3600` on `layout.tsx` and `page.tsx`.
- **No "Watch live" buttons:** they don’t stream. Add one only if they start.
- **Photos:** real church photos only. No stock photos and no AI images. Don’t name anyone in a caption unless the church has named them.
- **The phone number** is stored base64 (`phoneB64`) and assembled in the browser by `src/components/Phone.tsx`. Never type the raw digits into a page.
- **No raw email addresses** on the site. Link to `/contact`.

## Forms

Plan-a-visit, contact and prayer all post to `/api/form`, which forwards each message to a Slack (or Teams) incoming webhook set in `FORM_WEBHOOK_URL`. Until that variable is set, the forms honestly answer "please call the church." Spam protection: a honeypot, a signed load-time token, a rate limit and a no-links rule.

## Going live

1. Register a domain (e.g. opendooreaton.org) and point it at this Vercel project.
2. In Vercel, set `NEXT_PUBLIC_SITE_URL=https://<their domain>`. That turns on search indexing and fixes canonical URLs.
3. Set `FORM_WEBHOOK_URL`.
4. Fill in `links`.

## Sources

- **Pastor-by-the-sign photo** (`pastor-paul-bane-sign.webp`, with crops `pastor-paul-bane.webp` and `front-doors.webp`) is from their Google Maps listing. The service times and the logo come from the sign in that photo.
- **Groundbreaking and Christmas in the Smokies photos** are from their Facebook page. The Smokies photos are only 315 px, so they are used small.
- **Church of God affiliation, pastor’s full name and email** are from the churchofgod.org church locator.

## To confirm with the church

- **Phone:** the site uses (937) 301-5662, from the sign, Facebook and Google. Pastor Bane gave (317) 258-0025 on his forms, which is probably his cell. It is not on the site.
- **Service times** come from the sign photo (SS 10, Sunday Morning 11, Sunday Night 6, Wednesday 7). The older Facebook intro lists Wednesday 7–8:30 and has no Sunday night.
- **The groundbreaking photo:** what was built, and when? The caption only says “Breaking ground, together.”
- **Christmas in the Smokies:** is that a church trip? The copy says the church family went together.
- **Pastor copy** (“shaking hands by the sign…”) and the **beliefs** summary are written for the demo, not quoted from him.
- **Pastor Buck** led the church before Pastor Bane, going by the 2017–2022 Google reviews and a 2022 Facebook post. He might deserve a history line.
- **Photos:** there is no wide shot of the whole building or the inside of the sanctuary. Either one would make a strong addition.
