import slide1 from '/air.jpg'
import slide2 from '/dubai-Blue.png'
import slide3 from '/image1.jpg'

import HeroOverlay from './HeroOverlay'
import Carousel from './Carousel'

import { motion } from 'framer-motion'

const slides = [
  { img: slide1, name: 'slide1' },
  { img: slide2, name: 'slide2' },
  { img: slide3, name: 'slide3' },
]

const Hero = () => {
  return (
    <section className="relative font-poppins mt-8 pt-10 min-h-[75vh] sm:min-h-[55vh] md:min-h-[75vh] lg:h-screen w-full flex">
      <HeroOverlay />

      <Carousel autoSlide={true} className="h-full w-full">
        {slides.map((s, index) => (
          <motion.img
            key={index}
            src={s.img}
            alt={`${s.name} - Hero slide`}
            className="w-full lg:w-svw min-h-[75vh] sm:min-h-[55vh] md:min-h-[75vh] lg:h-full object-cover"
            loading="lazy"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        ))}
      </Carousel>
    </section>
  )
}

export default Hero