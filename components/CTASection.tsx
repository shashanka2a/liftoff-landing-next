import { motion } from 'motion/react';
import { ScheduleIcon, ArrowRightIcon, StarIcon } from './CustomIcons';
import { MagneticButton } from './MagneticButton';
import { MorphingBlob } from './MorphingBlob';

export function CTASection() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Morphing Blobs */}
      <MorphingBlob className="w-[500px] h-[500px] top-0 left-1/4 opacity-30" color="#FACC15" />
      <MorphingBlob className="w-[400px] h-[400px] bottom-0 right-1/4 opacity-20" color="#000000" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative Element */}
          <motion.div
            className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8 bg-yellow-400/10 rounded-full flex items-center justify-center relative"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ 
              type: 'spring',
              stiffness: 200,
              damping: 15,
              delay: 0.2 
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-yellow-400"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <StarIcon className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400 relative z-10" />
            </motion.div>
          </motion.div>

          {/* Main Headline */}
          <h2 className="text-black mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl px-4">
            Ready to Launch Your Vision?
          </h2>

          {/* Supporting Text */}
          <p className="text-black/70 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed text-base sm:text-lg px-4">
            Let's connect and discuss how Liftoff can transform your ideas into market-leading products. Book a free consultation today.
          </p>

          {/* CTA Button */}
          <MagneticButton className="group relative px-6 sm:px-8 py-3.5 sm:py-4 bg-yellow-400 text-black rounded-full inline-flex items-center gap-3 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-yellow-400/30 transition-all duration-300 touch-manipulation min-h-[44px]">
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 bg-[length:200%_100%]"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 1,
              }}
            />
            
            <span className="relative z-10 flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
              <ScheduleIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Schedule a Free Consultation</span>
              <span className="sm:hidden">Book Consultation</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
            </span>
          </MagneticButton>

          {/* Trust Indicators */}
          <motion.div
            className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-black/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full" />
              <span>Free 30-min consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full" />
              <span>No commitment required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full" />
              <span>Same-day response</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
