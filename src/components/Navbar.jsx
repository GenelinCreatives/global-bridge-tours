import { useState } from 'react'
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { scrollToSection } from '../utils/scrollToSection'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const isAboutActive = location.pathname === '/' && location.hash === '#about'
  const isServicesActive = location.pathname === '/' && location.hash === '#services'

  const handleAboutClick = (e) => {
    e.preventDefault()
    setIsOpen(false)
    if (location.pathname === '/') {
      scrollToSection('about')
    } else {
      navigate('/')
      setTimeout(() => scrollToSection('about'), 150)
    }
  }

  const handleServicesClick = (e) => {
    e.preventDefault()
    setIsOpen(false)
    if (location.pathname === '/') {
      scrollToSection('services')
    } else {
      navigate('/')
      setTimeout(() => scrollToSection('services'), 150)
    }
  }

  return (
    <nav className="bg-offWhite font-poppins p-4 fixed top-0 w-screen shadow-sm z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src="/logo-icon-2.png"
              className="w-24 h-11"
              alt="Global Bridge Tours and Travel logo"
            />
            <span className="hidden sm:inline-block font-bigB text-navy text-lg">
              Global Bridge Tours &amp; Travel
            </span>
          </div>
        </Link>

        <div className="flex flex-grow justify-center items-center gap-16">
          <div className="hidden md:flex space-x-14 text-navy font-medium relative">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `relative pb-1 ${
                  isActive ? 'text-gold border-b border-gold' : 'text-navy'
                } hover:text-gold hover:border-b hover:border-gold transition-all duration-300`
              }
            >
              Home
            </NavLink>

            
             <a href="/#services"
              onClick={handleServicesClick}
              className={`relative pb-1 cursor-pointer ${
                isServicesActive ? 'text-gold border-b border-gold' : 'text-navy'
              } hover:text-gold hover:border-b hover:border-gold transition-all duration-300`}
            >
              Services
            </a>

            
             <a href="/#about"
              onClick={handleAboutClick}
              className={`relative pb-1 cursor-pointer ${
                isAboutActive ? 'text-gold border-b border-gold' : 'text-navy'
              } hover:text-gold hover:border-b hover:border-gold transition-all duration-300`}
            >
              About
            </a>
          </div>
        </div>

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
            Contact Us
          </Link>
        </motion.div>

        <button
          className="md:hidden text-navy ml-4"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="size-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="md:hidden fixed inset-0 bg-navy bg-opacity-40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="md:hidden fixed top-0 right-0 h-screen w-3/4 max-w-xs bg-offWhite z-50 shadow-lg flex flex-col p-6"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <button
                className="self-end text-navy mb-8"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="size-7"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex flex-col gap-6 font-medium text-lg">
                <NavLink
                  to="/"
                  end
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `${isActive ? 'text-gold border-b border-gold' : 'text-navy'} pb-1 w-fit transition-all duration-300`
                  }
                >
                  Home
                </NavLink>

                
                 <a href="/#services"
                  onClick={handleServicesClick}
                  className={`${isServicesActive ? 'text-gold border-b border-gold' : 'text-navy'} pb-1 w-fit cursor-pointer transition-all duration-300`}
                >
                  Services
                </a>

                
                 <a href="/#about"
                  onClick={handleAboutClick}
                  className={`${isAboutActive ? 'text-gold border-b border-gold' : 'text-navy'} pb-1 w-fit cursor-pointer transition-all duration-300`}
                >
                  About
                </a>

                <NavLink
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `${isActive ? 'text-gold border-b border-gold' : 'text-navy'} pb-1 w-fit transition-all duration-300`
                  }
                >
                  Contact
                </NavLink>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar