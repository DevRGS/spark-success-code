const testimonials = [
  {
    name: "María F.",
    text: "Llevaba 3 años queriendo escribir mi libro. Con el método de los 5 minutos y el chunking, lo terminé en 2 meses. Increíble.",
  },
  {
    name: "Carlos P.",
    text: "Mi mayor problema eran las redes sociales. El toolkit anti-distracciones me devolvió mi carrera. He duplicado mi facturación.",
  },
  {
    name: "Jorge L.",
    text: "Pensé que era pereza crónica. Entender mi cerebro cambió todo. Ahora mi lista de tareas termina vacía cada día.",
  },
  {
    name: "Lucía M.",
    text: "El desafío de 30 días me cambió la vida. Pasé de sentir culpa constante a tener una rutina matinal que me llena de energía.",
  },
];

const TestimonialsSection = () => (
  <section className="py-16 sm:py-24">
    <div className="container px-4 sm:px-6">
      <h2 className="mb-10 text-center text-2xl text-foreground sm:mb-16 sm:text-3xl md:text-5xl">Resultados Reales</h2>
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-2xl border border-border bg-card p-6 sm:rounded-3xl sm:p-8">
            <div className="mb-2 text-sm text-accent sm:mb-3">★★★★★</div>
            <p className="mb-3 text-sm text-foreground sm:mb-4 sm:text-base">"{t.text}"</p>
            <strong className="text-sm text-primary">{t.name}</strong>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
