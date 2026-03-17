import { Button } from "@/components/ui/button";
import heroBrain from "@/assets/hero-brain.png";

const CHECKOUT_URL = "https://go.hotmart.com/V102956133O";

const HeroSection = () => (
  <section className="px-4 pb-12 pt-8 sm:px-6 md:pb-24 md:pt-28">
    <div className="container">
      <div className="flex flex-col items-center md:flex-row md:gap-16">
        {/* Image first on mobile */}
        <div className="mb-6 w-48 flex-shrink-0 sm:w-56 md:order-2 md:mb-0 md:w-full md:max-w-sm">
          <img
            src={heroBrain}
            alt="Cerebro con conexiones neuronales representando claridad mental"
            className="w-full rounded-3xl"
            loading="eager"
          />
        </div>

        <div className="flex-1 text-center md:order-1 md:text-left">
          <span className="mb-3 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-bold text-primary">
            MÉTODO CIENTÍFICO PROBADO
          </span>
          <h1 className="mb-3 text-2xl text-gradient-hero sm:text-3xl md:text-5xl lg:text-6xl">
            Transforma tu mente, tus hábitos y tu productividad.
          </h1>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            El sistema exacto para hackear tu dopamina, vencer la procrastinación y recuperar 4 horas de tu día — sin fuerza de voluntad.
          </p>
          <a href={CHECKOUT_URL} className="inline-block w-full">
            <Button variant="cta" size="xl" className="h-14 w-full text-base sm:h-16 md:w-auto md:text-lg">
              ¡QUIERO ESTO POR SOLO $9.99!
            </Button>
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            🔒 Compra segura · Acceso inmediato · Garantía 7 días
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
