import Icon from '../../components/ui/Icon'
import { user, menuSections } from '../../data/mockData'

export default function MenuScreen() {
  return (
    <div className="screen-enter">
      <div className="px-6 py-4">
        <h1 className="text-2xl font-bold font-display">Профиль</h1>
      </div>

      <div className="px-6 pb-28 overflow-y-auto" style={{ height: 'calc(100vh - 80px)' }}>
        {/* Profile Card */}
        <div className="rounded-2xl bg-surface border border-border p-5">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-neon-purple/20 border border-primary/30 flex items-center justify-center text-2xl font-bold text-primary">
              {user.name.charAt(0)}
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold text-white">{user.name}</h2>
              <p className="text-sm text-gray-400">{user.email}</p>
              <p className="text-xs text-gray-500 font-mono mt-1">ID: {user.id}</p>
            </div>
          </div>

          {/* Stats row */}
          <div className="flex gap-3 mt-4">
            <div className="flex-1 rounded-xl bg-bg border border-border p-3 text-center">
              <p className="text-xs text-gray-500">Верификация</p>
              <div className="flex items-center justify-center gap-1 mt-1">
                <Icon name="verified_user" className="text-primary text-sm" />
                <span className="text-sm font-bold text-primary">Ур. {user.verificationLevel}</span>
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-bg border border-border p-3 text-center">
              <p className="text-xs text-gray-500">Рефералы</p>
              <p className="text-sm font-bold text-white mt-1">{user.referrals}</p>
            </div>
            <div className="flex-1 rounded-xl bg-bg border border-border p-3 text-center">
              <p className="text-xs text-gray-500">Заработано</p>
              <p className="text-sm font-bold text-green-400 mt-1">${user.referralEarned}</p>
            </div>
          </div>
        </div>

        {/* Menu Sections */}
        {menuSections.map((section, si) => (
          <div key={si} className="mt-6">
            {section.title && (
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-3 px-1">
                {section.title}
              </p>
            )}
            <div className="rounded-2xl bg-surface border border-border overflow-hidden">
              {section.items.map((item, ii) => (
                <button
                  key={item.id}
                  className={`w-full px-4 py-4 flex items-center gap-4 hover:bg-surface-2 transition text-left ${
                    ii < section.items.length - 1 ? 'border-b border-border' : ''
                  }`}
                >
                  <div className="w-9 h-9 rounded-xl bg-bg border border-border flex items-center justify-center">
                    <Icon name={item.icon} className="text-gray-400 text-xl" />
                  </div>
                  <span className="flex-1 text-sm font-medium text-white">{item.label}</span>
                  {item.badge && (
                    <span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-xs font-bold border border-primary/20">
                      {item.badge}
                    </span>
                  )}
                  <Icon name="chevron_right" className="text-gray-600 text-xl" />
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Logout */}
        <button className="w-full mt-6 py-4 rounded-2xl bg-surface border border-red-900/30 text-red-400 text-sm font-medium flex items-center justify-center gap-2 hover:bg-red-900/10 transition">
          <Icon name="logout" className="text-xl" />
          Выйти
        </button>
      </div>
    </div>
  )
}
