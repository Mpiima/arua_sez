/**
 * useCountUp — Animates a number from 0 to a target when element scrolls into view.
 */
import { ref, onMounted, onUnmounted } from 'vue'

export function useCountUp({
  target = 100,
  suffix = '',
  prefix = '',
  decimals = 0,
  duration = 1600,
  threshold = 0.3,
} = {}) {
  const el = ref(null)
  const display = ref(`${prefix}0${suffix}`)
  const isPopping = ref(false)
  let observer = null
  let rafId = null

  const countRef = (element) => {
    el.value = element
  }

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3)
  }

  function animateCount() {
    const startTime = performance.now()
    function step(now) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutCubic(progress)
      const current = eased * target
      display.value = `${prefix}${current.toFixed(decimals)}${suffix}`
      if (progress < 1) {
        rafId = requestAnimationFrame(step)
      } else {
        display.value = `${prefix}${target.toFixed(decimals)}${suffix}`
        isPopping.value = true
        setTimeout(() => { isPopping.value = false }, 350)
      }
    }
    rafId = requestAnimationFrame(step)
  }

  onMounted(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCount()
          observer.disconnect()
        }
      },
      { threshold }
    )
    if (el.value) observer.observe(el.value)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
    if (rafId) cancelAnimationFrame(rafId)
  })

  return { countRef, display, isPopping }
}
