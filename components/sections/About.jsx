export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-dark-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-8 text-foreground leading-tight">
              About <span className="text-gradient">NextMind Academy</span>
            </h2>
            <div className="space-y-6 text-lg text-dark-600 dark:text-dark-300">
              <p className="leading-relaxed">
                NextMind Academy is your premier destination for mastering modern web development
                and cutting-edge technologies. We offer comprehensive courses designed by industry
                experts to help you build real-world skills.
              </p>
              <p className="leading-relaxed">
                Our curriculum covers everything from MERN Stack development to AI integration,
                with hands-on projects and practical applications that prepare you for the
                challenges of modern software development.
              </p>
            </div>

            {/* Key Points */}
            <div className="mt-10 space-y-6">
              {[
                { title: 'Expert-Led Courses', desc: 'Learn from titans of the industry with years of real-world experience.' },
                { title: 'Hands-On Projects', desc: 'Build production-grade applications that scale.' },
                { title: 'Lifetime Access', desc: 'Unlimited updates and community support forever.' }
              ].map((point, idx) => (
                <div key={idx} className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold mr-5 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-foreground group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{point.title}</h4>
                    <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-scale-in lg:pl-10">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-900">
              <div className="aspect-[4/3] relative flex items-center justify-center bg-gradient-to-br from-dark-50 to-white dark:from-dark-800 dark:to-dark-900 overflow-hidden">
                 {/* Abstract BG */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
                 
                <div className="text-center relative z-10 px-8">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary-500 to-accent-600 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg shadow-primary-500/20 text-white">
                    🎓
                  </div>
                  <h3 className="text-3xl font-bold mb-8 text-foreground">NextMind Impact</h3>
                  
                  <div className="grid grid-cols-2 gap-4 w-full">
                    {[
                      { label: 'Students', value: '5K+' },
                      { label: 'Courses', value: '50+' },
                      { label: 'Avg Rating', value: '4.9' },
                      { label: 'Success', value: '98%' }
                    ].map((stat, i) => (
                      <div key={i} className="bg-white dark:bg-dark-800 p-4 rounded-xl shadow-sm border border-dark-100 dark:border-dark-700">
                        <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">{stat.value}</div>
                        <div className="text-sm text-dark-500 font-medium uppercase tracking-wide">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
