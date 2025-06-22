import Icon from "@/components/ui/icon";

const FestivalHighlights = () => {
  const highlights = [
    {
      icon: "Music",
      title: "Живая музыка",
      description:
        "Электронная музыка от лучших диджеев России и мира на 3 сценах до самого утра",
      features: ["Main Stage", "Techno Area", "Chill Zone"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: "Zap",
      title: "Танцы",
      description:
        "Мастер-классы по современным танцам и свободные танцполы под открытым небом",
      features: ["Hip-Hop баттлы", "Контемпорари", "House Dance"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: "Film",
      title: "Кино",
      description:
        "Показы независимого кино и короткометражек в специальной киноплощадке",
      features: ["Артхаус", "Документальное", "Анимация"],
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: "Palette",
      title: "Арт-выставки",
      description:
        "Современные инсталляции, граффити и интерактивные арт-объекты",
      features: ["Digital Art", "Стрит-арт", "Перформансы"],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="py-24 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
            Программа фестиваля
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Две ночи непрерывного творчества и вдохновения в самом сердце Москвы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:transform hover:scale-105"
            >
              <div className="flex items-start gap-6">
                <div
                  className={`p-4 rounded-xl bg-gradient-to-r ${item.gradient} bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300`}
                >
                  <Icon
                    name={item.icon as any}
                    size={32}
                    className="text-white"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 text-sm bg-slate-700/50 text-slate-300 rounded-full border border-slate-600/50"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-emerald-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
            Подробная программа
          </button>
        </div>
      </div>
    </section>
  );
};

export default FestivalHighlights;
