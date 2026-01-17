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
      className="py-20 gradient-dark relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-white">
            Academy by the <span className="text-gradient bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Numbers</span>
          </h2>
          <p className="text-xl text-dark-200 max-w-2xl mx-auto">
            Real impact through quality education and community growth.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                {counts[index]}
                {stat.suffix}
              </div>
              <div className="text-dark-200 text-lg font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
