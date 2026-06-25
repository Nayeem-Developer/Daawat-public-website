import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { business, policyLinks, primaryNav } from '../data/siteData.js'

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [policyOpen, setPolicyOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
    setPolicyOpen(false)
  }, [location.pathname])

  const isPolicyRoute = useMemo(
    () => policyLinks.some((link) => link.to === location.pathname),
    [location.pathname],
  )

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="section-card flex items-center justify-between px-5 py-4 sm:px-6">
          <Link className="flex items-center gap-4" to="/">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-deepGreen text-lg font-extrabold text-brand-cream shadow-soft">
              D
            </div>
            <div>
              <div className="font-display text-3xl font-semibold leading-none text-brand-deepGreen">
                {business.name}
              </div>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.28em] text-brand-muted">
                Srikalahasti, Andhra Pradesh
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {primaryNav.map((item) => (
              <NavLink
                key={item.to}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'nav-link-active' : ''}`
                }
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}

            <div className="relative">
              <button
                className={`nav-link inline-flex items-center gap-2 ${
                  isPolicyRoute || policyOpen ? 'nav-link-active' : ''
                }`}
                type="button"
                onClick={() => setPolicyOpen((open) => !open)}
              >
                Policies
                <span className="text-xs">{policyOpen ? '^' : 'v'}</span>
              </button>

              {policyOpen && (
                <div className="absolute right-0 top-12 w-72 rounded-3xl border border-brand-border bg-white p-3 shadow-card">
                  {policyLinks.map((item) => (
                    <NavLink
                      key={item.to}
                      className={({ isActive }) =>
                        `block rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                          isActive
                            ? 'bg-brand-deepGreen text-white'
                            : 'text-brand-text hover:bg-brand-cream'
                        }`
                      }
                      to={item.to}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <button
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-border text-brand-deepGreen lg:hidden"
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="text-lg">{mobileOpen ? 'X' : '='}</span>
          </button>
        </div>

        {mobileOpen && (
          <div className="section-card mt-3 px-5 py-5 lg:hidden">
            <nav className="flex flex-col gap-2">
              {[...primaryNav, ...policyLinks].map((item) => (
                <NavLink
                  key={item.to}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                      isActive
                        ? 'bg-brand-deepGreen text-white'
                        : 'text-brand-text hover:bg-brand-cream'
                    }`
                  }
                  to={item.to}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
