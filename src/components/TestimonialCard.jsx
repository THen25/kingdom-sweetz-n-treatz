function TestimonialCard({ name, text, rating, source }) {
  return (
    <div className="testimonial-card">
      <p className="testimonial-text">"{text}"</p>
      <div className="testimonial-meta">
        <span className="testimonial-name">{name}</span>
        <span className="testimonial-rating">{"★".repeat(rating)}</span>
        {source && <span className="testimonial-source">via {source}</span>}
      </div>
    </div>
  );
}

export default TestimonialCard;
