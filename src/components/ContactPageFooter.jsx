import { Link } from 'react-router-dom'
import { scrollToSection } from '../utils/scrollToSection'

const ContactPageFooter = () => {
  const scrollToAbout = (e) => {
    e.preventDefault()
    scrollToSection('about')
  }

  const scrollToServices = (e) => {
    e.preventDefault()
    scrollToSection('services')
  }

  return (
    <footer className="bg-offWhite text-gray-600 body-poppins mt-14">
      <div className="container px-5 py-14 mx-auto flex gap-6 md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src="/logo-icon-1.png" className="h-32 w-auto" alt="Global Bridge Tours & Travel Logo" />
          </a>
          <p className="mt-2 text-sm text-gray-600">
            A steady hand for travel, visas, and career moves across borders
            — built around getting you where you're headed.
          </p>
        </div>

        <div className="grid lg:flex flex-auto justify-center text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              IMPORTANT LINKS
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-800 cursor-pointer hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <a href="#services" onClick={scrollToServices} className="text-gray-600 hover:text-gray-800 cursor-pointer hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" onClick={scrollToAbout} className="text-gray-600 hover:text-gray-800 cursor-pointer hover:underline">
                  About
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-gray-800 cursor-pointer hover:underline">
                  Contact
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              SERVICES
            </h2>
            <nav className="list-none mb-10">
              <li className="text-gray-600">Visa Processing</li>
              <li className="text-gray-600">Job Placement</li>
              <li className="text-gray-600">Travel Coordination</li>
              <li className="text-gray-600">Air Ticketing</li>
              <li className="text-gray-600">Hotel Booking</li>
            </nav>
          </div>
        </div>
      </div>

      <div className="bg-navy">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row gap-3">
          <p className="text-white text-sm text-center sm:text-left">
            Copyright © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
export default ContactPageFooter