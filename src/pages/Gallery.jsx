import { useState } from "react";
import "../styles/Gallery.css";
import strawberryCups from "../assets/strawberry-cups.jpg";
import lemonCupcakes from "../assets/lemon-cupcakes.jpg";
import coachCake from "../assets/coach-cake.jpg";
import sonicCake from "../assets/sonic-cake.jpg";
import gabbyDollhouseCake from "../assets/gabby-dollhouse-cake.png";
import gradCupcakes from "../assets/grad-cupcakes.jpg";
import babySharkCake from "../assets/baby-shark-cake.jpg";
import doubleChocolateCake from "../assets/double-chocolate-cake.jpg";
import gingerbreadCupcakes from "../assets/gingerbread-cupcakes.jpg";
import fathersDayCupcakes from "../assets/fathers-day-cupcakes.jpg";
import fathersDayBox from "../assets/fathers-day-box.jpg";

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
    title: "Custom Lemon Cupcakes",
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
    image: sonicCake,
    title: "Custom Sonic the Hedgehog Cake",
    category: "Cakes",
  },
  {
    id: 5,
    image: gradCupcakes,
    title: "Custom Graduation Cupcakes",
    category: "Cupcakes",
  },
  {
    id: 6,
    image: gabbyDollhouseCake,
    title: "Custom Gabby Dollhouse Cake",
    category: "Cakes",
  },
  {
    id: 7,
    image: babySharkCake,
    title: "Custom Baby Shark Cake",
    category: "Cakes",
  },
  {
    id: 8,
    image: doubleChocolateCake,
    title: "Custom 5 inch Triple Layer Double Chocolate Cake",
    category: "Cakes",
  },
  {
    id: 9,
    image: gingerbreadCupcakes,
    title: "Custom Gingerbread Cupakes",
    category: "Cupcakes",
  },
  {
    id: 10,
    image: fathersDayCupcakes,
    title: "Custom Father's Cupcakes",
    category: "Cupcakes",
  },
  {
    id: 11,
    image: fathersDayBox,
    title: "Custom Father's Day Box",
    category: "Cupcakes",
  },
];

function Gallery() {
  const [reviewName, setReviewName] = useState("");
  const [reviewEmail, setReviewEmail] = useState("");
  const [reviewRating, setReviewRating] = useState("5");
  const [reviewText, setReviewText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ reviewName, reviewEmail, reviewRating, reviewText });
    setSubmitted(true);
  };

  return (
    <main>
      <section className="gallery-header">
        <h1 className="gallery-header-title">Featured Sweet Creations</h1>
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
      <section className="client-review-section">
        <h2 className="client-review-title">What Our Clients Say About Us</h2>
        <div className="client-review-container">
          <div className="client-review">
            <p>
              "Thank you so much! The cake and desserts were a hit!! They loved
              everything! It was perfect!"
            </p>
            <p className="client-review-name">— Regina C.</p>
          </div>
          <div className="client-review">
            <p></p>
          </div>
          <div className="client-review">
            <p></p>
          </div>
          <div className="client-review">
            <p></p>
          </div>
        </div>
      </section>

      <section className="review-form-section">
        <div className="review-form-container">
          <h2 className="review-form-title">Leave a Review</h2>
          <p className="review-form-subtitle">
            We'd love to hear about your experience with Kingdom Sweetz &
            Treatz!
          </p>

          {submitted ? (
            <div className="review-success">
              <p>
                Thank you for your review! We appreciate your kind words. 🎉
              </p>
            </div>
          ) : (
            <form className="review-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="reviewName">Your Name</label>
                <input
                  type="text"
                  id="reviewName"
                  placeholder="Enter your name"
                  value={reviewName}
                  onChange={(e) => setReviewName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="reviewEmail">Your Email</label>
                <input
                  type="email"
                  id="reviewEmail"
                  placeholder="Enter your email"
                  value={reviewEmail}
                  onChange={(e) => setReviewEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="reviewRating">Rating</label>
                <select
                  id="reviewRating"
                  value={reviewRating}
                  onChange={(e) => setReviewRating(e.target.value)}
                >
                  <option value="5">⭐⭐⭐⭐⭐ — Excellent</option>
                  <option value="4">⭐⭐⭐⭐ — Great</option>
                  <option value="3">⭐⭐⭐ — Good</option>
                  <option value="2">⭐⭐ — Fair</option>
                  <option value="1">⭐ — Poor</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="reviewText">Your Review</label>
                <textarea
                  id="reviewText"
                  placeholder="Tell us about your experience..."
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  rows="5"
                  required
                />
              </div>

              <button type="submit" className="review-submit-btn">
                Submit Review
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}

export default Gallery;
