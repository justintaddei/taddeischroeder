import { animate, useViewportScroll } from 'framer-motion'

const useScrollTo = () => {
  const { scrollY } = useViewportScroll()
  return (selector: string | Element) => {
    const target = selector instanceof Element ? selector : document.querySelector(selector)
    if (!target) throw new Error(`Cannot scroll to ${selector}. Target does not exist`)
    const { top } = target.getBoundingClientRect()
    const currentY = scrollY.get()

    animate(currentY, currentY + top, {
      stiffness: 95,
      damping: 13,
      mass: 1,
      onUpdate: (y) => {
        window.scrollTo(0, y)
      }
    })
  }
}

export default useScrollTo
