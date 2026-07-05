import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Carousel = ({
  children: slides,
  autoSlide = false,
  autoslideInterval = 4000,
}) => {
  const [curr, setCurr] = useState(0)

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoslideInterval)
    return () => clearInterval(slideInterval)
  }, [autoSlide, autoslideInterval])

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{
          transform: `translateX(-${curr * 100}%)`,
        }}
      >
        {slides}
      </div>

      <motion.div
        className="absolute bottom-4 left-0 right-0 md:block z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="flex items-center justify-center gap-2 z-20">
          {slides.map((_, i) => (
            <motion.div
              key={i}
              className={`w-2.5 h-2.5 rounded-full ${
                curr === i ? 'bg-gold p-1' : 'bg-white opacity-40'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: curr === i ? 1.3 : 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
export default Carousel