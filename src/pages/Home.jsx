import { Link } from 'react-router-dom'
import {
  business,
  popularCategories,
  trustHighlights,
} from '../data/siteData.js'

function Home() {
  return (
    <div className="space-y-10 pb-6">
      <section className="section-card overflow-hidden">
        <div className="grid gap-10 px-6 py-10 sm:px-8 lg:grid-cols-[1.1fr,0.9fr] lg:px-10 lg:py-12">
          <div>
            <span className="eyebrow">Premium Food Ordering</span>
            <h1 className="section-title">Fresh Food Ordering in Srikalahasti</h1>
            <p className="section-copy">
              Order biryani, starters, soups, rice, noodles and fried chicken from
              Daawat.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="button-primary" to="/menu">
                View Menu
              </Link>
              <Link className="button-secondary" to="/contact">
                Contact Us
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[24px] border border-brand-border bg-white/70 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-muted">
                  Location
                </p>
                <p className="mt-2 text-sm font-semibold text-brand-deepGreen">
                  {business.location}
                </p>
              </div>
              <div className="rounded-[24px] border border-brand-border bg-white/70 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-muted">
                  Payments
                </p>
                <p className="mt-2 text-sm font-semibold text-brand-deepGreen">
                  COD and Online
                </p>
              </div>
              <div className="rounded-[24px] border border-brand-border bg-white/70 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-muted">
                  Support
                </p>
                <p className="mt-2 text-sm font-semibold text-brand-deepGreen">
                  {business.phones[0]}
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -translate-x-6 translate-y-6 rounded-[32px] bg-brand-gold/15 blur-3xl" />
            <div className="relative rounded-[32px] bg-brand-deepGreen p-6 text-brand-cream shadow-card sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.34em] text-brand-gold">
                Daawat Specials
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold text-brand-cream">
                A complete public restaurant profile built for trust.
              </h2>
              <p className="mt-4 text-sm leading-7 text-brand-cream/85 sm:text-base">
                Customers can review the menu, contact details, payment information,
                delivery area, and service policies in one place.
              </p>

              <div className="mt-8 grid gap-4">
                {['Biryani', 'Fried Chicken', 'Soups', 'Noodles'].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-[22px] border border-white/10 bg-white/10 px-4 py-4"
                  >
                    <div>
                      <p className="text-sm font-bold text-brand-cream">{item}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.24em] text-brand-cream/65">
                        Freshly prepared
                      </p>
                    </div>
                    <span className="rounded-full border border-brand-gold/40 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
                      Available
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-6">
          <span className="eyebrow">Why Customers Trust Daawat</span>
          <h2 className="section-title">Built for confidence before every order</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {trustHighlights.map((item) => (
            <article key={item.title} className="section-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green/10 text-lg font-bold text-brand-green">
                {item.title.charAt(0)}
              </div>
              <h3 className="mt-5 font-display text-3xl font-semibold text-brand-deepGreen">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-brand-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.05fr,0.95fr]">
        <article className="section-card p-6 sm:p-8">
          <span className="eyebrow">Popular Categories</span>
          <h2 className="section-title">From biryani cravings to quick starters</h2>
          <p className="section-copy">
            Browse the categories customers can expect from Daawat when ordering in
            Srikalahasti.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {popularCategories.map((category) => (
              <div
                key={category}
                className="rounded-[24px] border border-brand-border bg-brand-cream/80 px-4 py-4 text-sm font-bold text-brand-deepGreen shadow-soft"
              >
                {category}
              </div>
            ))}
          </div>
        </article>

        <article className="section-card p-6 sm:p-8">
          <span className="eyebrow">Delivery and Payments</span>
          <h2 className="section-title">Clear service information for every customer</h2>
          <div className="mt-6 space-y-5 text-sm leading-7 text-brand-muted sm:text-base">
            <p>{business.deliveryArea}</p>
            <p>{business.paymentMethods}</p>
            <p>{business.hoursNote}</p>
          </div>

          <div className="mt-8 rounded-[28px] bg-brand-maroon p-6 text-brand-cream shadow-soft">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
              Customer Support
            </p>
            <p className="mt-4 text-base leading-7 text-brand-cream/90">
              For current menu availability, pricing, or delivery confirmation, call
              {` ${business.phones[0]} `}
              or
              {` ${business.phones[1]}.`}
            </p>
          </div>
        </article>
      </section>
    </div>
  )
}

export default Home
