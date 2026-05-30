import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ProjectCard } from '../ui/ProjectCard'
import { Button } from '../ui/Button'
import { WordReveal } from '../ui/WordReveal'
import { PROJECTS } from '../../data/content'

export function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-20 px-10 md:px-14" ref={ref}>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="text-blueprint-300 font-mono text-xs tracking-widest uppercase mb-2"
      >
        Featured Projects
      </motion.p>

      <h2 className="text-4xl font-heading text-white uppercase mb-10">
        <WordReveal text="Building the Future" inView={inView} delay={0.15} />
        <motion.span
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.4, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="block w-10 h-0.5 bg-gold-500 mt-2"
          style={{ transformOrigin: 'left' }}
        />
      </h2>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 + i * 0.1 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.55 }}
      >
        <Button href="#contact" variant="outline">View All Projects</Button>
      </motion.div>
    </section>
  )
}
