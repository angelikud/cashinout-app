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
      <div
        className="rounded-3xl p-2 flex justify-between items-center"
        style={{
          background: 'rgba(10,10,10,0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.06)',
          boxShadow: '0 -4px 30px rgba(0,0,0,0.5)',
        }}
      >
        {tabs.map((tab) => {
          if (tab.id === 'qr') {
            return (
              <div key={tab.id} className="-mt-8">
                <button
                  onClick={openQR}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transform hover:scale-105 transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #00F0FF, #66F7FF)',
                    boxShadow: '0 0 15px rgba(0,240,255,0.5), 0 4px 15px rgba(0,240,255,0.3)',
                  }}
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
              className="flex-1 flex flex-col items-center justify-center py-2 gap-1 transition-colors"
              style={{ color: isActive ? '#00F0FF' : '#6B7280' }}
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
