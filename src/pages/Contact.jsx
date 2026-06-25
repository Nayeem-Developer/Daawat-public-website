import { business, contactActions } from '../data/siteData.js'

function Contact() {
  return (
    <div className="space-y-10 pb-6">
      <section className="section-card overflow-hidden">
        <div className="grid gap-8 px-6 py-10 sm:px-8 lg:grid-cols-[1fr,0.95fr] lg:px-10">
          <div>
            <span className="eyebrow">Contact Daawat</span>
            <h1 className="section-title">Restaurant support and ordering details</h1>
            <p className="section-copy">
              Reach Daawat directly for current availability, delivery confirmation,
              payment support, and order assistance.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {contactActions.map((action, index) => (
                <a
                  key={action.label}
                  className={index === 0 ? 'button-primary' : 'button-secondary'}
                  href={action.href}
                >
                  {action.label}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] bg-brand-deepGreen p-6 text-brand-cream shadow-card sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
              Customer Support
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-brand-cream">
              {business.name}
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-brand-cream/85 sm:text-base">
              <p>{business.location}</p>
              <p>Call: {business.phones[0]}</p>
              <p>Alternate Phone: {business.phones[1]}</p>
              <p>WhatsApp: {business.whatsapp}</p>
              <p>Email: {business.email}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <article className="section-card p-6">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-muted">
            Restaurant
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-brand-deepGreen">
            {business.name}
          </h2>
          <p className="mt-3 text-sm leading-7 text-brand-muted">{business.location}</p>
        </article>

        <article className="section-card p-6">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-muted">
            Call
          </p>
          <div className="mt-4 space-y-2 text-sm font-semibold leading-7 text-brand-deepGreen">
            <p>{business.phones[0]}</p>
            <p>{business.phones[1]}</p>
          </div>
        </article>

        <article className="section-card p-6">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-muted">
            WhatsApp
          </p>
          <p className="mt-4 text-sm font-semibold leading-7 text-brand-deepGreen">
            {business.whatsapp}
          </p>
        </article>

        <article className="section-card p-6">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-muted">
            Email
          </p>
          <p className="mt-4 break-all text-sm font-semibold leading-7 text-brand-deepGreen">
            {business.email}
          </p>
        </article>
      </section>

      <section className="section-card p-6 sm:p-8">
        <span className="eyebrow">Availability</span>
        <h2 className="section-title">Business hours may vary</h2>
        <p className="section-copy">{business.hoursNote}</p>
      </section>
    </div>
  )
}

export default Contact
