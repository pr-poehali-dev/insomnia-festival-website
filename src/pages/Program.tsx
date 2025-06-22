import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Program = () => {
  const schedule = [
    {
      day: "Пятница, 15 июля",
      events: [
        {
          time: "19:00",
          stage: "Main Stage",
          artist: "OGCVLT",
          type: "Techno",
          duration: "2 часа",
        },
        {
          time: "20:00",
          stage: "Dance Area",
          artist: "Hip-Hop баттлы",
          type: "Танцы",
          duration: "1.5 часа",
        },
        {
          time: "21:00",
          stage: "Cinema",
          artist: "Артхаус блок",
          type: "Кино",
          duration: "3 часа",
        },
        {
          time: "21:30",
          stage: "Main Stage",
          artist: "Cream Soda",
          type: "Pop",
          duration: "1.5 часа",
        },
        {
          time: "23:00",
          stage: "Art Zone",
          artist: "Digital Dreams",
          type: "Инсталляция",
          duration: "6 часов",
        },
        {
          time: "00:00",
          stage: "Main Stage",
          artist: "Nina Kraviz",
          type: "Techno",
          duration: "3 часа",
        },
      ],
    },
    {
      day: "Суббота, 16 июля",
      events: [
        {
          time: "18:00",
          stage: "Chill Zone",
          artist: "Downtempo Session",
          type: "Ambient",
          duration: "2 часа",
        },
        {
          time: "19:30",
          stage: "Dance Area",
          artist: "Contemporary Workshop",
          type: "Танцы",
          duration: "1 час",
        },
        {
          time: "20:00",
          stage: "Main Stage",
          artist: "Кровосток",
          type: "Rap",
          duration: "1.5 часа",
        },
        {
          time: "21:00",
          stage: "Cinema",
          artist: "Короткометражки",
          type: "Кино",
          duration: "2 часа",
        },
        {
          time: "22:00",
          stage: "Main Stage",
          artist: "Swanky Tunes",
          type: "House",
          duration: "2 часа",
        },
        {
          time: "01:00",
          stage: "Main Stage",
          artist: "Armin van Buuren",
          type: "Trance",
          duration: "3 часа",
        },
      ],
    },
  ];

  const stages = [
    {
      name: "Main Stage",
      description: "Главная сцена",
      capacity: "5000 человек",
      color: "purple",
    },
    {
      name: "Dance Area",
      description: "Танцевальная площадка",
      capacity: "1000 человек",
      color: "blue",
    },
    {
      name: "Cinema",
      description: "Кинотеатр под открытым небом",
      capacity: "300 человек",
      color: "emerald",
    },
    {
      name: "Art Zone",
      description: "Арт-пространство",
      capacity: "Свободный доступ",
      color: "orange",
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
              Программа
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Полное расписание выступлений, мастер-классов и показов на
              фестивале Бессонница
            </p>
          </div>

          {/* Stages Info */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">
              Площадки фестиваля
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stages.map((stage, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50"
                >
                  <h3
                    className={`text-lg font-semibold mb-2 text-${stage.color}-400`}
                  >
                    {stage.name}
                  </h3>
                  <p className="text-slate-300 mb-2">{stage.description}</p>
                  <p className="text-sm text-slate-400">{stage.capacity}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule */}
          <div className="space-y-12">
            {schedule.map((day, dayIndex) => (
              <div key={dayIndex}>
                <h2 className="text-3xl font-bold mb-8 text-purple-400">
                  {day.day}
                </h2>
                <div className="space-y-4">
                  {day.events.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className="flex flex-col md:flex-row items-start md:items-center gap-4 p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4 min-w-0 flex-1">
                        <div className="text-center min-w-16">
                          <div className="text-2xl font-bold text-emerald-400">
                            {event.time}
                          </div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-semibold text-white truncate">
                              {event.artist}
                            </h3>
                            <span className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full whitespace-nowrap">
                              {event.type}
                            </span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-slate-400">
                            <div className="flex items-center gap-1">
                              <Icon name="MapPin" size={14} />
                              <span>{event.stage}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Icon name="Clock" size={14} />
                              <span>{event.duration}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Download Program */}
          <div className="text-center mt-16">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-emerald-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
              <Icon name="Download" size={20} className="inline mr-2" />
              Скачать программу PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
