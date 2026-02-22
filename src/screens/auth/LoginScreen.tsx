import Icon from '../../components/ui/Icon'

export default function LoginScreen({ onLogin }: { onLogin: () => void }) {
  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center px-8">
      {/* Logo */}
      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center shadow-neon-blue mb-8">
        <Icon name="north_east" className="text-white text-4xl" />
      </div>
      <h1 className="text-3xl font-bold font-display tracking-wider text-white mb-2">
        Cash<span className="text-primary">In</span>Out
      </h1>
      <p className="text-gray-400 text-sm text-center mb-12">
        Крипто-кошелёк для повседневных платежей
      </p>

      {/* Login methods */}
      <div className="w-full space-y-3">
        <button
          onClick={onLogin}
          className="w-full py-4 rounded-2xl bg-[#0088cc] text-white font-medium flex items-center justify-center gap-3 hover:opacity-90 transition"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
          </svg>
          Войти через Telegram
        </button>

        <button className="w-full py-4 rounded-2xl bg-surface border border-border text-white font-medium flex items-center justify-center gap-3 hover:border-primary/30 transition">
          <Icon name="email" className="text-xl" />
          Войти по Email
        </button>
      </div>

      {/* Footer */}
      <p className="text-gray-600 text-xs text-center mt-8 leading-relaxed">
        Нажимая «Войти», вы принимаете<br/>
        <span className="text-gray-400 underline">Условия использования</span> и{' '}
        <span className="text-gray-400 underline">Политику конфиденциальности</span>
      </p>
    </div>
  )
}
