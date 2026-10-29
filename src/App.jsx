
import './App.css'
import heroImage from './assets/hero.png'

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

function App() {
  const whatsappLink = 'https://wa.me/91XXXXXXXXXX'

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Sui Dhaga home">
          Sui Dhaga
          <span className="brand-subtitle">
            Custom Tailoring & Matching Centre
          </span>
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#services">Our Services</a>
          <a href="#contact">Visit Us</a>
        </nav>
      </header>

      <main>
        <section id="home" aria-labelledby="hero-heading">
          <div className="hero-content">
            <p className="eyebrow">YOUR STYLE, YOUR WAY</p>

            <h1 id="hero-heading">
              Find Your Fabric.
              <br />
              Match Your Style.
              <br />
              Get It Tailored.
            </h1>

            <p>
              Looking for fabrics, matching materials, or tailoring
              services? Visit Sui Dhaga to discuss your requirements
              and explore possibilities for your next outfit.
            </p>

            <div className="hero-actions">
              <a
                className="contact-button"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Enquire on WhatsApp
              </a>

              <a className="secondary-link" href="#services">
                Explore our services →
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <img
              className="hero-image"
              src={heroImage}
              alt="Decorative embroidery, colourful threads, and fabrics"
              fetchPriority="high"
            />
          </div>
        </section>

        <section
          id="services"
          className="services"
          aria-labelledby="services-heading"
        >
          <p className="eyebrow">WHAT YOU'RE LOOKING FOR</p>

          <h2 id="services-heading">
            Bring Your Outfit Ideas to Life
          </h2>

          <p className="services-intro">
            From finding suitable fabrics to discussing stitching
            and fitting, start your journey with Sui Dhaga.
          </p>

          <div className="services-list">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <span className="service-icon" aria-hidden="true">
                  {service.icon}
                </span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a href="#contact" className="service-link">
                  Enquire with us →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="visit-section" aria-labelledby="visit-heading">
          <div>
            <p className="eyebrow">WE LOOK FORWARD TO MEETING YOU</p>

            <h2 id="visit-heading">Let's Talk About Your Next Outfit</h2>

            <p>
              Have a fabric in mind or need help with a tailoring
              requirement? Get in touch or visit our shop in Balewadi.
            </p>
          </div>

          <a
            className="contact-button"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Enquire on WhatsApp
          </a>
        </section>

        <section
          id="contact"
          className="contact-section"
          aria-labelledby="contact-heading"
        >
          <p className="eyebrow">FIND US IN BALEWADI</p>

          <h2 id="contact-heading">Visit Sui Dhaga</h2>

          <p>
            We welcome you to visit the shop and discuss your
            fabric, matching, and tailoring needs.
          </p>

          <div className="contact-details">
            <p>
              <strong>Address</strong>
              <br />
              Shop No. C-9, Motideep Co-op Hsg Society,
              Opp. Prathamesh Park, Balewadi Phata,
              Baner-Balewadi Road, Balewadi, Pune,
              Maharashtra 411069
            </p>

            <p>
              <strong>Opening hours</strong>
              <br />
              Tuesday–Sunday: 10:30 AM–9:30 PM
              <br />
              Monday: Closed
            </p>
          </div>

          <a
            className="contact-button"
            href="https://www.google.com/maps/search/?api=1&query=Sui+Dhaga+Custom+Tailoring+and+Matching+Centre+Balewadi+Pune"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Sui Dhaga</p>
        <p>Custom Tailoring and Matching Centre · Balewadi, Pune</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  )
}

export default App
