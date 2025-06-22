import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Tickets = () => {
  const ticketTypes = [
    {
      name: "Early Bird",
      price: "2500",
      originalPrice: "3500",
      description: "Билет по специальной цене",
      features: [
        "Доступ на все площадки",
        "Приоритетный вход",
        "Скидка 10% в баре",
        "Сувенирный набор",
      ],
      available: 45,
      total: 100,
      popular: false,
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      name: "Standard",
      price: "3500",
      originalPrice: null,
      description: "Стандартный билет на фестиваль",
      features: ["Доступ на все площадки", "Обычный вход", "Скидка 5% в баре"],
      available: 189,
      total: 500,
      popular: true,
      gradient: "from-purple-500 to-blue-500",
    },
    {
      name: "VIP",
      price: "7500",
      originalPrice: null,
      description: "Премиум билет с дополнительными привилегиями",
      features: [
        "Доступ на все площадки",
        "VIP-зона у главной сцены",
        "Отдельный бар и туалеты",
        "Эксклюзивный мерч",
        "Meet & Greet с артистами",
      ],
      available: 23,
      total: 50,
      popular: false,
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Билеты
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
              Выберите подходящий билет и станьте частью ночного фестиваля
              искусств
            </p>

            {/* Quick info */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-slate-400">
              <div className="flex items-center gap-2">
                <Icon name="Calendar" size={20} />
                <span>15-16 июля 2025</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-slate-500 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={20} />
                <span>19:00 - 06:00</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-slate-500 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Icon name="Users" size={20} />
                <span>Осталось 257 билетов</span>
              </div>
            </div>
          </div>

          {/* Tickets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {ticketTypes.map((ticket, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  ticket.popular
                    ? "border-purple-500/50 bg-gradient-to-br from-purple-900/20 to-slate-800/50"
                    : "border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50"
                }`}
              >
                {ticket.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full">
                      Популярный
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {ticket.name}
                  </h3>
                  <p className="text-slate-400 mb-4">{ticket.description}</p>

                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-4xl font-bold text-white">
                      {ticket.price} ₽
                    </span>
                    {ticket.originalPrice && (
                      <span className="text-lg text-slate-500 line-through">
                        {ticket.originalPrice} ₽
                      </span>
                    )}
                  </div>

                  {/* Availability */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-slate-400 mb-2">
                      <span>
                        Осталось {ticket.available} из {ticket.total}
                      </span>
                      <span>
                        {Math.round((ticket.available / ticket.total) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${ticket.gradient}`}
                        style={{
                          width: `${(ticket.available / ticket.total) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {ticket.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-3 text-slate-300"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-emerald-400 flex-shrink-0"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Buy Button */}
                <button
                  className={`w-full py-4 font-semibold rounded-xl transition-all duration-300 ${
                    ticket.popular
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500 shadow-lg hover:shadow-purple-500/25"
                      : "bg-slate-700 text-white hover:bg-slate-600"
                  }`}
                  disabled={ticket.available === 0}
                >
                  {ticket.available > 0 ? "Купить билет" : "Распродан"}
                </button>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Icon name="Shield" size={20} className="text-emerald-400" />
                Гарантии
              </h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Возврат билетов до 1 июля</li>
                <li>• Страхование от отмены мероприятия</li>
                <li>• Официальные билеты с защитой от подделок</li>
                <li>• Техническая поддержка 24/7</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Icon name="Info" size={20} className="text-blue-400" />
                Важная информация
              </h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Возраст 18+, требуется документ</li>
                <li>• Запрещен вход с едой и напитками</li>
                <li>• Досмотр на входе</li>
                <li>• Парковка платная (500₽/сутки)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
