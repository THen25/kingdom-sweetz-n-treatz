import "../styles/Gallery.css";
import strawberryCups from "../assets/strawberry-cups.jpg";
import lemonCupcakes from "../assets/lemon-cupcakes.jpg";
import coachCake from "../assets/coach-cake.jpg";
import heroBg from "../assets/hero-bg.jpg";

// Each object in this array represents one photo in the gallery.
// title: the label shown on hover
// category: the small tag shown above the title
const galleryItems = [
  {
    id: 1,
    image: strawberryCups,
    title: "Custom Cake Shooters",
    category: "Sweet Treats",
  },
  {
    id: 2,
    image: lemonCupcakes,
    title: "Lemon Cupcakes",
    category: "Cupcakes",
  },
  {
    id: 3,
    image: coachCake,
    title: "Custom Bento Box",
    category: "Cakes",
  },
  {
    id: 4,
    image: heroBg,
    title: "Signature Creations",
    category: "Featured",
  },
];

function Gallery() {
  return (
    <main>
      <section className="gallery-header">
        <h1 className="gallery-header-title">Our Sweet Creations</h1>
        <p className="gallery-header-subtitle">
          A peek into the kingdom — handcrafted with love and faith.
        </p>
      </section>

      <section className="gallery-section">
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div className="gallery-card" key={item.id}>
              <img src={item.image} alt={item.title} className="gallery-img" />

              <div className="gallery-overlay">
                <span className="gallery-category">{item.category}</span>
                <h3 className="gallery-item-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="gallery-cta">
        <div className="gallery-cta-container">
          <h2 className="gallery-cta-title">Love What You See?</h2>
          <p className="gallery-cta-text">
            Every creation is made to order — just for you. Let's make something
            beautiful together.
          </p>
          <a href="/order" className="gallery-cta-btn">
            Place an Order
          </a>
        </div>
      </section>
    </main>
  );
}

export default Gallery;
