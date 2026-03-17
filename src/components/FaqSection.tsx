import { useState } from "react";

const faqs = [
  {
    q: "¿Qué recibo exactamente?",
    a: "Recibes el Ebook principal en formato digital (PDF) junto con los 7 bonus exclusivos mencionados. Acceso inmediato a tu correo tras el pago.",
  },
  {
    q: "¿Cuándo veré resultados?",
    a: "Muchos usuarios reportan un cambio de mentalidad en las primeras 48 horas al aplicar la Regla de los 5 Minutos.",
  },
  {
    q: "¿Es un pago único?",
    a: "Sí, un único pago de $9.99. Sin suscripciones ni cargos ocultos.",
  },
  {
    q: "¿Qué pasa si no me funciona?",
    a: "Tienes 7 días de garantía. Si no estás satisfecho, solicitas el reembolso y se te devuelve cada centavo.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24">
      <div className="container max-w-3xl">
        <h2 className="mb-10 text-center text-3xl text-foreground md:text-5xl">Preguntas Frecuentes</h2>
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="cursor-pointer border-b border-border py-6"
            onClick={() => setActiveIndex(activeIndex === i ? null : i)}
          >
            <div className="flex items-center justify-between text-lg font-bold text-foreground md:text-xl">
              {faq.q}
              <span className="ml-4 text-2xl text-muted-foreground transition-transform duration-200"
                style={{ transform: activeIndex === i ? "rotate(45deg)" : "none" }}
              >
                +
              </span>
            </div>
            <div
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: activeIndex === i ? "200px" : "0", marginTop: activeIndex === i ? "16px" : "0" }}
            >
              <p className="text-muted-foreground">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
