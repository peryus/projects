const articles = [
  {
    id: 1,
    title: '7 ways to decor your home',
    image: '/assets/images/site/7ways.png',
  },
  {
    id: 2,
    title: 'Kitchen organization',
    image: '/assets/images/site/kitchenorg.png',
  },
  {
    id: 3,
    title: 'Decorating your bedroom',
    image: '/assets/images/site/decor.png',
  },
]

function Articles() {
  return (
      <section id="articles" className="pb-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between gap-6 pb-8">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Articles
            </h2>

            <a
                href="#articles"
                className="border-b border-neutral-900 pb-1 text-sm font-medium"
            >
              More Articles →
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {articles.map((article) => (
                <article key={article.id}>
                  <div className="h-[240px] overflow-hidden bg-neutral-100">
                    <img
                        src={article.image}
                        alt={article.title}
                        className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="pt-4">
                    <h3 className="text-lg font-semibold">
                      {article.title}
                    </h3>

                    <button
                        type="button"
                        className="mt-2 border-b border-neutral-900 pb-1 text-sm font-medium"
                    >
                      Read More →
                    </button>
                  </div>
                </article>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Articles