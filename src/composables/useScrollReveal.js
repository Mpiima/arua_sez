/**
 * useScrollReveal — Composable for IntersectionObserver-based scroll animations.
 *
 * Usage:
 *   const { revealRef, revealed } = useScrollReveal({ threshold: 0.15, delay: 100 })
 *
 *   In template:
 *     <div :ref="revealRef" :class="revealed ? 'animate-in' : 'animate-out'">...</div>
 *
 * Alternatively, use useScrollRevealList for arrays of elements.
 */
import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Reveal a single element when it enters the viewport.
 */
export function useScrollReveal({ threshold = 0.12, rootMargin = '0px 0px -60px 0px', once = true } = {}) {
  const el = ref(null)
  const revealed = ref(false)
  let observer = null

  const revealRef = (element) => {
    el.value = element
  }

  onMounted(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          revealed.value = true
          if (once && observer) {
            observer.disconnect()
          }
        } else if (!once) {
          revealed.value = false
        }
      },
      { threshold, rootMargin }
    )
    if (el.value) observer.observe(el.value)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return { revealRef, revealed }
}

/**
 * Reveal a list of elements with staggered delay.
 * Returns an array of { revealRef, revealed } pairs.
 */
export function useScrollRevealList(count, { threshold = 0.1, rootMargin = '0px 0px -40px 0px', staggerMs = 80 } = {}) {
  const items = Array.from({ length: count }, (_, i) => {
    const el = ref(null)
    const revealed = ref(false)
    const delay = i * staggerMs

    const revealRef = (element) => {
      el.value = element
    }

    let observer = null

    onMounted(() => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              revealed.value = true
            }, delay)
            observer.disconnect()
          }
        },
        { threshold, rootMargin }
      )
      if (el.value) observer.observe(el.value)
    })

    onUnmounted(() => {
      if (observer) observer.disconnect()
    })

    return { revealRef, revealed }
  })

  return items
}

/**
 * Helper: bind multiple reveal refs to an array of elements.
 * Use with v-for by passing the index.
 */
export function useScrollRevealGroup({ threshold = 0.08, rootMargin = '0px 0px -50px 0px', staggerMs = 100 } = {}) {
  const els = ref([])
  const revealed = ref([])
  let observer = null

  const setRef = (el, index) => {
    if (el) els.value[index] = el
  }

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = els.value.indexOf(entry.target)
            if (index !== -1) {
              setTimeout(() => {
                revealed.value[index] = true
              }, index * staggerMs)
              observer.unobserve(entry.target)
            }
          }
        })
      },
      { threshold, rootMargin }
    )

    els.value.forEach((el) => {
      if (el) observer.observe(el)
    })
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return { setRef, revealed }
}
