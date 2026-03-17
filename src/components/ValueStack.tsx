import { Button } from "@/components/ui/button";

const CHECKOUT_URL = "https://go.hotmart.com/V102956133O";

const bonuses = [
  { name: 'Ebook: Cómo Vencer la Procrastinación', value: '$97.00' },
  { name: 'Bonus 1: Guía de Enfoque Instantáneo', value: '$27.00' },
  { name: 'Bonus 2: Toolkit Anti-Distracciones', value: '$37.00' },
  { name: 'Bonus 3: Rutina Matinal Anti-Procrastinación', value: '$47.00' },
  { name: 'Bonus 4: Mindset de Acción Inmediata', value: '$27.00' },
  { name: 'Bonus 5: El Método de los 2 Minutos', value: '$17.00' },
  { name: 'Bonus 6: Maestría Emocional y Foco', value: '$47.00' },
  { name: 'Bonus 7: Desafío 30 Días en Acción', value: '$87.00' },
];

const ValueStack = () => (
  <section className="rounded-t-[2.5rem] bg-foreground py-24 text-background">
    <div className="container">
      <h2 className="mb-10 text-center text-3xl md:text-5xl">
        Tu Arsenal Anti-Procrastinación
      </h2>
      <div className="mx-auto max-w-2xl">
        {bonuses.map((b) => (
          <div key={b.name} className="flex items-center justify-between border-b border-background/10 py-5">
            <span className="text-lg font-bold">{b.name}</span>
            <span className="text-muted-foreground line-through">{b.value}</span>
          </div>
        ))}
        <div className="mt-16 rounded-3xl bg-background/5 p-12 text-center md:p-16">
          <span className="text-xl text-muted-foreground line-through">Valor Total: $385.00</span>
          <div className="my-3 text-7xl font-extrabold tracking-tight md:text-8xl">$9.99</div>
          <p className="mb-8 text-muted-foreground">Acceso inmediato y de por vida.</p>
          <a href={CHECKOUT_URL} className="inline-block w-full max-w-md">
            <Button variant="cta" size="xl" className="w-full">
              SÍ, QUIERO ACCESO INMEDIATO
            </Button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ValueStack;
