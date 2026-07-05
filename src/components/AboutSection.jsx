import { motion } from 'framer-motion'
import aboutImg from '/flags.jpg'

import AboutSectionContent from './AboutSectionContent'

const AboutSection = () => {
  const startYear = 2025
  const startNumber = 9

  const currentYear = new Date().getFullYear()
  const yearsofExp = startNumber + (currentYear - startYear)

  return (
    <motion.section
      id="about"
      className="p-0 sm:p-4 md:p-10 lg:p-14 bg-white"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center sm:m-4 md:m-6 lg:m-10">
        <div className="relative hidden md:block lg:block">
          <div className="absolute inset-0 bg-transparent bg-opacity-50 flex items-end rounded-lg">
            <div className="w-40 h-40 m-5 p-2 bg-gold text-navy font-poppins border-t-4 border-white rotate-45 rounded-full flex items-center text-center text-wrap font-semibold text-lg">
              <div className="-rotate-45">
                <span className="text-4xl font-bold">{yearsofExp}</span>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
          <img
            src={aboutImg}
            alt="Global Bridge Tours and Travel - connecting destinations worldwide"
            className="rounded-lg object-cover w-full md:h-[80svh] lg:h-[80svh]"
            loading="lazy"
          />
        </div>
        <AboutSectionContent />
      </div>
    </motion.section>
  )
}
export default AboutSection