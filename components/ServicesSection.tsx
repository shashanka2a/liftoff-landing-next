import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useRef } from 'react';
import { Code } from 'lucide-react';
import { OrbitIcon, ConstellationIcon } from './CustomIcons';
import { OrbitIllustration, ConstellationIllustration, LaunchIllustration } from './CustomIllustrations';

interface ServiceItemProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceItem = ({ number, title, description, icon }: ServiceItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      className="relative py-8 sm:py-12 border-b border-black/10 last:border-b-0 cursor-default group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ opacity }}
      initial={{ y: 20 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
        {/* Number & Icon */}
        <div className="flex items-center gap-4 sm:gap-6">
          <motion.div
            className="text-yellow-400 text-3xl sm:text-4xl font-light"
            animate={{
              filter: isHovered ? 'brightness(1.2)' : 'brightness(1)',
            }}
            transition={{ duration: 0.3 }}
          >
            {number}
          </motion.div>
          
          <motion.div
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-yellow-400/10 flex items-center justify-center relative overflow-hidden"
            animate={{
              backgroundColor: isHovered ? 'rgba(250, 204, 21, 0.2)' : 'rgba(250, 204, 21, 0.1)',
              scale: isHovered ? 1.05 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-yellow-400"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: isHovered ? 1 : 0,
                opacity: isHovered ? 0.2 : 0
              }}
              transition={{ duration: 0.4 }}
            />
            <div className="text-yellow-400 relative z-10">
              {icon}
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-black mb-3 text-xl sm:text-2xl">
            {title}
          </h3>

          {/* Animated yellow bar */}
          <motion.div
            className="h-[2px] bg-yellow-400 mb-4"
            initial={{ width: 0 }}
            animate={{
              width: isHovered ? '80px' : '40px',
            }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          />

          <p className="text-black/70 max-w-2xl leading-relaxed text-sm sm:text-base">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export function ServicesSection() {
  const services = [
    {
      number: '01',
      title: 'Product Strategy & Design',
      description:
        'We help you define your vision, map user journeys, and create pixel-perfect interfaces that are ready for development. Our strategic approach ensures every design decision drives business value.',
      icon: <OrbitIcon className="w-6 h-6 sm:w-7 sm:h-7" />
    },
    {
      number: '02',
      title: 'Brand Identity & Visual Systems',
      description:
        'From logo design to comprehensive design systems, we build cohesive visual languages that make your brand instantly recognizable and memorable. Consistency meets creativity.',
      icon: <ConstellationIcon className="w-6 h-6 sm:w-7 sm:h-7" />
    },
    {
      number: '03',
      title: 'Development & Launch',
      description:
        'We bring designs to life with clean, production-ready code. Fast turnarounds, scalable architecture, and seamless deployment to get you to market quickly. From concept to launch.',
      icon: <Code className="w-6 h-6 sm:w-7 sm:h-7" />
    },
  ];

  return (
    <section id="services" className="relative bg-white py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Section Title - Left */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-black text-3xl sm:text-4xl lg:text-5xl sticky top-32">
              Our Services
            </h2>
          </motion.div>

          {/* Service List - Right */}
          <div className="lg:col-span-8 relative">
            {services.map((service) => (
              <ServiceItem
                key={service.number}
                number={service.number}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}

            {/* Vertical line on the far right - desktop only */}
            <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-black/20 to-transparent hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
