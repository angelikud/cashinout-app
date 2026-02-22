import { useAppStore } from '../../data/store'
import Icon from '../ui/Icon'

function LogoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 37 40" fill="none">
      <path d="M1.79 7.8C.69 8.34 0 9.45 0 10.67V22.26l18.3 9.11 9.16-4.6-.01-3.56c-.003-.61-.35-1.16-.9-1.43L13.67 15.49l3.91-1.89c.45-.22.98-.22 1.44 0l12.18 5.96c.55.27.9.83.9 1.44v7.07c0 .61-.35 1.16-.9 1.43L18.3 35.85 0 26.79v2.59c0 1.22.7 2.33 1.8 2.87l15.05 7.41c.91.45 1.98.45 2.89 0l15.12-7.41c1.1-.54 1.8-1.66 1.8-2.88V17.74L18.3 8.69l-9.2 4.55-.04.02.03 3.49c.005.6.35 1.15.9 1.42l12.85 6.36-3.8 1.95c-.46.24-1.01.24-1.47 0L5.47 20.5c-.55-.27-.9-.83-.9-1.44v-8.12l12.72-6.33 18.47 9.14V10.67c0-1.21-.7-2.33-1.8-2.87L19.75.34a2.95 2.95 0 00-2.9.01L1.79 7.8z" fill="#fff"/>
    </svg>
  )
}

export default function Header() {
  const openSettings = useAppStore((s) => s.openSettings)

  return (
    <header
      className="px-5 flex justify-between items-center"
      style={{ height: 56, paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-[10px] flex items-center justify-center"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(0,240,255,0.35)', boxShadow: '0 0 10px rgba(0,240,255,0.12)' }}
        >
          <LogoIcon />
        </div>
        <h1 className="text-[17px] font-bold font-display tracking-wider text-white" style={{ letterSpacing: '-0.3px' }}>
          Cash<span className="text-primary">In</span>Out
        </h1>
      </div>
      <button
        onClick={openSettings}
        className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-900 transition group"
        style={{ border: '1px solid rgba(0,240,255,0.5)', boxShadow: '0 0 10px rgba(0,240,255,0.3)' }}
      >
        <Icon name="settings" className="text-primary group-hover:rotate-90 transition-transform duration-300" size={20} />
      </button>
    </header>
  )
}
