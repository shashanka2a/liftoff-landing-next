import { Rocket } from 'lucide-react';
import { LinkedInIcon, TwitterIcon, DribbbleIcon, InstagramIcon } from './CustomIcons';
import { motion } from 'motion/react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Product Strategy', href: '#services' },
    { name: 'UI/UX Design', href: '#services' },
    { name: 'Development', href: '#services' },
    { name: 'Brand Identity', href: '#services' },
  ];

  const company = [
    { name: 'About Us', href: '#' },
    { name: 'Our Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
    { name: 'Careers', href: '#' },
  ];

  const resources = [
    { name: 'Blog', href: '#' },
    { name: 'Case Studies', href: '#work' },
    { name: 'Resources', href: '#' },
  ];

  const socialLinks = [
    { icon: LinkedInIcon, href: '#', label: 'LinkedIn' },
    { icon: TwitterIcon, href: '#', label: 'Twitter' },
    { icon: DribbbleIcon, href: '#', label: 'Dribbble' },
    { icon: InstagramIcon, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-black py-12 sm:py-16 lg:py-20 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 mb-10 sm:mb-12">
          {/* Left Section - Logo & Copyright */}
          <div className="sm:col-span-2 lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                </div>
                <span className="text-white tracking-tight text-lg sm:text-xl">Liftoff</span>
              </div>
              <p className="text-gray-500 text-xs sm:text-sm mb-4">
                Launching brands to new heights through strategic design and development.
              </p>
              <p className="text-gray-600 text-xs sm:text-sm">
                © {currentYear} Liftoff. All rights reserved.
              </p>
            </motion.div>
          </div>

          {/* Middle Section - Navigation Links */}
          <div className="sm:col-span-2 lg:col-span-6 grid grid-cols-3 gap-6 sm:gap-8">
            {/* Services Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-white mb-3 sm:mb-4 text-sm sm:text-base">Services</h4>
              <ul className="space-y-2 sm:space-y-3">
                {services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-xs sm:text-sm hover:text-yellow-400 transition-colors duration-300 inline-block touch-manipulation"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-white mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
              <ul className="space-y-2 sm:space-y-3">
                {company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-xs sm:text-sm hover:text-yellow-400 transition-colors duration-300 inline-block touch-manipulation"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-white mb-3 sm:mb-4 text-sm sm:text-base">Resources</h4>
              <ul className="space-y-2 sm:space-y-3">
                {resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-xs sm:text-sm hover:text-yellow-400 transition-colors duration-300 inline-block touch-manipulation"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Section - Social & Legal */}
          <div className="sm:col-span-2 lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* Social Icons */}
              <div className="mb-6 sm:mb-8">
                <h4 className="text-white mb-3 sm:mb-4 text-sm sm:text-base">Follow Us</h4>
                <div className="flex gap-3 sm:gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:text-yellow-400 hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] transition-all duration-300 touch-manipulation"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm">
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 touch-manipulation"
                >
                  Privacy Policy
                </a>
                <span className="text-gray-600">·</span>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 touch-manipulation"
                >
                  Terms of Service
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar - Optional Newsletter or Additional Info */}
        <motion.div
          className="pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-gray-500">
            <p>Crafted with precision and passion in San Francisco</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              <span>Available for new projects</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
