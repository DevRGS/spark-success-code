const problems = [
  {
    icon: "⏳",
    title: "El Ladrón de Tiempo",
    description: "No es solo una tarea pendiente. Es la ansiedad que sientes a las 11 PM sabiendo que no avanzaste nada. Es el dinero que dejas de ganar.",
  },
  {
    icon: "🧠",
    title: "Parálisis por Análisis",
    description: "El perfeccionismo es procrastinación disfrazada. Te quedas atrapado planeando mientras otros ejecutan y obtienen resultados.",
  },
  {
    icon: "🔋",
    title: "Agotamiento Mental",
    description: "Procrastinar cansa más que trabajar. Tu cerebro gasta energía manteniendo activa la culpa de lo que no has hecho.",
  },
];

const ProblemSection = () => (
  <section className="py-16 sm:py-24">
    <div className="container px-4 sm:px-6">
      <h2 className="mb-10 text-center text-2xl text-foreground sm:mb-16 sm:text-3xl md:text-5xl">
        El costo invisible de "dejarlo para mañana"
      </h2>
      <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
        {problems.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/20 sm:rounded-3xl sm:p-10"
          >
            <span className="mb-4 block text-3xl">{p.icon}</span>
            <h3 className="mb-3 text-xl text-foreground sm:mb-4 sm:text-2xl">{p.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
