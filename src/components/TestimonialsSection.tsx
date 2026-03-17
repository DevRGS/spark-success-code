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
  <section className="py-24">
    <div className="container">
      <h2 className="mb-16 text-center text-3xl text-foreground md:text-5xl">Resultados Reales</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-3xl border border-border bg-card p-8">
            <div className="mb-3 text-accent">★★★★★</div>
            <p className="mb-4 text-foreground">"{t.text}"</p>
            <strong className="text-primary">{t.name}</strong>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
