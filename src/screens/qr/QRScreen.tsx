import { useState } from 'react'
import Icon from '../../components/ui/Icon'
import { useAppStore } from '../../data/store'
import { user } from '../../data/mockData'

export default function QRScreen() {
  const closeQR = useAppStore((s) => s.closeQR)
  const [tab, setTab] = useState<'scan' | 'my'>('scan')

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 pt-14">
        <h1 className="text-lg font-bold font-display text-white">QR</h1>
        <button
          onClick={closeQR}
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-surface transition"
        >
          <Icon name="close" className="text-white" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex mx-6 bg-surface rounded-xl p-1 gap-1">
        <button
          onClick={() => setTab('scan')}
          className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition ${
            tab === 'scan' ? 'bg-primary text-black' : 'text-gray-400 hover:text-white'
          }`}
        >
          Сканировать
        </button>
        <button
          onClick={() => setTab('my')}
          className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition ${
            tab === 'my' ? 'bg-primary text-black' : 'text-gray-400 hover:text-white'
          }`}
        >
          Мой QR
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-6">
        {tab === 'scan' ? (
          <div className="w-full max-w-[300px] aspect-square relative">
            {/* Scanner frame */}
            <div className="absolute inset-0 border-2 border-primary/30 rounded-3xl" />
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-3 border-l-3 border-primary rounded-tl-3xl" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-3 border-r-3 border-primary rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-3 border-l-3 border-primary rounded-bl-3xl" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-3 border-r-3 border-primary rounded-br-3xl" />

            {/* Scan line animation */}
            <div className="absolute left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-[scanLine_2s_ease-in-out_infinite]" style={{ top: '50%' }} />

            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500 text-sm text-center px-8">
                Наведите камеру на QR-код для оплаты
              </p>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-[300px] flex flex-col items-center gap-6">
            {/* QR code placeholder */}
            <div className="w-64 h-64 bg-white rounded-2xl p-4 flex items-center justify-center">
              <div className="w-full h-full bg-[repeating-conic-gradient(#000_0%_25%,#fff_0%_50%)] bg-[length:16px_16px] rounded-lg opacity-90" />
            </div>

            <div className="text-center">
              <p className="text-white font-bold">{user.name}</p>
              <p className="text-gray-400 text-sm font-mono mt-1">{user.id}</p>
            </div>

            <div className="flex gap-3 w-full">
              <button className="flex-1 py-3 rounded-xl bg-surface border border-border text-white text-sm font-medium flex items-center justify-center gap-2 hover:border-primary/30 transition">
                <Icon name="content_copy" className="text-lg" />
                Копировать
              </button>
              <button className="flex-1 py-3 rounded-xl bg-surface border border-border text-white text-sm font-medium flex items-center justify-center gap-2 hover:border-primary/30 transition">
                <Icon name="share" className="text-lg" />
                Поделиться
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes scanLine {
          0%, 100% { top: 15%; opacity: 0; }
          10% { opacity: 1; }
          50% { top: 80%; opacity: 1; }
          60% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}
