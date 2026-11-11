
function Visit() {
  const whatsappLink = 'https://wa.me/918208301830'

  return (
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
  )
}

export default Visit
