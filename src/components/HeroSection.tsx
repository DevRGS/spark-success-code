import { Button } from "@/components/ui/button";

const CHECKOUT_URL = "https://go.hotmart.com/V102956133O";

const HeroSection = () => (
  <section className="px-6 pb-20 pt-28 text-center md:pt-32">
    <div className="container">
      <span className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-5 py-1.5 text-sm font-bold text-primary">
        MÉTODO CIENTÍFICO PROBADO
      </span>
      <h1 className="mx-auto mb-6 max-w-4xl text-4xl text-gradient-hero md:text-6xl lg:text-7xl">
        Transforma tu mente, tus hábitos y tu productividad en solo 10 días.
      </h1>
      <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
        Descubre el método respaldado por la ciencia para vencer la procrastinación, recuperar tu enfoque y lograr tus metas sin depender de la motivación.
      </p>
      <a href={CHECKOUT_URL} className="inline-block w-full max-w-md">
        <Button variant="cta" size="xl" className="w-full">
          ¡QUIERO ESTA OFERTA POR SOLO $9.99!
        </Button>
      </a>
    </div>
  </section>
);

export default HeroSection;
