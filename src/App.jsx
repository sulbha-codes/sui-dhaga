import './App.css'
import { useState } from 'react'

import heroImage from './assets/blouse-hero.png'
import image1 from './assets/1.webp'
import image2 from './assets/2.webp'
import image3 from './assets/3.webp'
import image4 from './assets/4.webp'
import image5 from './assets/5.webp'
import image6 from './assets/6.webp'
import image7 from './assets/7.webp'
import image8 from './assets/8.webp'
import image9 from './assets/9.webp'
import image10 from './assets/10.webp'

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

const galleryImages = [
  {
    src: image1,
    title: 'Shop Interior',
    alt: 'View of the fabric collection inside Sui Dhaga',
  },
  {
    src: image2,
    title: 'Our Fabric Collection',
    alt: 'Colourful fabrics arranged on shelves',
  },
  {
    src: image3,
    title: 'Discover Sui Dhaga',
    alt: 'Colourful fabrics and custom tailoring services at Sui Dhaga',
  },
  {
    src: image4,
    title: 'Fabrics and Materials',
    alt: 'Fabric and matching materials displayed in the shop',
  },
  {
    src: image5,
    title: 'Shop Exterior',
    alt: 'Exterior view of Sui Dhaga tailoring shop',
  },
  {
    src: image6,
    title: 'Matching Materials',
    alt: 'Colourful matching fabrics and materials',
  },
  {
    src: image7,
    title: 'Custom Stitching',
    alt: 'Tailoring workspace inside Sui Dhaga',
  },
  {
    src: image8,
    title: 'Fabric Details',
    alt: 'Close-up view of colourful fabric designs',
  },
  {
    src: image9,
    title: 'More Shop Views',
    alt: 'Additional view of the tailoring shop',
  },
  {
    src: image10,
    title: 'Inside Sui Dhaga',
    alt: 'Another view of the shop interior',
  },
]

function App() {
  const whatsappLink = 'https://wa.me/918208301830'

  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      {/* Navigation Header */}

      <header className="site-header">
        <a
          className="brand"
          href="#home"
          aria-label="Sui Dhaga home"
          onClick={closeMenu}
        >
          <span className="brand-mark" aria-hidden="true">
            🪡
          </span>

          <span className="brand-text">
            <strong>Sui Dhaga</strong>
            <small>Custom Tailoring & Matching Centre</small>
          </span>
        </a>

        {/* WhatsApp button in header */}

        <a
          className="header-whatsapp"
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Sui Dhaga on WhatsApp"
        >
          <svg
            viewBox="0 0 32 32"
            width="30"
            height="30"
            aria-hidden="true"
          >
            <circle cx="16" cy="16" r="16" fill="#f5f1e8" />

            <path
              fill="#217b52"
              d="M16 4.5A11.4 11.4 0 0 0 6.2 21.8L4.7 27l5.4-1.4A11.5 11.5 0 1 0 16 4.5Zm0 20.7a9.2 9.2 0 0 1-4.7-1.3l-.3-.2-3.2.8.9-3.1-.2-.3a9.2 9.2 0 1 1 7.5 4.1Zm5.1-6.9c-.3-.2-1.7-.9-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-.9-2.1-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4Z"
            />
          </svg>

          <span>WhatsApp</span>
        </a>

        {/* Mobile hamburger menu */}

        <button
          className="menu-toggle"
          type="button"
          aria-label={
            menuOpen
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation links */}

        <nav
          id="main-navigation"
          className={`site-nav ${menuOpen ? 'is-open' : ''}`}
          aria-label="Main navigation"
        >
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#services" onClick={closeMenu}>
            Services
          </a>

          <a href="#gallery" onClick={closeMenu}>
            Gallery
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </header>

      <main>
        {/* Hero Section */}

        <section id="home" className="hero">
          <img
            className="hero-background"
            src={heroImage}
            alt="Embroidered purple blouse displayed on a tailoring mannequin"
            fetchPriority="high"
          />

          <div className="hero-overlay" />

          <div className="hero-content">
            <h1>
              Custom Tailoring
              <br />
              For Every Occasion
            </h1>

            <p className="hero-description">
              Fabrics <span>•</span> Matching Materials <span>•</span>
              Tailoring <span>•</span> Alterations
            </p>

            <div className="hero-actions">
              <a
                className="contact-button whatsapp-button"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span aria-hidden="true">◉</span>
                Chat with Us
              </a>

              <a
                className="hero-services-button"
                href="#services"
              >
                Our Services
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}

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

        {/* Gallery Section — natural vertical scrolling */}

        <section
          id="gallery"
          className="gallery-section"
          aria-labelledby="gallery-heading"
        >
          <p className="eyebrow">
            A GLIMPSE OF OUR WORLD
          </p>

          <h2 id="gallery-heading">
            Our Gallery
          </h2>

          <p className="gallery-intro">
            Explore fabric inspiration, tailoring, and details
            that bring outfit ideas to life.
          </p>

          <div className="gallery-scroll">
            {galleryImages.map((image, index) => (
              <article
                className="gallery-card"
                key={image.title}
              >
                <img
                  src={image.src}
                  alt={image.alt || image.title}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />

                <div className="gallery-card-caption">
                  <h3>{image.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Visit Section */}

        <section
          className="visit-section"
          aria-labelledby="visit-heading"
        >
          <div>
            <p className="eyebrow">
              WE LOOK FORWARD TO MEETING YOU
            </p>

            <h2 id="visit-heading">
              Let's Talk About Your Next Outfit
            </h2>

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

        {/* Contact Section */}

        <section
          id="contact"
          className="contact-section"
          aria-labelledby="contact-heading"
        >
          <p className="eyebrow">
            FIND US IN BALEWADI
          </p>

          <h2 id="contact-heading">
            Visit Sui Dhaga
          </h2>

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

      {/* Footer */}

      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} Sui Dhaga
        </p>

        <p>
          Custom Tailoring and Matching Centre · Balewadi, Pune
        </p>

        <a href="#home">
          Back to top ↑
        </a>
      </footer>
    </>
  )
}

export default App                                                                                                                                                                                     