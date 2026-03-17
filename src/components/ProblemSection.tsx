const problems = [
  {
    title: "El Ladrón de Tiempo",
    description: "No es solo una tarea pendiente. Es la ansiedad que sientes a las 11 PM sabiendo que no avanzaste nada. Es el dinero que dejas de ganar por no lanzar ese proyecto.",
  },
  {
    title: "Parálisis por Análisis",
    description: "El perfeccionismo es procrastinación disfrazada. Te quedas atrapado planeando mientras otros están ejecutando y obteniendo resultados.",
  },
  {
    title: "Agotamiento Mental",
    description: "Procrastinar cansa más que trabajar. Tu cerebro gasta energía manteniendo activa la culpa de lo que no has hecho.",
  },
];

const ProblemSection = () => (
  <section className="py-24">
    <div className="container">
      <h2 className="mb-16 text-center text-3xl text-foreground md:text-5xl">
        El costo invisible de "dejarlo para mañana"
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {problems.map((p) => (
          <div
            key={p.title}
            className="rounded-3xl border border-border bg-card p-10 transition-colors hover:border-foreground/20"
          >
            <h3 className="mb-4 text-2xl text-foreground">{p.title}</h3>
            <p className="text-muted-foreground">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
