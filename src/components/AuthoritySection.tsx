import { Button } from "@/components/ui/button";

const CHECKOUT_URL = "https://go.hotmart.com/V102956133O";

const techniques = [
  { label: "Regla de los 5 Minutos:", desc: "Cómo engañar al cerebro para empezar." },
  { label: "Chunking Estratégico:", desc: "Divide y vencerás la parálisis." },
  { label: "Dopamine Detox:", desc: "Recupera tu capacidad de enfoque profundo." },
];

const AuthoritySection = () => (
  <section className="border-t border-border py-24">
    <div className="container max-w-3xl text-center">
      <span className="mb-2 block text-sm font-bold text-primary">NEUROCIENCIA APLICADA</span>
      <h2 className="mb-6 text-3xl text-foreground md:text-5xl">
        No eres perezoso, tu cerebro está programado para protegerte.
      </h2>
      <p className="mb-8 text-lg text-muted-foreground">
        La procrastinación es una batalla entre tu <strong className="text-foreground">Sistema Límbico</strong> (placer inmediato) y tu <strong className="text-foreground">Corteza Prefrontal</strong> (metas a largo plazo). Nuestro método te enseña a inclinar la balanza a tu favor usando técnicas como:
      </p>
      <ul className="mb-10 inline-block space-y-3 text-left">
        {techniques.map((t) => (
          <li key={t.label} className="text-muted-foreground">
            <span className="text-primary">✅</span>{" "}
            <strong className="text-foreground">{t.label}</strong> {t.desc}
          </li>
        ))}
      </ul>
      <div>
        <a href={CHECKOUT_URL}>
          <Button variant="cta" size="xl" className="w-full max-w-md">
            APRENDER EL MÉTODO AHORA
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default AuthoritySection;
