/** The opening band on inner pages: sky behind, a doorway-shaped title card. */
export default function PageHead({ eyebrow, title, children }: { eyebrow: string; title: React.ReactNode; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-deep via-sky-mid to-sky">
      <div className="grain absolute inset-0" />
      <div className="wrap relative pb-16 pt-14 sm:pb-20 sm:pt-20">
        <p className="eyebrow text-white/85">{eyebrow}</p>
        <h1 className="display mt-4 max-w-4xl text-5xl text-navy-ink sm:text-7xl">{title}</h1>
        {children && <div className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-ink/80 sm:text-xl">{children}</div>}
      </div>
    </section>
  );
}
