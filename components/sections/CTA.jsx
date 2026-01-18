
export default function CTA() {
  return (
    <section id="cta" className="py-24 bg-dark-50 dark:bg-dark-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-primary-900 border border-primary-800 shadow-2xl">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-600/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          {/* Content */}
          <div className="relative z-10 px-8 py-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6 animate-fade-in tracking-tight">
              Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-accent-200">Learning Journey</span>
            </h2>
            <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto animate-slide-up leading-relaxed">
              Join thousands of students mastering modern web development. 
              Get access to premium courses, expert mentorship, and a supportive community.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-scale-in">
              <a
                href="/courses"
                className="px-10 py-4 bg-white text-primary-900 rounded-full font-bold text-lg hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.7)] hover:scale-105 transition-all w-full sm:w-auto"
              >
                Enroll Now
              </a>
              <a
                href="#services"
                className="px-10 py-4 bg-transparent text-white border-2 border-primary-400/30 hover:bg-primary-800/50 rounded-full font-semibold text-lg transition-all w-full sm:w-auto"
              >
                View Curriculum
              </a>
            </div>

            {/* Additional Info */}
            <div className="mt-12 pt-8 border-t border-primary-800 flex flex-wrap justify-center gap-x-8 gap-y-4 text-primary-200/80 text-sm font-medium uppercase tracking-widest">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Free to explore</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
