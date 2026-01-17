export default function Services() {
  const services = [
    {
      title: 'Full Stack Development',
      description: 'Master the MERN stack (MongoDB, Express, React, Node.js) and build scalable web applications from scratch.',
      features: ['React 19 & Next.js 15', 'Node.js & Express Architecture', 'Database Design (MongoDB/SQL)', 'Secure Authentication'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'AI Engineering',
      description: 'Learn to integrate Large Language Models (LLMs) and build intelligent agents affecting real-world workflows.',
      features: ['LangChain & OpenAI API', 'RAG Pipelines', 'Autonomous Agents', 'Python & JavaScript Interop'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Product Design',
      description: 'Bridge the gap between design and code. Learn UI/UX principles to create intuitive and accessible digital products.',
      features: ['Figma to Code Workflow', 'Modern Design Systems', 'Accessibility (WCAG)', 'Animation & Micro-interactions'],
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-dark-900 border-t border-dark-100 dark:border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Our Learning <span className="text-gradient">Tracks</span>
          </h2>
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-2xl mx-auto leading-relaxed">
            Specialized pathways designed to take you from beginner to industry-ready expert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 hover:border-primary-500/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-dark-600 dark:text-dark-300 mb-8 leading-relaxed h-20">
                  {service.description}
                </p>
                
                {/* Features List */}
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-dark-700 dark:text-dark-200 text-sm font-medium">
                      <svg
                        className="w-5 h-5 mr-3 text-primary-600 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-dark-100 dark:border-dark-700">
                  <span className="inline-flex items-center text-primary-600 font-bold hover:text-primary-700 transition-colors cursor-pointer group-hover:translate-x-2 duration-300">
                    View Syllabus
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
