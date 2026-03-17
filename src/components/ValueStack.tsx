import { Button } from "@/components/ui/button";
import ebookMockup from "@/assets/ebook-mockup.png";

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
  <section className="rounded-t-[2rem] bg-foreground py-16 text-background sm:rounded-t-[2.5rem] sm:py-24">
    <div className="container px-4 sm:px-6">
      <h2 className="mb-8 text-center text-2xl sm:mb-10 sm:text-3xl md:text-5xl">
        Tu Arsenal Anti-Procrastinación
      </h2>

      <div className="mx-auto flex max-w-3xl flex-col items-center gap-10 md:flex-row md:items-start md:gap-12">
        <div className="w-40 flex-shrink-0 sm:w-52">
          <img
            src={ebookMockup}
            alt="Mockup del ebook Cómo Vencer la Procrastinación"
            className="w-full drop-shadow-2xl"
            loading="lazy"
          />
        </div>

        <div className="w-full flex-1">
          {bonuses.map((b) => (
            <div key={b.name} className="flex items-center justify-between border-b border-background/10 py-3 sm:py-4">
              <span className="text-sm font-bold sm:text-base">{b.name}</span>
              <span className="ml-4 flex-shrink-0 text-sm text-muted-foreground line-through">{b.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-lg rounded-2xl bg-background/5 p-8 text-center sm:mt-16 sm:rounded-3xl sm:p-12 md:p-16">
        <span className="text-lg text-muted-foreground line-through sm:text-xl">Valor Total: $385.00</span>
        <div className="my-2 text-5xl font-extrabold tracking-tight sm:my-3 sm:text-7xl md:text-8xl">$9.99</div>
        <p className="mb-6 text-sm text-muted-foreground sm:mb-8 sm:text-base">Acceso inmediato y de por vida.</p>
        <a href={CHECKOUT_URL} className="inline-block w-full">
          <Button variant="cta" size="xl" className="w-full max-w-md text-base sm:text-lg">
            SÍ, QUIERO ACCESO INMEDIATO
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default ValueStack;
