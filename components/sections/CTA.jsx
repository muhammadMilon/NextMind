
export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 gradient-primary opacity-90"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:py-24 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6 animate-fade-in">
              Start Your Learning Journey
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto animate-slide-up">
              Join thousands of students mastering modern web development. 
              Get access to premium courses, expert mentorship, and a supportive community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
              <a
                href="/courses"
                className="px-8 py-4 bg-white text-primary-700 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
              >
                Enroll Now
              </a>
              <a
                href="#services"
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 rounded-full font-semibold text-lg hover:bg-white/30 hover:scale-105 transition-all"
              >
                View Curriculum
              </a>
            </div>

            {/* Additional Info */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Free to explore</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Modern tech stack</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
