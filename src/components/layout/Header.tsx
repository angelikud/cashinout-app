import { useAppStore } from '../../data/store'
import Icon from '../ui/Icon'

export default function Header() {
  const openSettings = useAppStore((s) => s.openSettings)

  return (
    <header className="px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center shadow-neon-blue">
          <Icon name="north_east" className="text-white text-xl" />
        </div>
        <h1 className="text-2xl font-bold font-display tracking-wider text-white">
          Cash<span className="text-primary">In</span>Out
        </h1>
      </div>
      <button
        onClick={openSettings}
        className="w-10 h-10 rounded-full border border-primary/50 flex items-center justify-center hover:bg-gray-900 transition shadow-[0_0_10px_rgba(0,240,255,0.3)] group"
      >
        <Icon name="settings" className="text-primary group-hover:rotate-90 transition-transform duration-300" />
      </button>
    </header>
  )
}
