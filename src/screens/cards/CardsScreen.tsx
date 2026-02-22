import { useState } from 'react'
import Icon from '../../components/ui/Icon'
import { cards, type CardData } from '../../data/mockData'

function CardTile({ card, onClick }: { card: CardData; onClick: () => void }) {
  return (
    <button onClick={onClick} className="w-full rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden border border-primary/30 shadow-card-glow p-6 text-left transition-all hover:border-primary/60 hover:scale-[1.01]">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10" />
      <div className="flex justify-between items-start z-10 relative">
        <span className="text-[10px] tracking-[0.2em] font-bold text-white/70">CASHINOUT</span>
        <span className="text-[10px] font-bold text-primary">{card.type}</span>
      </div>
      <div className="z-10 relative mt-4">
        <div className="w-10 h-7 rounded bg-white/10 backdrop-blur-md mb-3 border border-white/20" />
        <p className="font-mono text-lg text-white tracking-widest">{card.number}</p>
      </div>
      <div className="flex justify-between items-end z-10 relative mt-4">
        <div>
          <p className="text-xs text-white/40 mb-1">Баланс</p>
          <p className="font-mono font-bold text-white">${card.balance.toFixed(2)}</p>
        </div>
        <span className="text-white/90 italic font-bold text-lg">{card.brand}</span>
      </div>
      {card.status === 'frozen' && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-2xl">
          <div className="flex items-center gap-2 text-blue-400">
            <Icon name="ac_unit" />
            <span className="font-medium">Заморожена</span>
          </div>
        </div>
      )}
    </button>
  )
}

function CardDetail({ card, onBack }: { card: CardData; onBack: () => void }) {
  const [showNumber, setShowNumber] = useState(false)

  return (
    <div className="screen-enter">
      <div className="px-6 py-4 flex items-center gap-4">
        <button onClick={onBack} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-surface transition">
          <Icon name="arrow_back" className="text-white" />
        </button>
        <h1 className="text-lg font-bold font-display">Детали карты</h1>
      </div>

      <div className="px-6 pb-28 overflow-y-auto" style={{ height: 'calc(100vh - 80px)' }}>
        {/* Card visual */}
        <div className="w-full h-[200px] rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden border border-primary/50 shadow-card-glow p-6 flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-2xl -mr-10 -mt-10" />
          <div className="flex justify-between items-start z-10">
            <span className="text-[10px] tracking-[0.2em] font-bold text-white/70">CASHINOUT</span>
            <span className="text-[10px] font-bold text-primary">{card.type}</span>
          </div>
          <div className="z-10">
            <div className="w-12 h-8 rounded bg-white/10 backdrop-blur-md mb-3 border border-white/20" />
            <p className="font-mono text-xl text-white tracking-widest">
              {showNumber ? '4521  1234  5678  7890' : card.number}
            </p>
          </div>
          <div className="flex justify-between items-end z-10">
            <span className="text-xs text-white/60 uppercase tracking-wider">{card.holder}</span>
            <span className="text-white/90 italic font-bold text-xl">{card.brand}</span>
          </div>
        </div>

        {/* Card info */}
        <div className="mt-6 space-y-3">
          <div className="rounded-2xl bg-surface border border-border p-4 flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-500">Номер карты</p>
              <p className="font-mono text-white mt-1">{showNumber ? '4521 1234 5678 7890' : '4521 •••• •••• 7890'}</p>
            </div>
            <button onClick={() => setShowNumber(!showNumber)} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-surface-2 transition">
              <Icon name={showNumber ? 'visibility_off' : 'visibility'} className="text-gray-400 text-xl" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-surface border border-border p-4">
              <p className="text-xs text-gray-500">Срок</p>
              <p className="font-mono text-white mt-1">{card.expiry}</p>
            </div>
            <div className="rounded-2xl bg-surface border border-border p-4">
              <p className="text-xs text-gray-500">CVV</p>
              <p className="font-mono text-white mt-1">{card.cvv}</p>
            </div>
          </div>

          <div className="rounded-2xl bg-surface border border-border p-4">
            <p className="text-xs text-gray-500">Баланс карты</p>
            <p className="font-mono text-2xl font-bold text-white mt-1">${card.balance.toFixed(2)}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          <button className="rounded-2xl bg-surface border border-border p-4 flex flex-col items-center gap-2 hover:border-primary/30 transition">
            <Icon name="add" className="text-primary text-2xl" />
            <span className="text-xs text-gray-400">Пополнить</span>
          </button>
          <button className="rounded-2xl bg-surface border border-border p-4 flex flex-col items-center gap-2 hover:border-blue-500/30 transition">
            <Icon name="ac_unit" className="text-blue-400 text-2xl" />
            <span className="text-xs text-gray-400">Заморозить</span>
          </button>
          <button className="rounded-2xl bg-surface border border-border p-4 flex flex-col items-center gap-2 hover:border-red-500/30 transition">
            <Icon name="delete_outline" className="text-red-400 text-2xl" />
            <span className="text-xs text-gray-400">Удалить</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default function CardsScreen() {
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null)

  if (selectedCard) {
    return <CardDetail card={selectedCard} onBack={() => setSelectedCard(null)} />
  }

  return (
    <div className="screen-enter">
      <div className="px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold font-display">Мои карты</h1>
        <button className="px-4 py-2 rounded-xl bg-primary text-black text-sm font-bold hover:bg-primary-hover transition">
          + Создать
        </button>
      </div>

      <div className="px-6 pb-28 overflow-y-auto space-y-4" style={{ height: 'calc(100vh - 80px)' }}>
        {cards.map((card) => (
          <CardTile key={card.id} card={card} onClick={() => setSelectedCard(card)} />
        ))}

        {/* Empty state hint */}
        <div className="rounded-2xl border-2 border-dashed border-border p-8 flex flex-col items-center gap-3 text-center">
          <div className="w-16 h-16 rounded-2xl bg-surface border border-border flex items-center justify-center">
            <Icon name="add_card" className="text-gray-500 text-3xl" />
          </div>
          <p className="text-sm text-gray-500">Добавить ещё карту</p>
          <p className="text-xs text-gray-600">NFC Pay · Online Pay+ · Traffic Pay</p>
        </div>
      </div>
    </div>
  )
}
