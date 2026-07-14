import { Testimonials } from "../data/Testimonials";
import TestimonialCard from "./TestimonialCard";

function TestimonialsSection() {
  return (
    <div className="testimonials-section">
      {Testimonials.map((item) => {
        return (
          <TestimonialCard
            key={item.id}
            name={item.name}
            text={item.text}
            rating={item.rating}
          />
        );
      })}
    </div>
  );
}

export default TestimonialsSection;
