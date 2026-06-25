import { Link } from 'react-router-dom'
import { business, policyLinks } from '../data/siteData.js'

function Footer() {
  const footerLinks = [
    { label: 'Home', to: '/' },
    { label: 'Menu', to: '/menu' },
    { label: 'Contact', to: '/contact' },
    ...policyLinks,
  ]

  return (
    <footer className="px-4 pb-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="section-card overflow-hidden">
          <div className="grid gap-8 px-6 py-10 sm:px-8 lg:grid-cols-[1.2fr,0.8fr] lg:px-10">
            <div>
              <span className="eyebrow">Public Restaurant Website</span>
              <h2 className="mt-5 font-display text-4xl font-semibold text-brand-deepGreen">
                {business.name}
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-brand-muted sm:text-base">
                Fresh food ordering support for Srikalahasti, Andhra Pradesh with
                biryani, starters, soups, rice, noodles, and fried chicken.
              </p>
              <div className="mt-6 space-y-2 text-sm font-medium text-brand-text sm:text-base">
                <p>{business.location}</p>
                <p>Call: {business.phones.join(' / ')}</p>
                <p>Email: {business.email}</p>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="font-display text-2xl font-semibold text-brand-deepGreen">
                  Quick Links
                </h3>
                <div className="mt-4 flex flex-col gap-3">
                  {footerLinks.map((item) => (
                    <Link
                      key={item.to}
                      className="text-sm font-semibold text-brand-text transition hover:text-brand-green"
                      to={item.to}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display text-2xl font-semibold text-brand-deepGreen">
                  Delivery & Payments
                </h3>
                <div className="mt-4 space-y-3 text-sm leading-7 text-brand-muted">
                  <p>{business.deliveryArea}</p>
                  <p>{business.paymentMethods}</p>
                  <p>{business.hoursNote}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-brand-border px-6 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-brand-muted sm:px-8 lg:px-10">
            Daawat public website for customer trust and Razorpay verification readiness.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
