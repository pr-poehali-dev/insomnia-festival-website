import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Контакты
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Свяжитесь с нами или найдите всю необходимую информацию о
              фестивале
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Location */}
              <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50">
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Icon name="MapPin" size={24} className="text-emerald-400" />
                  Локация
                </h3>
                <div className="space-y-3 text-slate-300">
                  <p className="text-lg">Парк Сокольники</p>
                  <p>г. Москва, ул. Сокольнический Вал, 1, стр. 1</p>
                  <p>Основная сцена - Поляна №1</p>
                  <div className="pt-4">
                    <p className="text-emerald-400 font-medium mb-2">
                      Как добраться:
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li>🚇 м. Сокольники (5 мин пешком)</li>
                      <li>🚌 Автобусы: 140, 716, Т75</li>
                      <li>🚗 Парковка: 500₽/сутки</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50">
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Icon name="Phone" size={24} className="text-purple-400" />
                  Связь с нами
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" size={16} className="text-slate-400" />
                    <span className="text-slate-300">+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" size={16} className="text-slate-400" />
                    <span className="text-slate-300">
                      info@bessonnica-fest.ru
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon
                      name="MessageCircle"
                      size={16}
                      className="text-slate-400"
                    />
                    <span className="text-slate-300">
                      Telegram: @bessonnica_support
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon
                      name="Instagram"
                      size={16}
                      className="text-slate-400"
                    />
                    <span className="text-slate-300">@bessonnica.fest</span>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50">
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Icon name="Clock" size={24} className="text-blue-400" />
                  Время работы
                </h3>
                <div className="space-y-3 text-slate-300">
                  <div>
                    <p className="font-medium text-white">Фестиваль:</p>
                    <p>15 июля: 19:00 - 06:00</p>
                    <p>16 июля: 19:00 - 06:00</p>
                  </div>
                  <div>
                    <p className="font-medium text-white">Служба поддержки:</p>
                    <p>Пн-Пт: 10:00 - 20:00</p>
                    <p>Сб-Вс: 12:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-xl bg-slate-800/30 border border-slate-700/50">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                <Icon name="Send" size={24} className="text-emerald-400" />
                Напишите нам
              </h3>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    placeholder="Ваше имя"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Тема
                  </label>
                  <select className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500">
                    <option>Выберите тему</option>
                    <option>Вопросы по билетам</option>
                    <option>Программа фестиваля</option>
                    <option>Проблемы с оплатой</option>
                    <option>Прессa и медиа</option>
                    <option>Другое</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Сообщение
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 resize-none"
                    placeholder="Ваше сообщение..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-emerald-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                >
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>

          {/* Emergency Contacts */}
          <div className="mt-16 p-6 rounded-xl bg-red-900/20 border border-red-700/50">
            <h3 className="text-xl font-semibold text-red-400 mb-4 flex items-center gap-2">
              <Icon name="AlertTriangle" size={20} />
              Экстренные контакты
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-slate-300">
              <div>
                <p className="font-medium text-white mb-1">
                  Служба безопасности:
                </p>
                <p>+7 (495) 911-11-11</p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Медпункт:</p>
                <p>+7 (495) 922-22-22</p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Потерянные вещи:</p>
                <p>+7 (495) 933-33-33</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
