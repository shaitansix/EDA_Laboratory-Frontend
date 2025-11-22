import { useEffect, useRef, useState } from 'react'

export const useObserver = () => {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const handleObserver = ([entry]) => {
    setIsVisible(entry.isIntersecting)
  }
  
  useEffect(() => {
    const options = {
      root: null, 
      rootMargin: '0px',
      threshold: 0.5
    }

    const observer = new IntersectionObserver(handleObserver, options)
    const currentElement = elementRef.current

    if (currentElement) observer.observe(currentElement)

    return () => {
      if (currentElement) observer.unobserve(currentElement)
    }
  }, [])

  return { elementRef, isVisible }
}