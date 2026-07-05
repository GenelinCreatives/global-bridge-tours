import AboutSection from '../components/AboutSection'
import Hero from '../components/Hero'
import OurServicesSection from '../components/OurServicesSection'
import WhyUsSection from '../components/WhyUsSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <main>
      <Hero />
      <OurServicesSection />
      <AboutSection />
      <WhyUsSection />
      <Footer />
    </main>
  )
}
export default Home