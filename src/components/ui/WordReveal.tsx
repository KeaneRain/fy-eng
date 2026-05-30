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
        <span
          key={i}
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            verticalAlign: 'bottom',
            marginRight: i < words.length - 1 ? '0.28em' : undefined,
          }}
        >
          <motion.span
            initial={{ y: '110%' }}
            animate={inView ? { y: '0%' } : { y: '110%' }}
            transition={{ duration: 0.55, delay: delay + i * wordInterval, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'inline-block' }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
