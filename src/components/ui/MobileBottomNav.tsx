import { Button } from './Button'
import { NAV_LINKS } from '../../data/content'

export function MobileBottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-navy-950/95 backdrop-blur-sm border-t border-navy-800">
      {/* Nav buttons */}
      <div className="flex items-stretch gap-1 px-2 pt-2">
        {NAV_LINKS.map(link => (
          <a
            key={link.label}
            href={link.href}
            className="flex-1 flex items-center justify-center border border-navy-700 bg-navy-800/50 py-3 text-slate-400 hover:text-white hover:border-blueprint-600 hover:bg-navy-800 active:bg-blueprint-600/20 transition-all"
          >
            <span className="text-[10px] font-mono tracking-wider uppercase font-semibold leading-none">{link.label}</span>
          </a>
        ))}
      </div>
      {/* CTA */}
      <div className="px-2 pb-5 pt-1.5">
        <Button href="#contact" className="w-full">Get a Quote</Button>
      </div>
    </nav>
  )
}
