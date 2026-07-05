function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

export function scrollToSection(id, duration = 900) {
  const target = document.getElementById(id)
  if (!target) return

  const start = window.pageYOffset
  const targetY = target.getBoundingClientRect().top + start - 80
  const distance = targetY - start
  let startTime = null

  function step(timestamp) {
    if (!startTime) startTime = timestamp
    const elapsed = timestamp - startTime
    const progress = Math.min(elapsed / duration, 1)
    window.scrollTo(0, start + distance * easeInOutCubic(progress))
    if (progress < 1) {
      requestAnimationFrame(step)
    } else {
      target.style.transition = 'background-color 0.5s ease'
      target.style.backgroundColor = 'rgba(212,160,23,0.12)'
      setTimeout(() => {
        target.style.backgroundColor = ''
        setTimeout(() => {
          target.style.transition = ''
        }, 500)
      }, 500)
    }
  }
  requestAnimationFrame(step)
}