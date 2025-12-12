// Device detection utility for performance optimization

export const isMobile = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
}

export const isTablet = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth >= 768 && window.innerWidth < 1024
}

export const isDesktop = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth >= 1024
}

export const shouldLoadSpline = () => {
  // Only load Spline on desktop devices for better performance
  if (typeof window === 'undefined') return false
  return window.innerWidth >= 1024 && window.matchMedia('(prefers-reduced-motion: no-preference)').matches
}

export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

