import Link from "next/link";
import { church, nav, pastor, verse, weekly } from "@/lib/site";
import Logo from "./Logo";
import Phone from "./Phone";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-ink text-white">
      <div className="wrap grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr] md:py-20">
        <div>
          <Logo light />
          <p className="display-i mt-8 max-w-sm text-2xl leading-snug text-white/90">“{verse.text}”</p>
          <p className="eyebrow mt-3 text-brass-pale/80">{verse.ref}</p>
        </div>
        <div>
          <p className="eyebrow text-sky-mid">Find us</p>
          <address className="mt-4 not-italic leading-relaxed text-white/85">
            {church.street}
            <br />
            {church.city}, {church.state} {church.zip}
          </address>
          <p className="mt-3">
            <Phone className="font-semibold text-white underline decoration-white/30 underline-offset-4 hover:decoration-white" />
          </p>
          <a href={church.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-semibold text-brass-pale hover:underline">
            Directions →
          </a>
          <p className="mt-6 text-sm text-white/60">{pastor.full}</p>
        </div>
        <div>
          <p className="eyebrow text-sky-mid">Doors open</p>
          <ul className="mt-4 space-y-2 text-white/85">
            {weekly.map((w) => (
              <li key={w.name} className="flex justify-between gap-4 border-b border-white/10 pb-2">
                <span>{w.name.replace(" Service", "")}</span>
                <span className="tabular-nums text-white/60">{w.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-4 py-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {church.name} · {church.city}, {church.stateCode}
          </p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="hover:text-white">
                {n.label}
              </Link>
            ))}
            <a href={church.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Facebook
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
