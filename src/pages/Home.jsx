import "../styles/Home.css";
import strawberryCups from "../assets/strawberry-cups.jpg";
import lemonCupcakes from "../assets/lemon-cupcakes.jpg";
import coachCake from "../assets/coach-cake.jpg";
import cheesecakeShooters from "../assets/cheesecake-shooters.jpg";

const treats = [
  {
    id: 1,
    image: strawberryCups,
    title: "Custom Cake Shooters",
    description: "Cake Shooters with Cream Cheese Butter Cream",
  },
  {
    id: 2,
    image: cheesecakeShooters,
    title: "Custom Cheesecake Shooters",
    description: "Custom Cheesecake Shooters",
  },
  {
    id: 3,
    image: lemonCupcakes,
    title: "Custom Cupcakes",
    description: "1/2 Dozen lemon Cupcakes with Vanilla Butter Cream",
  },
  {
    id: 4,
    image: coachCake,
    title: "Custom Bento Box",
    description: "5 inch chocolate cake with 5 cupcakes",
  },
];

function Home() {
  return (
    <main>
      <section
        className="hero"
        style={{ backgroundImage: `url(src/assets/hero-bg.jpg` }}
      >
        <div className="hero-overlay">
          <h1 className="hero-title">Kingdom Sweetz & Treatz LLC</h1>
          <p className="hero-tagline">
            Where faith inspires every recipe and love is baked into every bite.
          </p>
          <a href="/order" className="hero-btn">
            Place an Order
          </a>
        </div>
      </section>

      <section className="about">
        <div className="about-container">
          <h2 className="about-title">Our Story</h2>
          <p className="about-text">
            My passion for cooking and baking cakes and desserts began at the
            age of 10. I was the child that was always in the kitchen trying to
            learn how to make my mom's favorite recipes. I would sit, watch and
            ask a million questions about what seasonings gave what flavor, why
            did you add this to that, and why did you add certain things in the
            ingredients to bake cakes and pies.
          </p>
          <p className="about-text">
            That love for the kitchen became my happy place when things got
            crazy in life. I learned at a very young age that people were their
            happiest when they were eating, enjoying good food, family, and
            friends.
          </p>
          <p className="about-text">
            As I got older and started my own family I quickly realized that
            food brought family and friends together and was a great
            conversation starter for everything from faith to sports — and
            quickly started incorporating my faith and the love of God's word
            with my food. Hence the name of my company.
          </p>
          <p className="about-text">
            I believe every good thing comes from God... even the skill to cook
            good food and baked goods. My heart's desire is to not only feed you
            with physical food but spiritually as well.
          </p>
          <p className="about-scripture">Matthew 4:4 — God Bless!</p>
        </div>
      </section>

      <section className="treats">
        <h2 className="treats-title">Featured Sweet Creations</h2>
        <div className="treats-grid">
          {treats.map((treat) => (
            <div className="treat-card" key={treat.id}>
              <img src={treat.image} alt={treat.title} className="treat-img" />
              <div className="treat-info">
                <h3>{treat.title}</h3>
                <p>{treat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="scripture-banner">
        <p className="scripture-verse">
          "Taste and see that the Lord is good."
        </p>
        <p className="scripture-ref">— Psalm 34:8</p>
      </section>

      <section className="cta">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Satisfy Your Sweet Tooth?</h2>
          <p className="cta-text">
            Whether you're celebrating a special occasion or simply craving
            something sweet, we're here to make it memorable.
          </p>
          <div className="cta-buttons">
            <a href="/order" className="cta-btn-primary">
              Place an Order
            </a>
            <a href="/contact" className="cta-btn-secondary">
              Get a Quote
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
