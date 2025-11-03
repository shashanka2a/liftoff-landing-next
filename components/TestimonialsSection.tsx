import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon, QuoteIcon } from './CustomIcons';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  logo: string;
}

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const testimonials: Testimonial[] = [
    {
      quote: "Liftoff transformed our brand identity and launched us into a new stratosphere. Their team's strategic thinking and bold design decisions helped us secure Series A funding within 6 months.",
      name: "Sarah Chen",
      title: "CEO & Founder",
      company: "Adverzeo",
      avatar: "https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwY2VvfGVufDF8fHx8MTc2MjE2MzczN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "ADVERZEO"
    },
    {
      quote: "Working with Liftoff was a game-changer. They didn't just design an app—they helped us reimagine our entire user experience. The results speak for themselves: 300% growth in user engagement.",
      name: "Marcus Rodriguez",
      title: "Chief Product Officer",
      company: "Payflow",
      avatar: "https://images.unsplash.com/photo-1758599543242-31567fb8766e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdCUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NjIxNjM3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "PAYFLOW"
    },
    {
      quote: "The Liftoff team brought our Web3 vision to life with a design that's both cutting-edge and accessible. They're not just designers—they're strategic partners who understand the future of digital experiences.",
      name: "Alex Thompson",
      title: "Co-Founder & CTO",
      company: "InOrbyt",
      avatar: "https://images.unsplash.com/photo-1687570461530-fd0051bb2aaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZm91bmRlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MjE2MzczOHww&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "INORBYT"
    }
  ];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      paginate(1);
    } else if (distance < -minSwipeDistance) {
      paginate(-1);
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section id="testimonials" className="bg-white py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-black mb-4 text-3xl sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 tracking-[0.2em] text-xs sm:text-sm uppercase">
            Powered by Liftoff
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Testimonial Card */}
          <div
            className="relative min-h-[450px] sm:min-h-[500px] flex items-center justify-center px-4 sm:px-0"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 }
                }}
                className="absolute w-full max-w-3xl"
              >
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 mx-auto border border-black/5">
                  {/* Quote Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-400/10 rounded-full flex items-center justify-center mb-6 sm:mb-8">
                    <QuoteIcon className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400" />
                  </div>

                  {/* Quote */}
                  <blockquote className="mb-8 sm:mb-10">
                    <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl">
                      "{testimonials[currentIndex].quote}"
                    </p>
                  </blockquote>

                  {/* Attribution */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-black/10">
                    {/* Profile & Name */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <ImageWithFallback
                          src={testimonials[currentIndex].avatar}
                          alt={testimonials[currentIndex].name}
                          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover ring-2 ring-yellow-400/20"
                        />
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full border-2 border-white" />
                      </div>
                      <div>
                        <p className="text-black text-base sm:text-lg">
                          {testimonials[currentIndex].name}
                        </p>
                        <p className="text-black/60 text-sm sm:text-base">
                          {testimonials[currentIndex].title}
                        </p>
                        <p className="text-yellow-400 text-xs sm:text-sm tracking-wider mt-1">
                          {testimonials[currentIndex].logo}
                        </p>
                      </div>
                    </div>

                    {/* Read More Link - Hidden on mobile */}
                    <motion.a
                      href="#"
                      className="hidden sm:flex items-center gap-2 text-black group"
                      whileHover={{ color: '#FACC15', x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      Read full story
                      <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black text-white flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300 z-10 shadow-lg touch-manipulation"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black text-white flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300 z-10 shadow-lg touch-manipulation"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 sm:h-3 rounded-full transition-all duration-300 touch-manipulation ${
                index === currentIndex
                  ? 'bg-yellow-400 w-8 sm:w-10'
                  : 'bg-gray-300 hover:bg-gray-400 w-2 sm:w-3'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
