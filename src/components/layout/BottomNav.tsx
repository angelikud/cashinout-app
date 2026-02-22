import { useAppStore } from '../../data/store'
import Icon from '../ui/Icon'

const tabs = [
  { id: 'wallet' as const, label: 'Кошелёк', icon: 'account_balance_wallet' },
  { id: 'cards' as const, label: 'Карты', icon: 'credit_card' },
  { id: 'qr' as const, label: 'QR', icon: 'qr_code_scanner' },
  { id: 'history' as const, label: 'История', icon: 'history' },
  { id: 'menu' as const, label: 'Меню', icon: 'menu' },
]

export default function BottomNav() {
  const { activeTab, setTab, openQR } = useAppStore()

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-50 px-4 pb-4">
      <div className="bg-surface/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-border p-2 flex justify-between items-center">
        {tabs.map((tab) => {
          if (tab.id === 'qr') {
            return (
              <div key={tab.id} className="-mt-8">
                <button
                  onClick={openQR}
                  className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-primary to-cyan-300 shadow-lg shadow-neon-blue flex items-center justify-center transform hover:scale-105 transition-all"
                >
                  <Icon name="qr_code_scanner" className="text-black text-3xl" />
                </button>
              </div>
            )
          }

          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setTab(tab.id)}
              className={`flex-1 flex flex-col items-center justify-center py-2 gap-1 transition-colors ${
                isActive ? 'text-primary' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <Icon name={tab.icon} className="text-2xl" />
              <span className="text-[10px] font-medium">{tab.label}</span>
              {isActive && <div className="tab-dot" />}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
