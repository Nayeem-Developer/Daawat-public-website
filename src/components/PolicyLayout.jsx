import { business } from '../data/siteData.js'

function PolicyLayout({ eyebrow, title, intro, sections }) {
  return (
    <div className="space-y-10 pb-6">
      <section className="section-card overflow-hidden">
        <div className="grid gap-8 px-6 py-10 sm:px-8 lg:grid-cols-[1.2fr,0.8fr] lg:px-10">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="section-title">{title}</h1>
            <p className="section-copy">{intro}</p>
          </div>

          <div className="rounded-[28px] bg-brand-deepGreen p-6 text-brand-cream shadow-soft">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-brand-gold">
              Contact
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-brand-cream">
              {business.name}
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-7 text-brand-cream/85">
              <p>{business.location}</p>
              <p>Phone: {business.phones.join(' / ')}</p>
              <p>Email: {business.email}</p>
              <p>{business.hoursNote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        {sections.map((section) => (
          <article key={section.title} className="section-card p-6 sm:p-7">
            <h2 className="font-display text-3xl font-semibold text-brand-deepGreen">
              {section.title}
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-brand-muted sm:text-base">
              {section.points.map((point) => (
                <p key={point}>{point}</p>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

export default PolicyLayout
