import { useAppStore } from '../../data/store'
import Icon from '../ui/Icon'

export default function Header() {
  const openSettings = useAppStore((s) => s.openSettings)

  return (
    <>
      <div className="h-12 w-full" />
      <header className="px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-neon-blue" style={{ background: 'linear-gradient(135deg, #00F0FF, #BC13FE)' }}>
            <Icon name="north_east" className="text-white text-xl" />
          </div>
          <h1 className="text-2xl font-bold font-display tracking-wider text-white">
            Cash<span className="text-primary">In</span>Out
          </h1>
        </div>
        <button
          onClick={openSettings}
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-900 transition group"
          style={{ border: '1px solid rgba(0,240,255,0.5)', boxShadow: '0 0 10px rgba(0,240,255,0.3)' }}
        >
          <Icon name="settings" className="text-primary group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </header>
    </>
  )
}
