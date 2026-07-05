import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { scrollToSection } from '../utils/scrollToSection'

const HeroOverlay = () => {
  const scrollToAbout = (e) => {
    e.preventDefault()
    scrollToSection('about')
  }

  return (
    <motion.div
      className="absolute inset-0 bg-navy bg-opacity-40 flex items-center px-6 sm:px-8 md:px-16 lg:px-36 z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <motion.div
        className="text-white max-w-xl md:space-y-6 lg:space-y-9 mt-5"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="w-10 h-px bg-gold mb-3" />
        <h2 className="font-bigB text-3xl md:text-4xl lg:text-5xl">
          Every journey starts with a bridge
        </h2>
        <p className="mt-4 text-sm md:text-base lg:text-lg leading-relaxed">
          We're a Kenyan travel and employment consultancy built around one
          idea: getting people where they're going, without the hassle.{' '}
          <span className="hidden sm:inline lg:inline">
            From holidays and studies abroad to medical trips and job
            placements overseas, we handle the paperwork and logistics so you
            can focus on what's next.
          </span>
        </p>

        <div className="mt-6 flex flex-col sm:flex-row md:flex-row lg:flex-row gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              to="/contact"
              className="bg-gold border border-transparent text-navy font-semibold font-poppins px-4 py-1 rounded-full sm:py-1.5 md:py-2 lg:py-2 hover:bg-goldLight hover:shadow-lg transition-all duration-300"
              role="button"
            >
              Get in Touch
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
          >
            
             <a href="#about"
              onClick={scrollToAbout}
              className="border border-gold text-gold font-semibold font-poppins px-4 py-1 rounded-full sm:py-1.5 md:py-2 lg:py-2 hover:bg-gold hover:text-navy hover:shadow-lg transition-all duration-300"
              role="button"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default HeroOverlay