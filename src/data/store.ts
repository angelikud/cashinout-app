import { create } from 'zustand'

type Tab = 'wallet' | 'cards' | 'qr' | 'history' | 'menu'
type SubScreen = string | null

interface AppState {
  activeTab: Tab
  subScreen: SubScreen
  qrOpen: boolean
  settingsOpen: boolean
  setTab: (tab: Tab) => void
  setSubScreen: (s: SubScreen) => void
  openQR: () => void
  closeQR: () => void
  openSettings: () => void
  closeSettings: () => void
}

export const useAppStore = create<AppState>((set) => ({
  activeTab: 'wallet',
  subScreen: null,
  qrOpen: false,
  settingsOpen: false,
  setTab: (tab) => set({ activeTab: tab, subScreen: null }),
  setSubScreen: (s) => set({ subScreen: s }),
  openQR: () => set({ qrOpen: true }),
  closeQR: () => set({ qrOpen: false }),
  openSettings: () => set({ settingsOpen: true }),
  closeSettings: () => set({ settingsOpen: false }),
}))
