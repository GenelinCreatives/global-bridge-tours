import { useEffect, useState, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const SWEEP_DURATION = 1.3
const CONTENT_DELAY = 0.6
const CONTENT_DURATION = 0.75

const PageTransition = ({ children }) => {
  const location = useLocation()
  const prevPathRef = useRef(location.pathname)
  const [isNavigating, setIsNavigating] = useState(false)

  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      setIsNavigating(true)
      prevPathRef.current = location.pathname

      const scrollTimer = setTimeout(
        () => window.scrollTo(0, 0),
        CONTENT_DELAY * 1000
      )
      // Give the sweep time to fully finish before unmounting the overlay
      const endTimer = setTimeout(
        () => setIsNavigating(false),
        SWEEP_DURATION * 1000 + 150
      )

      return () => {
        clearTimeout(scrollTimer)
        clearTimeout(endTimer)
      }
    }
  }, [location.pathname])

  return (
    <>
      {createPortal(
        <AnimatePresence>
          {isNavigating && (
            <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
              {/* left/x use vw consistently: start fully off-screen left, end fully off-screen right */}
              <motion.div
                className="absolute top-0 h-full w-[60vw] bg-navy -skew-x-12"
                style={{ left: '-60vw' }}
                initial={{ x: '0vw' }}
                animate={{ x: '160vw' }}
                exit={{ x: '160vw' }}
                transition={{ duration: SWEEP_DURATION, ease: [0.65, 0, 0.35, 1] }}
              />
              <motion.div
                className="absolute top-0 h-full w-[60vw] bg-gold -skew-x-12"
                style={{ left: '-40vw' }}
                initial={{ x: '0vw' }}
                animate={{ x: '160vw' }}
                exit={{ x: '160vw' }}
                transition={{
                  duration: SWEEP_DURATION,
                  ease: [0.65, 0, 0.35, 1],
                  delay: 0.08,
                }}
              />
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}

      <motion.div
        key={location.pathname}
        initial={isNavigating ? { opacity: 0, scale: 0.96 } : false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: CONTENT_DURATION,
          delay: isNavigating ? CONTENT_DELAY : 0,
          ease: 'easeOut',
        }}
      >
        {children}
      </motion.div>
    </>
  )
}

export default PageTransition