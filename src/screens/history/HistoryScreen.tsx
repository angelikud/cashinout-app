import { useState } from 'react'
import Icon from '../../components/ui/Icon'
import { transactions, type Transaction } from '../../data/mockData'

const filterTypes = [
  { id: 'all', label: 'Все' },
  { id: 'payment', label: 'Оплаты' },
  { id: 'topup', label: 'Пополнения' },
  { id: 'send', label: 'Переводы' },
  { id: 'exchange', label: 'Обмен' },
]

function TxItem({ tx, onClick }: { tx: Transaction; onClick: () => void }) {
  const isPositive = tx.amount > 0
  return (
    <button onClick={onClick} className="w-full rounded-2xl bg-surface border border-border p-4 flex items-center justify-between hover:border-primary/30 transition-colors text-left">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center border relative ${
          isPositive
            ? 'bg-green-900/10 border-green-900/30 text-green-400'
            : tx.type === 'exchange'
              ? 'bg-purple-900/10 border-purple-900/30 text-neon-purple'
              : 'bg-gray-900 border-border text-white font-bold'
        }`}>
          {tx.icon ? (
            <span className="text-sm font-bold">{tx.icon}</span>
          ) : tx.type === 'exchange' ? (
            <Icon name="swap_vert" className="text-lg" />
          ) : isPositive ? (
            <Icon name="south" className="text-lg" />
          ) : (
            <Icon name="north" className="text-lg" />
          )}
          <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-surface ${
            tx.status === 'success' ? (isPositive ? 'bg-green-500' : 'bg-red-500')
            : tx.status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'
          }`} />
        </div>
        <div>
          <h3 className="font-bold text-white text-sm">{tx.title}</h3>
          <p className="text-xs text-gray-400 mt-0.5 font-mono">{tx.time}</p>
        </div>
      </div>
      <div className="text-right">
        <span className={`font-mono font-bold ${
          isPositive ? 'text-green-400' : 'text-red-400'
        }`}>
          {isPositive ? '+' : ''}{tx.amount} {tx.currency}
        </span>
        {tx.status === 'pending' && (
          <p className="text-[10px] text-yellow-500 mt-0.5">В обработке</p>
        )}
      </div>
    </button>
  )
}

function TxDetail({ tx, onBack }: { tx: Transaction; onBack: () => void }) {
  const isPositive = tx.amount > 0
  return (
    <div className="screen-enter">
      <div className="px-6 py-4 flex items-center gap-4">
        <button onClick={onBack} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-surface transition">
          <Icon name="arrow_back" className="text-white" />
        </button>
        <h1 className="text-lg font-bold font-display">Детали операции</h1>
      </div>

      <div className="px-6 pb-28 overflow-y-auto" style={{ height: 'calc(100vh - 80px)' }}>
        {/* Amount */}
        <div className="text-center py-8">
          <div className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4 ${
            isPositive ? 'bg-green-900/20 text-green-400' : 'bg-red-900/20 text-red-400'
          }`}>
            <Icon name={isPositive ? 'south' : 'north'} className="text-3xl" />
          </div>
          <p className={`text-3xl font-mono font-bold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {isPositive ? '+' : ''}{tx.amount} {tx.currency}
          </p>
          <p className="text-gray-400 text-sm mt-2">{tx.title}</p>
          <div className={`inline-flex items-center gap-1 mt-3 px-3 py-1 rounded-full text-xs font-medium ${
            tx.status === 'success' ? 'bg-green-900/20 text-green-400 border border-green-800/50'
            : tx.status === 'pending' ? 'bg-yellow-900/20 text-yellow-400 border border-yellow-800/50'
            : 'bg-red-900/20 text-red-400 border border-red-800/50'
          }`}>
            <Icon name={tx.status === 'success' ? 'check_circle' : tx.status === 'pending' ? 'schedule' : 'error'} className="text-sm" />
            {tx.status === 'success' ? 'Успешно' : tx.status === 'pending' ? 'В обработке' : 'Ошибка'}
          </div>
        </div>

        {/* Details */}
        <div className="space-y-3">
          <div className="rounded-2xl bg-surface border border-border p-4">
            <div className="flex justify-between py-2 border-b border-border">
              <span className="text-gray-500 text-sm">Дата</span>
              <span className="text-white text-sm font-mono">{tx.date}, {tx.time}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border">
              <span className="text-gray-500 text-sm">Тип</span>
              <span className="text-white text-sm">{tx.title}</span>
            </div>
            {tx.network && (
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-gray-500 text-sm">Сеть</span>
                <span className="text-primary text-sm font-mono">{tx.network}</span>
              </div>
            )}
            {tx.address && (
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-gray-500 text-sm">Адрес</span>
                <span className="text-white text-sm font-mono">{tx.address}</span>
              </div>
            )}
            {tx.fee !== undefined && (
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-gray-500 text-sm">Комиссия</span>
                <span className="text-white text-sm font-mono">{tx.fee} {tx.currency}</span>
              </div>
            )}
            {tx.hash && (
              <div className="flex justify-between py-2">
                <span className="text-gray-500 text-sm">TX Hash</span>
                <span className="text-primary text-sm font-mono">{tx.hash}</span>
              </div>
            )}
          </div>

          {tx.address && (
            <button className="w-full py-3 rounded-xl bg-surface border border-border text-white text-sm font-medium flex items-center justify-center gap-2 hover:border-primary/30 transition">
              <Icon name="bookmark_add" className="text-lg" />
              Сохранить реквизит
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default function HistoryScreen() {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [selectedTx, setSelectedTx] = useState<Transaction | null>(null)

  if (selectedTx) {
    return <TxDetail tx={selectedTx} onBack={() => setSelectedTx(null)} />
  }

  const filtered = transactions.filter((tx) => {
    if (filter !== 'all' && tx.type !== filter) return false
    if (search && !tx.title.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  // Group by date
  const grouped = filtered.reduce<Record<string, Transaction[]>>((acc, tx) => {
    (acc[tx.date] ||= []).push(tx)
    return acc
  }, {})

  return (
    <div className="screen-enter">
      <div className="px-6 py-4">
        <h1 className="text-2xl font-bold font-display">История</h1>
      </div>

      <div className="px-6 pb-28 overflow-y-auto" style={{ height: 'calc(100vh - 80px)' }}>
        {/* Search */}
        <div className="relative mb-4">
          <Icon name="search" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Поиск по операциям..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-surface border border-border rounded-xl py-3 pl-12 pr-4 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-primary/50 transition"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-4">
          {filterTypes.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition ${
                filter === f.id
                  ? 'bg-primary text-black'
                  : 'bg-surface border border-border text-gray-400 hover:text-white hover:border-primary/30'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Transaction list */}
        {Object.keys(grouped).length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="w-20 h-20 rounded-3xl bg-surface border border-border flex items-center justify-center">
              <Icon name="receipt_long" className="text-gray-600 text-4xl" />
            </div>
            <p className="text-gray-500 text-sm">Здесь будут все операции</p>
            <button className="px-6 py-2.5 rounded-xl bg-primary text-black text-sm font-bold hover:bg-primary-hover transition">
              Пополнить
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {Object.entries(grouped).map(([date, txs]) => (
              <div key={date}>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-3">{date}</p>
                <div className="space-y-3">
                  {txs.map((tx) => (
                    <TxItem key={tx.id} tx={tx} onClick={() => setSelectedTx(tx)} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
