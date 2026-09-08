"use client";

import { useEffect, useRef, useState } from "react";
import { Wrench, Star, Calendar, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: Wrench,
    value: 500,
    suffix: "+",
    label: "Perangkat Diperbaiki",
    color: "text-tgs-red",
    bg: "bg-tgs-red/10",
  },
  {
    icon: Star,
    value: 4.8,
    suffix: "★",
    label: "Rating Pelanggan",
    color: "text-amber-500",
    bg: "bg-amber-50",
    isDecimal: true,
  },
  {
    icon: Calendar,
    value: 3,
    suffix: "+ Tahun",
    label: "Berpengalaman",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: ShieldCheck,
    value: 30,
    suffix: " Hari",
    label: "Garansi Service",
    color: "text-tgs-green",
    bg: "bg-tgs-green/10",
  },
];

function useCountUp(end: number, duration: number = 2000, isDecimal: boolean = false) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * end;
      
      setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration, isDecimal]);

  return { count, ref };
}

export default function StatsCounter() {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, var(--tgs-dark) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const { count, ref } = useCountUp(stat.value, 2000, stat.isDecimal);
            return (
              <div
                key={index}
                ref={ref}
                className="group text-center p-6 md:p-8 rounded-2xl bg-tgs-gray border border-transparent hover:border-tgs-gray-medium hover:shadow-lg transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 ${stat.bg} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-7 h-7 md:w-8 md:h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-tgs-dark mb-1">
                  {stat.isDecimal ? count.toFixed(1) : count}
                  <span className={`text-xl md:text-2xl ${stat.color} ml-0.5`}>{stat.suffix}</span>
                </div>
                <p className="text-xs md:text-sm text-tgs-gray-text font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
