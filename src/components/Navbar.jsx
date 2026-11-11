
import { useState } from 'react'

function Navbar() {
  const whatsappLink = 'https://wa.me/918208301830'

  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
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
  )
}

export default Navbar
