import { Button } from "@/components/ui/button";
import productivityZen from "@/assets/productivity-zen.png";

const CHECKOUT_URL = "https://go.hotmart.com/V102956133O";

const techniques = [
  { label: "Regla de los 5 Minutos:", desc: "Cómo engañar al cerebro para empezar." },
  { label: "Chunking Estratégico:", desc: "Divide y vencerás la parálisis." },
  { label: "Dopamine Detox:", desc: "Recupera tu capacidad de enfoque profundo." },
];

const AuthoritySection = () => (
  <section className="border-t border-border py-16 sm:py-24">
    <div className="container px-4 sm:px-6">
      <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
        <div className="w-full max-w-xs flex-shrink-0 md:max-w-sm">
          <img
            src={productivityZen}
            alt="Persona en estado de enfoque y productividad"
            className="w-full rounded-3xl"
            loading="lazy"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <span className="mb-2 block text-xs font-bold text-primary sm:text-sm">NEUROCIENCIA APLICADA</span>
          <h2 className="mb-4 text-2xl text-foreground sm:mb-6 sm:text-3xl md:text-4xl">
            No eres perezoso, tu cerebro está programado para protegerte.
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground sm:mb-8 sm:text-base">
            La procrastinación es una batalla entre tu <strong className="text-foreground">Sistema Límbico</strong> (placer inmediato) y tu <strong className="text-foreground">Corteza Prefrontal</strong> (metas a largo plazo). Nuestro método te enseña a inclinar la balanza a tu favor.
          </p>
          <ul className="mb-8 space-y-3 text-left sm:mb-10">
            {techniques.map((t) => (
              <li key={t.label} className="text-sm text-muted-foreground sm:text-base">
                <span className="text-primary">✅</span>{" "}
                <strong className="text-foreground">{t.label}</strong> {t.desc}
              </li>
            ))}
          </ul>
          <a href={CHECKOUT_URL} className="inline-block w-full sm:w-auto">
            <Button variant="cta" size="xl" className="w-full text-base sm:w-auto sm:text-lg">
              APRENDER EL MÉTODO AHORA
            </Button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default AuthoritySection;
