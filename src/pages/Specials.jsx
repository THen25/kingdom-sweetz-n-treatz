import { useState, useEffect } from "react";
import "../styles/Specials.css";
import bananaPuddingCups from "../assets/Banana-Pudding-Cups-Pic.png";
import kingdomCravingsBox from "../assets/kingdom-cravings-box.png";
import happyFathersDayFlyer from "../assets/happy-fathers-day-flyer.jpg";

function Specials() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [flyerOpen, setFlyerOpen] = useState(false);

  useEffect(() => {
    if (!flyerOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") setFlyerOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [flyerOpen]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://feeds.behold.so/V6q1sTKtMP2VkbInb02Q");
        const data = await res.json();
        setPosts(data.posts);
        setLoading(false);
      } catch {
        setError("Unable to load posts. Please try again later.");
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <main>
      <section className="specials-header">
        <h1 className="specials-title">Specials & Promotions</h1>
        <p className="specials-subtitle">
          Follow us on Instagram for the latest updates and promotions!
        </p>
      </section>

      <section className="monthly-specials">
        <h2 className="monthly-specials-title">Father's Day Special</h2>
        <div className="specials-container">
          <img
            src={happyFathersDayFlyer}
            alt="Father's Day Flyer"
            className="flyer-trigger"
            onClick={() => setFlyerOpen(true)}
          />
          <img src={bananaPuddingCups} alt="Banana Pudding Cups" />
          <img src={kingdomCravingsBox} alt="Kingdom Cravings Box" />
        </div>
      </section>

      {flyerOpen && (
        <div className="flyer-modal-overlay" onClick={() => setFlyerOpen(false)}>
          <button
            className="flyer-modal-close"
            onClick={() => setFlyerOpen(false)}
            aria-label="Close"
          >
            ✕
          </button>
          <img
            src={happyFathersDayFlyer}
            alt="Father's Day Flyer"
            className="flyer-modal-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {loading && (
        <div className="specials-loading">
          <p>Loading latest specials...</p>
        </div>
      )}

      {error && (
        <div className="specials-error">
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && posts.length === 0 && (
        <div className="specials-empty">
          <p>
            No specials right now — check back soon or follow us on Instagram!
          </p>
        </div>
      )}

      {!loading && !error && posts.length > 0 && (
        <section className="specials-grid">
          {posts.map((post) => (
            <div className="specials-card" key={post.id}>
              <a href={post.permalink} target="_blank" rel="noreferrer">
                <img
                  src={post.sizes.medium.mediaUrl}
                  alt={post.prunedCaption || "Kingdom Sweetz Special"}
                  className="specials-img"
                />
                <div className="specials-caption">
                  <p>{post.prunedCaption}</p>
                </div>
              </a>
            </div>
          ))}
        </section>
      )}

      <section className="specials-cta">
        <p>Want to stay up to date?</p>
        <a
          href="https://www.instagram.com/kingdom_sweetz_n_treatz"
          target="_blank"
          rel="noreferrer"
          className="specials-instagram-btn"
        >
          Follow us on Instagram
        </a>
      </section>
    </main>
  );
}

export default Specials;
