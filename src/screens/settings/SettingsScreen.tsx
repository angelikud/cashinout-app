import { useState } from 'react'
import Icon from '../../components/ui/Icon'
import { useAppStore } from '../../data/store'
import { settingsSections } from '../../data/mockData'

function Toggle({ value, onChange }: { value: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={`w-12 h-7 rounded-full transition-colors relative ${
        value ? 'bg-primary' : 'bg-gray-700'
      }`}
    >
      <div
        className={`w-5 h-5 rounded-full bg-white absolute top-1 transition-transform ${
          value ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  )
}

export default function SettingsScreen() {
  const closeSettings = useAppStore((s) => s.closeSettings)
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    pin: true,
    fingerprint: false,
    'hide-balance': false,
    vibration: true,
  })

  const toggle = (id: string) => {
    setToggles((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="fixed inset-0 z-[90] bg-bg max-w-[430px] mx-auto">
      <div className="px-6 py-4 pt-14 flex items-center gap-4">
        <button
          onClick={closeSettings}
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-surface transition"
        >
          <Icon name="arrow_back" className="text-white" />
        </button>
        <h1 className="text-lg font-bold font-display">Настройки</h1>
      </div>

      <div className="px-6 pb-8 overflow-y-auto" style={{ height: 'calc(100vh - 80px)' }}>
        {settingsSections.map((section) => (
          <div key={section.title} className="mt-6">
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-3 px-1">
              {section.title}
            </p>
            <div className="rounded-2xl bg-surface border border-border overflow-hidden">
              {section.items.map((item, ii) => (
                <div
                  key={item.id}
                  className={`px-4 py-4 flex items-center gap-4 ${
                    ii < section.items.length - 1 ? 'border-b border-border' : ''
                  }`}
                >
                  <div className="w-9 h-9 rounded-xl bg-bg border border-border flex items-center justify-center">
                    <Icon name={item.icon} className="text-gray-400 text-xl" />
                  </div>
                  <span className="flex-1 text-sm font-medium text-white">{item.label}</span>
                  {item.type === 'toggle' && (
                    <Toggle
                      value={toggles[item.id] ?? item.value as boolean}
                      onChange={() => toggle(item.id)}
                    />
                  )}
                  {item.type === 'select' && (
                    <span className="text-sm text-primary font-mono">{item.value as string}</span>
                  )}
                  {item.type === 'text' && (
                    <span className="text-sm text-gray-400 font-mono">{item.value as string}</span>
                  )}
                  {item.type === 'nav' && (
                    <Icon name="chevron_right" className="text-gray-600 text-xl" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
