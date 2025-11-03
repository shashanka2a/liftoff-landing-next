import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useRef } from 'react';
import { ArrowRightIcon } from './CustomIcons';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { TiltCard } from './TiltCard';

interface ProjectProps {
  category: string;
  name: string;
  description: string;
  imageUrl: string;
  imagePosition: 'left' | 'right';
}

const Project = ({ category, name, description, imageUrl, imagePosition }: ProjectProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const textContent = (
    <motion.div
      className="flex flex-col justify-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-4">
        <p 
          className="text-yellow-400 tracking-[0.2em] text-xs sm:text-sm uppercase inline-block px-3 py-1.5 bg-yellow-400/10 rounded-full border border-yellow-400/30"
          style={{ 
            fontWeight: 600
          }}
        >
          {category}
        </p>
      </div>
      <h3 className="text-black mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl">
        {name}
      </h3>
      <p className="text-black/70 mb-6 sm:mb-8 leading-relaxed max-w-md text-sm sm:text-base">
        {description}
      </p>
      <motion.a
        href="#"
        className="flex items-center gap-2 group w-fit text-sm sm:text-base underline decoration-2 underline-offset-4 hover:text-yellow-400 transition-colors duration-300"
        whileHover={{ x: 5 }}
      >
        View Case Study
        <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
      </motion.a>
    </motion.div>
  );

  const imageContent = (
    <TiltCard className="relative h-[300px] sm:h-[400px] lg:h-[500px] perspective-1000">
      <motion.div
        className="relative h-full overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        style={{ y: imageY }}
      >
        <ImageWithFallback
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 via-transparent to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </motion.div>
    </TiltCard>
  );

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center py-12 sm:py-16 lg:py-24 cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {imagePosition === 'left' ? (
        <>
          {imageContent}
          {textContent}
        </>
      ) : (
        <>
          <div className="lg:order-2">{imageContent}</div>
          <div className="lg:order-1">{textContent}</div>
        </>
      )}
    </div>
  );
};

export function WorkSection() {
  const projects = [
    {
      category: 'BRAND IDENTITY · WEB DESIGN · UI/UX',
      name: 'Adverzeo',
      description:
        'A premium marketing platform and design suite that empowers brands to create compelling narratives and drive engagement through innovative visual storytelling.',
      imageUrl: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      imagePosition: 'right' as const,
    },
    {
      category: 'FINTECH · WEB APP · DESIGN SYSTEM',
      name: 'Payflow',
      description:
        'Seamless global finance with zero hidden fees and instant settlements. A modern payment platform that makes international transactions simple, transparent, and secure.',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      imagePosition: 'left' as const,
    },
    {
      category: 'WEB3 · PLATFORM DESIGN · BRAND IDENTITY',
      name: 'InOrbyt',
      description:
        'Reward your community. No crypto. No complexity. Just connection. A community engagement platform that simplifies rewards and builds authentic relationships.',
      imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      imagePosition: 'right' as const,
    },
  ];

  return (
    <section id="work" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header Row */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 sm:mb-16 lg:mb-24 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-black text-3xl sm:text-4xl lg:text-5xl">Our Work</h2>
          <motion.button
            className="px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-black bg-transparent text-black rounded-full hover:bg-black hover:text-white transition-all duration-300 text-sm sm:text-base touch-manipulation min-h-[44px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See All Projects
          </motion.button>
        </motion.div>

        {/* Project List */}
        <div className="divide-y divide-black/10">
          {projects.map((project, index) => (
            <Project
              key={index}
              category={project.category}
              name={project.name}
              description={project.description}
              imageUrl={project.imageUrl}
              imagePosition={project.imagePosition}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
