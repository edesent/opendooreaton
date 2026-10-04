"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled || open ? "bg-paper/95 shadow-[0_1px_0_rgba(26,32,56,0.08)] backdrop-blur" : "bg-paper"
      }`}
    >
      <div className="wrap flex h-20 items-center justify-between gap-6">
        <Link href="/" aria-label="Open Door Church of God, home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`rounded-full px-4 py-2 text-[0.95rem] font-semibold transition ${
                path === n.href ? "bg-navy/8 text-navy" : "text-ink/75 hover:text-navy"
              }`}
            >
              {n.label}
            </Link>
          ))}
          <Link href="/visit#plan" className="btn btn-navy ml-3 !py-2.5 !text-[0.95rem]">
            Plan a visit
          </Link>
        </nav>
        <button
          className="grid h-11 w-11 place-items-center rounded-full ring-1 ring-navy/20 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="relative block h-3.5 w-5">
            <span className={`absolute left-0 h-0.5 w-5 bg-navy transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-5 bg-navy transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-0.5 w-5 bg-navy transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="wrap grid gap-1 pb-6 md:hidden" aria-label="Mobile">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="rounded-xl px-3 py-3 text-lg font-semibold text-navy hover:bg-navy/5">
              {n.label}
            </Link>
          ))}
          <Link href="/visit#plan" className="btn btn-navy mt-2">
            Plan a visit
          </Link>
        </nav>
      )}
    </header>
  );
}
