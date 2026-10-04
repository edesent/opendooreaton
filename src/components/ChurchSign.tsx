import { Mark } from "./Logo";
import Phone from "./Phone";
import { pastor, weekly } from "@/lib/site";

/**
 * A working copy of the sign on the church lawn: white panel, navy rule,
 * the open-door mark, service times, pastor and phone. The times come from
 * `weekly` in lib/site.ts, so changing them there changes the sign too.
 */
export default function ChurchSign({ className = "" }: { className?: string }) {
  const sun = weekly.filter((w) => w.day === "Sunday");
  const rest = weekly.filter((w) => w.day !== "Sunday");
  const left = sun.slice(0, 2);
  const right = [...sun.slice(2), ...rest];

  return (
    <figure className={`relative mx-auto w-full max-w-[44rem] px-[5%] ${className}`}>
      {/* posts */}
      <div className="absolute bottom-0 left-[2%] top-[-3%] w-[4.5%] rounded-t-sm bg-gradient-to-r from-white to-[#e6e8e2] shadow-md">
        <div className="absolute -top-[3%] left-[-12%] right-[-12%] h-[5%] rounded-sm bg-white shadow" />
      </div>
      <div className="absolute bottom-0 right-[2%] top-[-3%] w-[4.5%] rounded-t-sm bg-gradient-to-r from-white to-[#e6e8e2] shadow-md">
        <div className="absolute -top-[3%] left-[-12%] right-[-12%] h-[5%] rounded-sm bg-white shadow" />
      </div>

      <div className="relative mb-[14%] rounded-[4px] bg-white p-[2.2%] shadow-[0_30px_60px_-30px_rgba(12,18,48,0.5)]">
        <div className="rounded-[3px] p-[4%] ring-[3px] ring-navy sm:p-[3.5%]">
          <div className="flex items-center gap-[4%]">
            <Mark className="h-auto w-[19%] shrink-0 rounded-none" />
            <div className="min-w-0 flex-1 text-center text-navy">
              <p className="text-[clamp(1.6rem,6.4vw,3.4rem)] font-extrabold uppercase leading-none tracking-[0.02em]">
                Open Door
              </p>
              <p className="mt-1 text-[clamp(1.25rem,5vw,2.65rem)] font-bold leading-none">Church of God</p>
            </div>
          </div>

          <div className="mt-[4%] grid grid-cols-1 gap-x-[6%] gap-y-1.5 text-navy sm:grid-cols-2">
            {[left, right].map((col, i) => (
              <dl key={i} className="grid gap-1.5">
                {col.map((w) => (
                  <div key={w.name} className="flex items-baseline justify-between gap-3 text-[clamp(0.95rem,2.6vw,1.3rem)] font-bold">
                    <dt>{w.short}</dt>
                    <dd className="tabular-nums">{w.time.replace(":00", "").replace(" ", "")}</dd>
                  </div>
                ))}
              </dl>
            ))}
          </div>

          <div className="mt-[4%] flex flex-wrap items-end justify-between gap-x-6 gap-y-2 text-navy">
            <p className="text-[clamp(0.95rem,2.4vw,1.2rem)] font-bold leading-tight">
              Pastor
              <br />
              {pastor.name}
            </p>
            <Phone
              className="text-[clamp(1.4rem,4.6vw,2.4rem)] font-extrabold tabular-nums tracking-tight hover:text-sky-deep"
              fallback="Call the church"
            />
          </div>
        </div>
      </div>
      <figcaption className="sr-only">
        Service times: {weekly.map((w) => `${w.name} ${w.day} ${w.time}`).join("; ")}.
      </figcaption>
    </figure>
  );
}
