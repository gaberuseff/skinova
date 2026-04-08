"use client";

import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {ArrowUpRight} from "lucide-react";
import Image from "next/image";

export function TestimonialsSplit({content}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const testimonials = content.items.map((item, index) => ({
    ...item,
    id: index + 1,
  }));

  const active = testimonials[activeIndex];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const onKeyAdvance = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      nextTestimonial();
    }
  };

  return (
    <section
      className="w-full max-w-5xl mx-auto px-4 sm:px-6"
      aria-label="Patient testimonials">
      <article
        role="button"
        tabIndex={0}
        aria-label="Show next testimonial"
        className="relative grid grid-cols-1 gap-8 items-start cursor-pointer group md:grid-cols-[1fr_auto] md:gap-12 md:items-center"
        onClick={nextTestimonial}
        onKeyDown={onKeyAdvance}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}>
        {/* Left: Quote Content */}
        <div className="space-y-8">
          {/* Company Tag */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.company}
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -10}}
              transition={{duration: 0.3}}
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground">
              <span className="w-8 h-px bg-muted-foreground/50" />
              {active.company}
            </motion.div>
          </AnimatePresence>

          {/* Quote */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active.id}
                initial={{opacity: 0, y: 40}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -40}}
                transition={{duration: 0.5, ease: [0.22, 1, 0.36, 1]}}
                className="text-3xl sm:text-4xl font-light leading-[1.3] tracking-tight text-foreground">
                {active.quote}
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Author Info */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 0.3, delay: 0.2}}
              className="flex items-center gap-4">
              <div className="w-10 h-px bg-foreground/20" />
              <div>
                <p className="text-sm font-medium text-foreground">
                  {active.name}
                </p>
                <p className="text-xs text-muted-foreground">{active.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: Visual Element */}
        <div className="relative h-64 w-full max-w-55 justify-self-center md:w-48 md:justify-self-end">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{opacity: 0, filter: "blur(20px)", scale: 1.05}}
              animate={{opacity: 1, filter: "blur(0px)", scale: 1}}
              exit={{opacity: 0, filter: "blur(20px)", scale: 0.95}}
              transition={{duration: 0.6, ease: [0.22, 1, 0.36, 1]}}
              className="absolute inset-0">
              <div className="w-full h-full overflow-hidden border border-border/50">
                <Image
                  fill
                  src={active.image || "/placeholder.svg"}
                  alt={active.name}
                  quality={70}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Click indicator */}
          <motion.div
            animate={{
              opacity: isHovering ? 1 : 0,
              scale: isHovering ? 1 : 0.8,
            }}
            transition={{duration: 0.2}}
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 hidden items-center gap-2 text-xs text-muted-foreground md:flex">
            <span>{content.next}</span>
            <ArrowUpRight className="w-3 h-3" />
          </motion.div>
        </div>

        {/* Progress Dots */}
        <div className="mt-2 flex items-center gap-3 md:absolute md:-bottom-16 md:left-0 md:mt-0">
          {testimonials.map((_, index) => (
            <button
              type="button"
              key={index}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex(index);
              }}
              className="relative p-1 group/dot">
              <span
                className={`
                  block w-2 h-2 rounded-full transition-all duration-300
                  ${
                    index === activeIndex
                      ? "bg-foreground scale-100"
                      : "bg-muted-foreground/30 scale-75 hover:bg-muted-foreground/50 hover:scale-100"
                  }
                `}
              />
              {index === activeIndex && (
                <motion.span
                  layoutId="activeDot"
                  className="absolute inset-0 border border-foreground/30 rounded-full"
                  transition={{duration: 0.3}}
                />
              )}
            </button>
          ))}
        </div>
      </article>
    </section>
  );
}
