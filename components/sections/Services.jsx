export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Full-stack web applications using MERN stack with modern frameworks and best practices.',
      features: ['React & Next.js', 'Node.js & Express', 'MongoDB', 'RESTful APIs'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'AI Integration',
      description: 'Implementing Agentic AI systems and workflow automation for intelligent applications.',
      features: ['Agentic AI', 'Workflow Systems', 'AI Agents', 'Automation'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'UI/UX Design',
      description: 'Creating beautiful, responsive interfaces with modern design principles and accessibility.',
      features: ['Responsive Design', 'Tailwind CSS', 'Animations', 'Accessibility'],
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            What I <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Comprehensive skills in modern web development and AI integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {service.title}
                </h3>
                <p className="text-dark-600 dark:text-dark-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-dark-700 dark:text-dark-200">
                      <svg
                        className="w-5 h-5 mr-3 text-primary-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
