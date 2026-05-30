import { motion } from 'framer-motion'

interface WordRevealProps {
  text: string
  className?: string
  inView: boolean
  delay?: number
  wordInterval?: number
}

export function WordReveal({ text, className, inView, delay = 0, wordInterval = 0.09 }: WordRevealProps) {
  const words = text.split(' ')
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.55, delay: delay + i * wordInterval, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'inline-block', marginRight: i < words.length - 1 ? '0.28em' : undefined }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}
