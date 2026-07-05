import customerImage from '/contact-us.jpg'
import ContactPageAddressSection from '../components/ContactPageAddressSection'
import ContactPageFooter from '../components/ContactPageFooter'
import ContactPageForm from '../components/ContactPageForm'
import MapComponent from '../components/MapComponent'

const Contact = () => {
  return (
    <div className="font-poppins mt-16">
      <div className="relative sm:h-[45svh] md:h-[55svh] lg:h-[70svh]">
        <div className="absolute inset-0 bg-navy bg-opacity-30 my-auto">
          <div className="grid place-items-center pt-28">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
              Contact Us
            </h1>
            <h2 className="font-semibold text-sm sm:text-base lg:text-base text-gold">
              GET IN TOUCH
            </h2>
          </div>
        </div>
        <img
          src={customerImage}
          alt="Global Bridge Tours & Travel customer care"
          className="w-full h-auto sm:w-screen sm:h-[45svh] md:h-[55svh] lg:h-[70svh] object-cover"
          loading="lazy"
        />
      </div>
      <div className="mt-12 flex lg:flex-row flex-col items-center px-8 sm:px-16 lg:px-16">
        <div className="px-10">
          <div className="grid place-items-center">
            <h2 className="font-bold text-3xl text-gold leading-relaxed mb-2">
              Connect With Us
            </h2>
            <p className="text-gray-700 leading-relaxed mx-10 text-center lg:max-w-lg">
              Reach out for support, feedback, or to schedule a meeting. Fill
              out the form, and we'll get back to you as soon as possible.
            </p>
          </div>

          <div>
            <ContactPageAddressSection />
          </div>
        </div>
        <ContactPageForm />
      </div>
      <MapComponent />
      <ContactPageFooter />
    </div>
  )
}
export default Contact