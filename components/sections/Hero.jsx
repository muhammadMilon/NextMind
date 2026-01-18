'use client';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-dark-900">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-primary-900/40 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-float"></div>
        <div className="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] bg-accent-900/40 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[45rem] h-[45rem] bg-primary-800/30 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 backdrop-blur-sm">
            <span className="text-primary-300 text-sm font-semibold tracking-wide uppercase">
              🚀 Launch Your Tech Career Today
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-8 text-white leading-tight tracking-tight">
            Welcome to <br />
            <span className="text-gradient bg-gradient-to-r from-primary-400 via-primary-200 to-accent-300 bg-clip-text text-transparent">
              NextMind Academy
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-dark-200 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            Master <span className="text-white font-medium">modern web development</span> with our comprehensive courses in MERN Stack,
            AI Integration, and cutting-edge technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
            <a
              href="#features"
              className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-primary-600/40 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              Explore Features
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/5 backdrop-blur-md text-white border border-white/10 rounded-full font-semibold text-lg hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              Get in Touch
            </a>
          </div>

          {/* Tech Stack Pills */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-dark-400 text-sm uppercase tracking-widest mb-6 font-semibold">Powering the next generation with</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-90">
               {[
                 { name: 'React', icon: '⚛️' },
                 { name: 'Next.js', icon: '▲' },
                 { name: 'Tailwind', icon: '🎨' },
                 { name: 'AI Agents', icon: '🤖' },
                 { name: 'Node.js', icon: '🟩' }
               ].map((tech) => (
                  <div key={tech.name} className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default">
                    <span className="text-lg">{tech.icon}</span>
                    <span className="text-dark-200 font-medium">{tech.name}</span>
                  </div>
               ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
      </div>
    </section>
  );
}
