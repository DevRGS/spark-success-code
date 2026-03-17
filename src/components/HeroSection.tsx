import { Button } from "@/components/ui/button";
import heroBrain from "@/assets/hero-brain.png";

const CHECKOUT_URL = "https://go.hotmart.com/V102956133O";

const HeroSection = () => (
  <section className="px-4 pb-16 pt-20 sm:px-6 md:pb-24 md:pt-28">
    <div className="container">
      <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
        <div className="flex-1 text-center md:text-left">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-bold text-primary sm:mb-6 sm:px-5 sm:text-sm">
            MÉTODO CIENTÍFICO PROBADO
          </span>
          <h1 className="mb-4 text-3xl text-gradient-hero sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            Transforma tu mente, tus hábitos y tu productividad.
          </h1>
          <p className="mb-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Descubre el método respaldado por la ciencia para vencer la procrastinación, recuperar tu enfoque y lograr tus metas sin depender de la motivación.
          </p>
          <a href={CHECKOUT_URL} className="inline-block w-full sm:w-auto">
            <Button variant="cta" size="xl" className="w-full text-base sm:w-auto sm:text-lg">
              ¡QUIERO ESTO POR SOLO $9.99!
            </Button>
          </a>
        </div>
        <div className="w-full max-w-xs flex-shrink-0 md:max-w-sm">
          <img
            src={heroBrain}
            alt="Cerebro con conexiones neuronales representando claridad mental"
            className="w-full rounded-3xl"
            loading="eager"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
