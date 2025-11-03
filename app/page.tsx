"use client";

import { Navigation } from "@/components/Navigation";
import { ServicesSection } from "@/components/ServicesSection";
import { WorkSection } from "@/components/WorkSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDownIcon } from "@/components/CustomIcons";
import { CustomCursor } from "@/components/CustomCursor";
import { ParticleField } from "@/components/ParticleField";
import { MorphingBlob } from "@/components/MorphingBlob";
import { ScrollProgress } from "@/components/ScrollProgress";
import { MagneticButton } from "@/components/MagneticButton";
import { TextReveal, CharReveal } from "@/components/TextReveal";
import { RocketIllustration } from "@/components/CustomIllustrations";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <CustomCursor />
      <ScrollProgress />
      <Navigation />

      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 bg-white relative overflow-hidden">
        <ParticleField />

        <MorphingBlob className="w-[600px] h-[600px] -top-32 -left-32" color="#FACC15" />
        <MorphingBlob className="w-[500px] h-[500px] -bottom-24 -right-24" color="#000000" />

        <motion.div
          className="absolute right-10 top-1/2 -translate-y-1/2 w-64 h-64 opacity-20 hidden lg:block"
          style={{ y: heroY }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <RocketIllustration />
        </motion.div>

        <motion.div
          className="text-center max-w-6xl relative z-10 pt-20 sm:pt-0"
          style={{ opacity: heroOpacity }}
        >
          <div className="mb-6 sm:mb-8 px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight">
              <TextReveal className="text-black" delay={0.2}>
                Launch your brand
              </TextReveal>
              <CharReveal className="text-yellow-400" delay={0.8}>
                to the moon
              </CharReveal>
            </h1>
          </div>

          <motion.p
            className="text-black/70 max-w-2xl mx-auto mb-10 sm:mb-12 text-base sm:text-lg lg:text-xl leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            We craft digital experiences that transcend the ordinary. From strategy to execution, we propel ambitious brands to new heights.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4 mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <MagneticButton className="w-full sm:w-auto px-8 py-4 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-yellow-400/50 text-sm sm:text-base touch-manipulation min-h-[44px]">
              Start Your Journey
            </MagneticButton>
            <MagneticButton className="w-full sm:w-auto px-8 py-4 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-all duration-300 text-sm sm:text-base touch-manipulation min-h-[44px]">
              View Our Work
            </MagneticButton>
          </motion.div>

          <motion.button
            onClick={scrollToServices}
            className="flex flex-col items-center gap-2 text-black/40 hover:text-yellow-400 transition-colors duration-300 cursor-pointer touch-manipulation mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            aria-label="Scroll to services"
          >
            <span className="text-xs sm:text-sm tracking-wider uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDownIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>
          </motion.button>
        </motion.div>
      </section>

      <ServicesSection />
      <WorkSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
