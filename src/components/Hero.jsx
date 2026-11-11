
import heroImage from '../assets/hero/blouse-hero.png'

function Hero() {
  const whatsappLink = 'https://wa.me/918208301830'

  return (
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
  )
}

export default Hero
