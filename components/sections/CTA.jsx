import Link from 'next/link';

export default function CTA() {
  return (
    <section id="cta" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2rem] overflow-hidden bg-white border border-dark-100 shadow-2xl shadow-primary-500/5">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-primary-50/30"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          {/* Content */}
          <div className="relative z-10 px-8 py-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-dark-900 mb-6 animate-fade-in tracking-tight">
              Start Your <span className="text-gradient">Learning Journey</span>
            </h2>
            <p className="text-xl text-dark-600 mb-10 max-w-2xl mx-auto animate-slide-up leading-relaxed">
              Join thousands of students mastering modern web development. 
              Get access to premium courses, expert mentorship, and a global tech community.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-scale-in">
              <Link
                href="/courses"
                className="px-12 py-4 bg-primary-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-primary-500/25 hover:bg-primary-700 hover:scale-105 transition-all w-full sm:w-auto"
              >
                Enroll Now
              </Link>
              <a
                href="#services"
                className="px-12 py-4 bg-white text-dark-800 border-2 border-dark-100 hover:bg-dark-50 rounded-xl font-bold text-lg transition-all w-full sm:w-auto"
              >
                Explore Syllabus
              </a>
            </div>

            {/* Additional Info */}
            <div className="mt-14 pt-8 border-t border-dark-100 flex flex-wrap justify-center gap-x-10 gap-y-4 text-dark-400 text-xs font-bold uppercase tracking-[0.2em]">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span>No hidden fees</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span>7-day free trial</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span>Expert Mentorship</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
