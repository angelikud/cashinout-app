import Header from '../../components/layout/Header'
import Icon from '../../components/ui/Icon'
import { balance, cards, transactions, user } from '../../data/mockData'
import { useAppStore } from '../../data/store'

function ActionButton({ icon, label, primary }: { icon: string; label: string; primary?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <button
        className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all transform hover:scale-105 ${
          primary
            ? 'bg-primary hover:bg-primary-hover shadow-lg shadow-neon-blue'
            : 'bg-surface border border-border hover:border-neon-purple shadow-[0_0_15px_rgba(188,19,254,0.15)]'
        }`}
      >
        <Icon
          name={icon}
          className={`text-3xl ${primary ? 'text-black' : 'text-white'}`}
          />
      </button>
      <span className="text-xs text-gray-400 font-medium text-center">{label}</span>
    </div>
  )
}

function VirtualCard({ card, isSecond }: { card: typeof cards[0]; isSecond?: boolean }) {
  return (
    <div
      className={`min-w-[300px] h-[180px] rounded-2xl relative overflow-hidden flex flex-col justify-between p-6 shrink-0 ${
        isSecond
          ? 'bg-surface border border-border opacity-80 scale-95 origin-left'
          : 'bg-gradient-to-br from-gray-900 to-gray-800 border border-primary/50 shadow-xl shadow-card-glow'
      }`}
    >
      {!isSecond && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl -mr-10 -mt-10" />
      )}
      <div className="flex justify-between items-start z-10">
        <span className="text-[10px] tracking-[0.2em] font-bold text-white/70">CASHINOUT</span>
        {!isSecond && <span className="text-[10px] font-bold text-primary">{card.type}</span>}
      </div>
      <div className="z-10 mt-2">
        <div className={`w-10 h-7 rounded mb-2 ${isSecond ? 'bg-gray-800' : 'bg-white/10 backdrop-blur-md border border-white/20'}`} />
        <p className={`font-mono text-lg tracking-widest ${isSecond ? 'text-gray-600' : 'text-white drop-shadow-md'}`}>
          {card.number}
        </p>
      </div>
      <div className="flex justify-between items-end z-10">
        <span className={`text-xs font-medium uppercase tracking-wider ${isSecond ? 'text-gray-600' : 'text-white/60'}`}>
          {card.holder}
        </span>
        {!isSecond && (
          <span className="text-white/90 italic font-bold text-lg">{card.brand}</span>
        )}
      </div>
    </div>
  )
}

function TransactionItem({ tx }: { tx: typeof transactions[0] }) {
  const isPositive = tx.amount > 0
  return (
    <div className="rounded-2xl bg-surface border border-border p-4 flex items-center justify-between group hover:border-primary/30 transition-colors">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center border relative ${
          isPositive
            ? 'bg-green-900/10 border-green-900/30 text-green-400'
            : 'bg-gray-900 border-border text-white font-bold'
        }`}>
          {tx.icon ? (
            tx.icon
          ) : isPositive ? (
            <Icon name="south" className="text-lg" />
          ) : (
            <Icon name="north" className="text-lg" />
          )}
          <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-surface ${
            tx.status === 'success'
              ? isPositive ? 'bg-green-500' : 'bg-red-500'
              : tx.status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'
          }`} />
        </div>
        <div>
          <h3 className="font-bold text-white text-sm">{tx.title}</h3>
          <p className="text-xs text-gray-400 mt-0.5 font-mono">{tx.date}, {tx.time}</p>
        </div>
      </div>
      <span className={`font-mono font-bold ${
        isPositive ? 'text-green-400' : 'text-red-400'
      }`}>
        {isPositive ? '+' : ''}{tx.amount} {tx.currency}
      </span>
    </div>
  )
}

export default function WalletScreen() {
  const setTab = useAppStore((s) => s.setTab)
  const recentTx = transactions.slice(0, 2)

  return (
    <div className="screen-enter">
      <Header />

      <main className="px-6 mt-4 pb-28 overflow-y-auto" style={{ height: 'calc(100vh - 80px)' }}>
        {/* Greeting */}
        <p className="text-gray-400 text-sm font-medium">
          Добрый день, {user.name}
        </p>

        {/* Balance */}
        <div className="mt-2">
          <p className="text-xs tracking-widest uppercase text-neon-blue font-display mb-1">
            ОБЩИЙ БАЛАНС
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl text-gray-500 font-light">$</span>
            <span className="text-5xl font-bold font-mono text-white tracking-tighter">
              {Math.floor(balance.total).toLocaleString()}
              <span className="text-3xl">.{(balance.total % 1).toFixed(2).slice(2)}</span>
            </span>
            <span className="px-2 py-1 rounded bg-gray-900 border border-border text-xs font-mono text-gray-400">
              {balance.currency}
            </span>
          </div>
          <p className="text-sm text-gray-400 font-mono mt-2">
            ≈ {balance.equivalentUSD.toLocaleString()} USD · курс {balance.rate}
          </p>
          <div className="inline-flex items-center gap-1 mt-3 px-3 py-1.5 rounded-full bg-green-900/20 text-green-400 text-sm font-medium border border-green-800/50">
            <Icon name="trending_up" className="text-sm" />
            <span>+{balance.change24h}% за 24ч</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-4 gap-4 mt-8">
          <ActionButton icon="add" label="Пополнить" primary />
          <ActionButton icon="swap_vert" label="Обмен" />
          <ActionButton icon="arrow_forward" label="Отправить" />
          <ActionButton icon="arrow_downward" label="Получить" />
        </div>

        {/* Virtual Cards */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-white font-display">Виртуальные карты</h2>
            <button
              onClick={() => setTab('cards')}
              className="text-sm text-primary hover:text-primary-hover transition-colors"
            >
              Все карты
            </button>
          </div>
          <div className="flex overflow-x-auto gap-4 no-scrollbar pb-4 -mx-6 px-6">
            {cards.map((card, i) => (
              <VirtualCard key={card.id} card={card} isSecond={i > 0} />
            ))}
          </div>
        </div>

        {/* QR Banner */}
        <div className="mt-4 rounded-2xl bg-surface border border-border p-4 flex items-center justify-between shadow-[0_0_15px_rgba(0,240,255,0.05)]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-900/20 flex items-center justify-center text-primary border border-cyan-800/30">
              <Icon name="qr_code_scanner" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">Оплата по QR из крипты</h3>
              <p className="text-xs text-gray-400 mt-0.5">Платите в магазинах напрямую</p>
            </div>
          </div>
          <Icon name="chevron_right" className="text-gray-400 text-sm" />
        </div>

        {/* Recent Transactions */}
        <div className="mt-8 pb-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-white font-display">Последние операции</h2>
            <button
              onClick={() => setTab('history')}
              className="text-sm text-primary hover:text-primary-hover transition-colors"
            >
              Все
            </button>
          </div>
          <div className="space-y-3">
            {recentTx.map((tx) => (
              <TransactionItem key={tx.id} tx={tx} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
