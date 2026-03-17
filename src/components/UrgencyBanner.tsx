import { useState, useEffect } from "react";

const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev <= 0 ? 15 * 60 : prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="sticky top-0 z-50 border-b border-border bg-secondary/80 backdrop-blur-xl">
      <div className="container py-3 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent sm:text-sm">
          🔥 OFERTA ESPECIAL FINALIZA EN:{" "}
          <span className="font-extrabold tabular-nums">
            {minutes}:{seconds}
          </span>
        </span>
      </div>
    </div>
  );
};

export default UrgencyBanner;
