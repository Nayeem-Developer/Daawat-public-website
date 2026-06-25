import menuData from '../data/menuData.js'

function Menu() {
  const itemCount = menuData.reduce((count, section) => count + section.items.length, 0)
  const slugify = (value) => value.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="space-y-10 pb-6">
      <section className="section-card p-6 sm:p-8 lg:p-10">
        <span className="eyebrow">Menu and Pricing</span>
        <h1 className="section-title">Daawat Menu</h1>
        <p className="section-copy">
          Explore the full Daawat menu with biryani, veg starters, non-veg starters,
          soups, rice, noodles, and fried chicken.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-[24px] border border-brand-border bg-white/80 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-muted">
              Categories
            </p>
            <p className="mt-2 font-display text-3xl font-semibold text-brand-deepGreen">
              {menuData.length}
            </p>
          </div>
          <div className="rounded-[24px] border border-brand-border bg-white/80 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-muted">
              Menu Items
            </p>
            <p className="mt-2 font-display text-3xl font-semibold text-brand-deepGreen">
              {itemCount}
            </p>
          </div>
          <div className="rounded-[24px] border border-brand-border bg-white/80 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-muted">
              Pricing Note
            </p>
            <p className="mt-2 text-sm font-semibold leading-6 text-brand-deepGreen">
              Prices may change based on availability.
            </p>
          </div>
        </div>
      </section>

      <section className="section-card p-5 sm:p-6">
        <div className="flex flex-wrap gap-3">
          {menuData.map((section) => (
            <a
              key={section.category}
              className="rounded-full border border-brand-border bg-white px-4 py-2 text-sm font-semibold text-brand-green transition hover:border-brand-green/40"
              href={`#${slugify(section.category)}`}
            >
              {section.category}
            </a>
          ))}
        </div>
      </section>

      <section className="grid gap-6">
        {menuData.map((section) => (
          <article
            key={section.category}
            id={slugify(section.category)}
            className="section-card p-6 sm:p-8"
          >
            <div className="flex flex-col gap-4 border-b border-brand-border pb-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-maroon">
                  Menu Category
                </p>
                <h2 className="mt-3 font-display text-4xl font-semibold text-brand-deepGreen">
                  {section.category}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-brand-muted sm:text-base">
                  {section.description}
                </p>
              </div>
              <p className="text-sm font-semibold text-brand-green">
                {section.items.length} items
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="rounded-[24px] border border-brand-border bg-brand-cream/70 px-5 py-5 shadow-soft"
                >
                  <p className="text-base font-bold text-brand-deepGreen">{item.name}</p>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-maroon">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="section-card rounded-[30px] bg-brand-deepGreen p-6 text-brand-cream sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
          Availability Note
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-brand-cream/90 sm:text-base">
          Prices may change based on availability. Please contact Daawat for current
          availability.
        </p>
      </section>
    </div>
  )
}

export default Menu
