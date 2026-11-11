
const services = [
  {
    title: 'Fabrics & Matching',
    description:
      'Explore fabrics and matching materials to help bring your outfit ideas together.',
    icon: '🧵',
  },
  {
    title: 'Custom Tailoring',
    description:
      'Discuss your stitching requirements and clothing preferences with us.',
    icon: '✂️',
  },
  {
    title: 'Alterations & Fitting',
    description:
      'Ask us about clothing alterations and fitting adjustments for your garments.',
    icon: '🪡',
  },
]

function Services() {
  return (
    <section
      id="services"
      className="services"
      aria-labelledby="services-heading"
    >
      <p className="eyebrow">
        WHAT YOU'RE LOOKING FOR
      </p>

      <h2 id="services-heading">
        Bring Your Outfit Ideas to Life
      </h2>

      <p className="services-intro">
        From finding suitable fabrics to discussing stitching
        and fitting, start your journey with Sui Dhaga.
      </p>

      <div className="services-list">
        {services.map((service) => (
          <article
            className="service-card"
            key={service.title}
          >
            <span
              className="service-icon"
              aria-hidden="true"
            >
              {service.icon}
            </span>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <a
              href="#contact"
              className="service-link"
            >
              Enquire with us →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
