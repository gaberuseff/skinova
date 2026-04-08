import {TestimonialsSplit} from "../split-testimonial";

function Testimonials({content}) {
  return (
    <section className="relative py-14" aria-labelledby="testimonials-heading">
      <h2 id="testimonials-heading" className="sr-only">
        Patient testimonials
      </h2>
      <TestimonialsSplit content={content} />
    </section>
  );
}

export default Testimonials;
