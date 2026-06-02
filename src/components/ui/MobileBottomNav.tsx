import { Button } from './Button'
import { NAV_LINKS } from '../../data/content'

export function MobileBottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-navy-950/95 backdrop-blur-sm border-t border-navy-800">
      {/* Nav links */}
      <div className="flex items-center justify-around px-2 pt-3 pb-1">
        {NAV_LINKS.map(link => (
          <a
            key={link.label}
            href={link.href}
            className="flex-1 text-center text-slate-400 active:text-white hover:text-white transition-colors py-1"
          >
            <span className="text-[9px] font-mono tracking-widest uppercase">{link.label}</span>
          </a>
        ))}
      </div>
      {/* CTA */}
      <div className="px-12 pb-6 pt-2">
        <Button href="#contact" className="w-full">Get a Quote</Button>
      </div>
    </nav>
  )
}
