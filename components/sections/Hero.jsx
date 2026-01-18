'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-white"
    >
      {/* Animated Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-primary-100/50 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-float"></div>
        <div className="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] bg-accent-100/50 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[45rem] h-[45rem] bg-primary-50/50 rounded-full mix-blend-multiply filter blur-[120px] opacity-60 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.03]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary-200 bg-primary-50">
            <span className="text-primary-700 text-xs font-bold tracking-widest uppercase">
              🚀 Launch Your Tech Career Today
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-8 text-dark-900 leading-tight tracking-tight">
            Invest in your <br />
            <span className="text-gradient">
              Future Today.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-dark-600 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            Master <span className="text-primary-600 font-medium">modern web development</span> with our comprehensive courses in MERN Stack,
            AI Integration, and FAANG preparation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
            <Link
              href="/courses"
              className="px-10 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold text-lg shadow-xl shadow-primary-500/20 hover:shadow-primary-500/40 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              Start Learning
            </Link>
            <a
              href="#about"
              className="px-10 py-4 bg-white text-dark-900 border border-dark-200 rounded-xl font-semibold text-lg hover:bg-dark-50 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              About Us
            </a>
          </div>

          {/* Trust Batch */}
          <div className="pt-12 border-t border-dark-100">
            <p className="text-dark-400 text-[10px] uppercase tracking-[0.3em] mb-8 font-extrabold">Join 50,000+ Students from top companies</p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
               {['Google', 'Meta', 'Amazon', 'Netflix', 'Microsoft'].map((company) => (
                  <span key={company} className="text-xl font-black font-display text-dark-900 tracking-tighter italic">{company}</span>
               ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-[1px] h-10 bg-dark-900"></div>
      </div>
    </section>
  );
}
