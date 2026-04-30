import { useState, useEffect } from "react";
import "../styles/Specials.css";

function Specials() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
          <p>No specials right now — check back soon or follow us on Instagram!</p>
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
