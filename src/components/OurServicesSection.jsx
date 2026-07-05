import ourServicesImage from '/image1.jpg'
import { Link } from 'react-router-dom'
import OurServicesSectionContent from './OurServicesSectionContent'

const OurServicesSection = () => {
  return (
    <section id="services" className="bg-offWhite font-poppins h-auto lg:h-[75svh] flex items-center">
      <div className="relative lg:w-[40svw]">
        <div className="absolute inset-0 bg-navy bg-opacity-50 flex flex-col items-start justify-center text-white font-poppins p-6 sm:p-16 md:p-10 lg:p-12 space-y-6 lg:space-y-8">
          <div className="w-10 h-px bg-gold" />
          <h1 className="font-bigB text-xl sm:text-2xl md:text-2xl lg:text-2xl">
            What we do
          </h1>
          <p className="text-sm sm:text-base md:text-base lg:text-base text-wrap lg:w-[30svw]">
            Visas, flights, hotels, career placements abroad, and travel for
            study or treatment — we take care of the moving parts so the
            actual trip, or the actual opportunity, is the easy part.
          </p>
          <Link
            to="/contact"
            className="bg-gold border border-transparent text-navy font-semibold font-poppins px-4 py-1 rounded-full shadow sm:py-1.5 md:py-2 lg:py-2 hover:bg-goldLight hover:shadow-lg transition-all duration-300"
            role="button"
          >
            Get a Quote
          </Link>
        </div>
        <img
          src={ourServicesImage}
          alt="services we provide"
          className="w-full h-auto sm:w-screen sm:h-[50svh] lg:h-[75svh] object-cover"
          loading="lazy"
        />
      </div>
      <div className="lg:w-[60svw] relative hidden lg:block">
        <OurServicesSectionContent />
      </div>
    </section>
  )
}
export default OurServicesSection