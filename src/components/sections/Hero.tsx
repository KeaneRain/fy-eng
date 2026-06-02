import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { CharSplit } from '../ui/CharSplit'

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12 px-12 md:px-16">
      <div className="max-w-lg">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-blueprint-300 font-mono text-xs tracking-widest uppercase mb-5"
        >
          Engineering Consultancy
        </motion.p>

        <h1 className="text-6xl md:text-7xl font-heading text-white leading-none uppercase mb-5">
          <CharSplit text="Engineering" startDelay={0.4} /><br />
          <CharSplit text="Solutions" startDelay={0.65} /><br />
          <CharSplit text="Built on" className="text-blueprint-600" startDelay={0.88} /><br />
          <CharSplit text="Precision." startDelay={1.08} />
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-slate-400 font-body text-sm mb-8 tracking-wide"
        >
          Precision &bull; Passion &bull; Progress
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="flex gap-4 flex-wrap"
        >
          <Button href="#contact">Get a Quote</Button>
          <Button href="#projects" variant="outline">View Projects</Button>
        </motion.div>
      </div>
    </section>
  )
}
