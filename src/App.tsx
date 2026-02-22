import { useAppStore } from './data/store'
import BottomNav from './components/layout/BottomNav'
import WalletScreen from './screens/wallet/WalletScreen'
import CardsScreen from './screens/cards/CardsScreen'
import HistoryScreen from './screens/history/HistoryScreen'
import MenuScreen from './screens/menu/MenuScreen'
import QRScreen from './screens/qr/QRScreen'
import SettingsScreen from './screens/settings/SettingsScreen'

function ActiveScreen() {
  const activeTab = useAppStore((s) => s.activeTab)

  switch (activeTab) {
    case 'wallet': return <WalletScreen />
    case 'cards': return <CardsScreen />
    case 'history': return <HistoryScreen />
    case 'menu': return <MenuScreen />
    default: return <WalletScreen />
  }
}

export default function App() {
  const qrOpen = useAppStore((s) => s.qrOpen)
  const settingsOpen = useAppStore((s) => s.settingsOpen)

  return (
    <div className="h-screen bg-bg overflow-hidden relative">
      <ActiveScreen />
      <BottomNav />
      {qrOpen && <QRScreen />}
      {settingsOpen && <SettingsScreen />}
    </div>
  )
}
