import { useEffect, useRef, useState } from 'react'

function useInView({
  root = null,
  rootMargin = '0px 0px -10% 0px',
  threshold = 0.2,
} = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current

    if (!node || inView) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(entry.target)
        }
      },
      { root, rootMargin, threshold },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [inView, root, rootMargin, threshold])

  return [ref, inView]
}

export default useInView
