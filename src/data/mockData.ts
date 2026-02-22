export const user = {
  name: 'Алексей',
  email: 'alex@example.com',
  id: 'CIO-839201',
  avatar: null,
  verificationLevel: 1,
  referrals: 12,
  referralEarned: 34.50,
}

export const balance = {
  total: 1247.50,
  currency: 'USDT',
  change24h: +2.4,
  equivalentUSD: 1245.01,
  rate: 0.998,
}

export interface CardData {
  id: string
  number: string
  holder: string
  type: 'STEEL' | 'GOLD' | 'TRAFFIC'
  brand: 'VISA' | 'Mastercard'
  balance: number
  status: 'active' | 'frozen'
  expiry: string
  cvv: string
}

export const cards: CardData[] = [
  {
    id: '1',
    number: '4521  ····  ····  7890',
    holder: 'A. IVANOV',
    type: 'STEEL',
    brand: 'VISA',
    balance: 485.20,
    status: 'active',
    expiry: '12/27',
    cvv: '***',
  },
  {
    id: '2',
    number: '8832  ····  ····  1456',
    holder: 'A. IVANOV',
    type: 'GOLD',
    brand: 'Mastercard',
    balance: 1200.00,
    status: 'active',
    expiry: '03/28',
    cvv: '***',
  },
]

export interface Transaction {
  id: string
  title: string
  type: 'send' | 'receive' | 'exchange' | 'payment' | 'topup'
  amount: number
  currency: string
  date: string
  time: string
  status: 'success' | 'pending' | 'error'
  icon?: string
  network?: string
  address?: string
  fee?: number
  hash?: string
}

export const transactions: Transaction[] = [
  { id: '1', title: 'ChatGPT Plus', type: 'payment', amount: -20.00, currency: 'USD', date: 'Сегодня', time: '12:30', status: 'success', icon: 'C' },
  { id: '2', title: 'Пополнение', type: 'topup', amount: 150, currency: 'USDT', date: 'Сегодня', time: '10:15', status: 'success' },
  { id: '3', title: 'Spotify Premium', type: 'payment', amount: -9.99, currency: 'USD', date: 'Вчера', time: '18:42', status: 'success', icon: 'S' },
  { id: '4', title: 'Перевод → 0x8f3...a2d', type: 'send', amount: -50, currency: 'USDT', date: 'Вчера', time: '14:20', status: 'success', network: 'TRC20', address: '0x8f3...a2d', fee: 1.00, hash: '0xabc123...' },
  { id: '5', title: 'Обмен BTC → USDT', type: 'exchange', amount: 320.50, currency: 'USDT', date: '20 фев', time: '09:10', status: 'success' },
  { id: '6', title: 'Google Ads', type: 'payment', amount: -150.00, currency: 'USD', date: '20 фев', time: '08:00', status: 'success', icon: 'G' },
  { id: '7', title: 'Получение от @user', type: 'receive', amount: 75, currency: 'USDT', date: '19 фев', time: '22:30', status: 'success' },
  { id: '8', title: 'Вывод на карту', type: 'send', amount: -200, currency: 'USD', date: '19 фев', time: '15:00', status: 'pending' },
]

export const cryptoAssets = [
  { symbol: 'USDT', name: 'Tether', balance: 1047.50, icon: '₮', networks: ['TRC20', 'ERC20', 'BEP20', 'TON'] },
  { symbol: 'BTC', name: 'Bitcoin', balance: 0.0032, icon: '₿', networks: ['Bitcoin', 'Lightning'] },
  { symbol: 'ETH', name: 'Ethereum', balance: 0.15, icon: 'Ξ', networks: ['ERC20', 'Arbitrum', 'Optimism'] },
  { symbol: 'TON', name: 'Toncoin', balance: 12.5, icon: '◇', networks: ['TON'] },
  { symbol: 'SOL', name: 'Solana', balance: 2.1, icon: '◎', networks: ['Solana'] },
  { symbol: 'TRX', name: 'TRON', balance: 450, icon: '⟁', networks: ['TRC20'] },
  { symbol: 'BNB', name: 'BNB', balance: 0.8, icon: '◆', networks: ['BEP20'] },
]

export const menuSections = [
  {
    title: null,
    items: [
      { id: 'verification', label: 'Верификация', icon: 'verified_user', badge: 'Ур. 1' },
      { id: 'referral', label: 'Реферальная программа', icon: 'group_add', badge: '12' },
      { id: 'business', label: 'Для бизнеса', icon: 'store', badge: null },
      { id: 'promo', label: 'Акции и промокоды', icon: 'local_offer', badge: null },
      { id: 'saved', label: 'Сохранённые реквизиты', icon: 'bookmark', badge: null },
    ],
  },
  {
    title: 'Информация',
    items: [
      { id: 'socials', label: 'Официальные аккаунты', icon: 'public', badge: null },
      { id: 'faq', label: 'FAQ / Поддержка', icon: 'help_outline', badge: null },
    ],
  },
]

export const settingsSections = [
  {
    title: 'Безопасность',
    items: [
      { id: 'pin', label: 'PIN-код', icon: 'pin', type: 'toggle' as const, value: true },
      { id: 'fingerprint', label: 'Отпечаток / Face ID', icon: 'fingerprint', type: 'toggle' as const, value: false },
      { id: '2fa', label: 'Двухфакторная аутентификация', icon: 'security', type: 'nav' as const },
      { id: 'hide-balance', label: 'Скрывать баланс', icon: 'visibility_off', type: 'toggle' as const, value: false },
    ],
  },
  {
    title: 'Предпочтения',
    items: [
      { id: 'currency', label: 'Валюта баланса', icon: 'paid', type: 'select' as const, value: 'USD' },
      { id: 'language', label: 'Язык', icon: 'translate', type: 'select' as const, value: 'RU' },
      { id: 'vibration', label: 'Вибрация', icon: 'vibration', type: 'toggle' as const, value: true },
    ],
  },
  {
    title: 'Сессии',
    items: [
      { id: 'devices', label: 'Устройства', icon: 'devices', type: 'nav' as const },
      { id: 'notifications', label: 'Уведомления', icon: 'notifications', type: 'nav' as const },
    ],
  },
  {
    title: 'О приложении',
    items: [
      { id: 'version', label: 'Версия', icon: 'info', type: 'text' as const, value: '1.0.0' },
      { id: 'terms', label: 'Условия использования', icon: 'description', type: 'nav' as const },
      { id: 'privacy', label: 'Политика конфиденциальности', icon: 'policy', type: 'nav' as const },
    ],
  },
]
