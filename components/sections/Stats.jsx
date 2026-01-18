'use client';

import { useEffect, useRef, useState } from 'react';

export default function Stats() {
  const stats = [
    { label: 'Active Students', value: 1500, suffix: '+', icon: '👨‍🎓' },
    { label: 'Courses Available', value: 25, suffix: '+', icon: '📚' },
    { label: 'Lessons Delivered', value: 5000, suffix: '+', icon: '🎥' },
    { label: 'Hours of Content', value: 250, suffix: '+', icon: '⏱️' },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      const duration = 2000;
      const steps = 60;
      const increment = stat.value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(current);
          return newCounts;
        });
      }, duration / steps);
    });
  };

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary-100 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-accent-100 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-dark-900">
            Academy by the <span className="text-gradient">Numbers</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-2xl mx-auto leading-relaxed">
            Real impact through quality education and community growth.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-dark-50 border border-dark-100/50 hover:bg-white hover:border-primary-200 transition-all duration-300 hover:scale-105 animate-scale-in group hover:shadow-xl hover:shadow-primary-500/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-dark-900 mb-2 tracking-tight">
                {counts[index]}
                <span className="text-primary-600">{stat.suffix}</span>
              </div>
              <div className="text-dark-500 text-[10px] uppercase font-bold tracking-[0.2em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
