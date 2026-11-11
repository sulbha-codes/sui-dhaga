
import image1 from '../assets/gallery/1.webp'
import image2 from '../assets/gallery/2.webp'
import image3 from '../assets/gallery/3.webp'
import image4 from '../assets/gallery/4.webp'
import image5 from '../assets/gallery/5.webp'
import image6 from '../assets/gallery/6.webp'
import image7 from '../assets/gallery/7.webp'
import image8 from '../assets/gallery/8.webp'
import image9 from '../assets/gallery/9.webp'
import image10 from '../assets/gallery/10.webp'

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

function Gallery() {
  return (
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
  )
}

export default Gallery
