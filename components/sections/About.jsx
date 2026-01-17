export default function About() {
  return (
    <section id="about" className="py-20 bg-dark-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              About This <span className="text-gradient">Project</span>
            </h2>
            <p className="text-lg text-dark-700 dark:text-dark-300 mb-6 leading-relaxed">
              This application is a comprehensive demonstration of modern full-stack web development,
              showcasing my learning journey in the MERN Stack, Agentic AI, and AI Workflow systems.
            </p>
            <p className="text-lg text-dark-700 dark:text-dark-300 mb-6 leading-relaxed">
              Built with Next.js 15, this project implements best practices in web development,
              including server-side rendering, API routes, authentication, and responsive design.
            </p>
            <p className="text-lg text-dark-700 dark:text-dark-300 mb-8 leading-relaxed">
              The goal is to create a portfolio piece that demonstrates both technical proficiency
              and an understanding of modern web architecture and AI integration.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white font-bold mr-4">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Full-Stack Development</h4>
                  <p className="text-dark-600 dark:text-dark-400">
                    Complete MERN stack implementation with modern tooling
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white font-bold mr-4">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">AI Integration</h4>
                  <p className="text-dark-600 dark:text-dark-400">
                    Exploring Agentic AI and workflow automation systems
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white font-bold mr-4">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Modern Design</h4>
                  <p className="text-dark-600 dark:text-dark-400">
                    Premium UI/UX with attention to detail and user experience
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-primary-500 via-accent-500 to-primary-700 p-12 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-6">💻</div>
                  <h3 className="text-3xl font-bold mb-4">Learning Journey</h3>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-3xl font-bold">MERN</div>
                      <div className="text-sm">Stack</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-3xl font-bold">AI</div>
                      <div className="text-sm">Integration</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-3xl font-bold">Next.js</div>
                      <div className="text-sm">15/16</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-3xl font-bold">Full</div>
                      <div className="text-sm">Stack</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-400 rounded-full opacity-50 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-400 rounded-full opacity-50 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
