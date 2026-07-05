import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { scrollToSection } from '../utils/scrollToSection'

const AboutSectionContent = () => {
  const scrollToServices = (e) => {
    e.preventDefault()
    scrollToSection('services')
  }

  return (
    <div className="text-gray-800 font-poppins p-6 sm:p-8 md:p-10 lg:p-12 space-y-4 lg:space-y-6">
      <div className="flex items-center gap-2">
        <div className="w-8 h-px bg-gold" />
        <h1 className="text-gold text-sm md:text-base font-semibold tracking-wide uppercase">
          Who we are
        </h1>
      </div>
      <h3 className="font-bigB text-xl md:text-2xl lg:text-3xl text-pretty text-navy">
        A trusted hand for the road ahead
      </h3>
      <p className="text-gray-600 text-sm md:text-base lg:text-base text-justify">
        Global Bridge Tours &amp; Travel started with a simple goal: make the
        path abroad less confusing. Today we support travelers and jobseekers
        alike, guiding them through the details that usually get in the way.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 my-2">
        
         <a href="#services"
          onClick={scrollToServices}
          className="flex items-center gap-3 p-3 text-base border-l-2 border-gold rounded-md bg-offWhite hover:scale-95 cursor-pointer transition-transform duration-300"
          role="button"
        >
          <div className="text-gold">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plane-icon lucide-plane">
              <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
            </svg>
          </div>
          <p className="text-navy font-semibold">Travel, sorted</p>
        </a>
        
         <a href="#services"
          onClick={scrollToServices}
          className="flex items-center gap-3 p-3 text-base border-l-2 border-gold rounded-md bg-offWhite hover:scale-95 cursor-pointer transition-transform duration-300"
          role="button"
        >
          <div className="text-gold">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase-business-icon lucide-briefcase-business">
              <path d="M12 12h.01" />
              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
              <path d="M22 13a18.15 18.15 0 0 1-20 0" />
              <rect width="20" height="14" x="2" y="6" rx="2" />
            </svg>
          </div>
          <p className="text-navy font-semibold">Careers abroad</p>
        </a>
      </div>
      <p className="text-gray-600 text-sm md:text-base lg:text-base text-justify">
        Visas, bookings, or a new job in another country — whatever the goal,
        we bring the know-how and the contacts to make it happen faster and
        with fewer surprises.
      </p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Link
          to="/contact"
          className="bg-gold border border-transparent text-navy font-semibold font-poppins px-4 py-1 rounded-full sm:py-1.5 md:py-2 lg:py-2 hover:bg-goldLight hover:shadow-lg transition-all duration-300"
          role="button"
        >
          Discover More
        </Link>
      </motion.div>
    </div>
  )
}
export default AboutSectionContent