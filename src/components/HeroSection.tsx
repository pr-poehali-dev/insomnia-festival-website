import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-emerald-900/10">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl float-animation"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl float-animation"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/3 w-40 h-40 bg-blue-500/10 rounded-full blur-xl float-animation"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Main heading */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Бессонница
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-medium">
            Ночной фестиваль искусств и музыки
          </p>
        </div>

        {/* Date and location */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 text-slate-400">
          <div className="flex items-center gap-2">
            <Icon name="Calendar" size={20} />
            <span>17-21 июля 2025</span>
          </div>
          <div className="hidden md:block w-1 h-1 bg-slate-500 rounded-full"></div>
          <div className="flex items-center gap-2">
            <Icon name="MapPin" size={20} />
            <span>Калужская область</span>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: "Music", label: "Живая музыка", color: "purple" },
            { icon: "Zap", label: "Танцы", color: "blue" },
            { icon: "Film", label: "Кино", color: "emerald" },
            { icon: "Palette", label: "Арт", color: "purple" },
          ].map((item, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
            >
              <div
                className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r from-${item.color}-500/20 to-${item.color}-600/20 flex items-center justify-center`}
              >
                <Icon
                  name={item.icon as any}
                  size={24}
                  className={`text-${item.color}-400`}
                />
              </div>
              <p className="text-sm font-medium text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="space-y-4">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-emerald-500 transition-all duration-300 glow-animation">
            Купить билеты
          </button>
          <p className="text-sm text-slate-400">
            От 2500 ₽ • Осталось 234 билета
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
