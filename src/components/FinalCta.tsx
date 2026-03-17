import { Button } from "@/components/ui/button";

const CHECKOUT_URL = "https://go.hotmart.com/V102956133O";

const FinalCta = () => (
  <section className="pb-24">
    <div className="container">
      <div className="rounded-[2.5rem] bg-card px-8 py-20 text-center md:px-16">
        <h2 className="mb-6 text-3xl text-foreground md:text-5xl">
          ¿Seguirás dejando tu vida para mañana?
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground">
          El ciclo de la culpa termina hoy. Toma el control por menos de lo que cuesta un café.
        </p>
        <a href={CHECKOUT_URL} className="inline-block w-full max-w-md">
          <Button variant="cta" size="xl" className="w-full">
            ROMPER ESTE CICLO HOY MISMO
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default FinalCta;
