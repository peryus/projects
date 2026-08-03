const features = [
  {
    id: 1,
    title: 'Free Shipping',
    description: 'Order above $200',
    icon: '/assets/images/icons/delivery.svg',
  },
  {
    id: 2,
    title: 'Money-back',
    description: '30 days guarantee',
    icon: '/assets/images/icons/money.svg',
  },
  {
    id: 3,
    title: 'Secure Payments',
    description: 'Secured by Stripe',
    icon: '/assets/images/icons/lock.svg',
  },
  {
    id: 4,
    title: '24/7 Support',
    description: 'Phone and Email support',
    icon: '/assets/images/icons/call.svg',
  },
]

function Features() {
  return (
      <section className="py-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
              <article
                  key={feature.id}
                  className="min-h-[180px] bg-neutral-100 p-8"
              >
                <img
                    src={feature.icon}
                    alt=""
                    className="h-12 w-12"
                />

                <h3 className="mt-5 text-lg font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm text-neutral-500">
                  {feature.description}
                </p>
              </article>
          ))}
        </div>
      </section>
  )
}

export default Features