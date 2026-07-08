"use client";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 2, suffix: "+", label: "Product Lines" },
  { value: 2, suffix: " Certs", label: "ISO Certifications" },
  { value: 100, suffix: "%", label: "Sterile Assured" },
  { value: 1, suffix: "", label: "Manufacturing Unit, Vapi" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-4xl lg:text-5xl font-bold text-brand-orange tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
      <div className="container-padded py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-y-2 divide-x-0 lg:divide-y-0 lg:divide-x divide-gray-100 dark:divide-gray-800">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`flex flex-col items-center text-center px-6 py-4 ${i > 0 && i % 2 === 0 ? "border-t-2 border-gray-100 dark:border-gray-800 lg:border-t-0" : ""}`}>
              <CountUp target={stat.value} suffix={stat.suffix} />
              <span className="mt-2 text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
