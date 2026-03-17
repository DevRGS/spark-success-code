import { Button } from "@/components/ui/button";

const CHECKOUT_URL = "https://go.hotmart.com/V102956133O";

const FinalCta = () => (
  <section className="px-4 pb-16 sm:px-6 sm:pb-24">
    <div className="container">
      <div className="rounded-2xl bg-card px-6 py-14 text-center sm:rounded-[2.5rem] sm:px-12 sm:py-20">
        <h2 className="mb-4 text-2xl text-foreground sm:mb-6 sm:text-3xl md:text-5xl">
          ¿Seguirás dejando tu vida para mañana?
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-sm text-muted-foreground sm:mb-10 sm:text-lg">
          El ciclo de la culpa termina hoy. Toma el control por menos de lo que cuesta un café.
        </p>
        <a href={CHECKOUT_URL} className="inline-block w-full sm:w-auto">
          <Button variant="cta" size="xl" className="w-full text-base sm:w-auto sm:text-lg">
            ROMPER ESTE CICLO HOY MISMO
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default FinalCta;
