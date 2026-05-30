import { motion } from 'framer-motion'

interface CharSplitProps {
  text: string
  className?: string
  startDelay?: number
  charInterval?: number
}

export function CharSplit({ text, className, startDelay = 0, charInterval = 0.025 }: CharSplitProps) {
  return (
    <span className={className} aria-label={text}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', lineHeight: 'inherit' }}
        >
          <motion.span
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.5, delay: startDelay + i * charInterval, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'inline-block' }}
          >
            {char === ' ' ? ' ' : char}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
