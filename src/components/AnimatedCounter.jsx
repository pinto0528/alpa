import { useEffect, useRef, useState } from 'react'
import { useInView, motion, useSpring, useTransform } from 'framer-motion'

function AnimatedDigit({ value }) {
  const ref = useRef(null)
  const [numValue, setNumValue] = useState(0)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const spring = useSpring(0, { stiffness: 80, damping: 20 })
  const display = useTransform(spring, (v) => Math.round(v))
  const [displayVal, setDisplayVal] = useState(0)

  useEffect(() => {
    const parsed = parseFloat(value.replace(/[^0-9.]/g, ''))
    if (!isNaN(parsed)) setNumValue(parsed)
  }, [value])

  useEffect(() => {
    spring.set(inView ? numValue : 0)
  }, [inView, numValue, spring])

  useEffect(() => {
    const unsubscribe = display.on('change', (v) => setDisplayVal(v))
    return unsubscribe
  }, [display])

  const prefix = value.startsWith('+') ? '+' : ''
  const suffix = value.includes('%') ? '%' : ''

  return (
    <span ref={ref}>
      {prefix}{displayVal}{suffix}
    </span>
  )
}

export default function AnimatedCounter({ text, className }) {
  const segments = text.split(/(4\.000|\+?8\.000|\+?50%)/g)

  return (
    <motion.span
      className={className}
      initial={{ scale: 1 }}
      whileInView={{ scale: [1, 1.05, 1] }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {segments.map((seg, i) => {
        if (/^(\+?8\.000|4\.000|\+?50%)$/.test(seg)) {
          return <AnimatedDigit key={i} value={seg} />
        }
        return <span key={i}>{seg}</span>
      })}
    </motion.span>
  )
}
