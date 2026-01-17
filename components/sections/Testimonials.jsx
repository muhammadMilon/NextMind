'use client';

import { useState } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Learning Milestone',
      role: 'MERN Stack Mastery',
      content: 'Successfully built full-stack applications using MongoDB, Express, React, and Node.js with modern best practices.',
      avatar: '🎓',
    },
    {
      name: 'Achievement',
      role: 'Next.js Expertise',
      content: 'Mastered Next.js 15 App Router, Server Components, and advanced optimization techniques for production-ready applications.',
      avatar: '🚀',
    },
    {
      name: 'Progress',
      role: 'AI Integration',
      content: 'Explored and implemented Agentic AI systems and workflow automation, integrating intelligent features into web applications.',
      avatar: '🤖',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-20 bg-dark-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Learning <span className="text-gradient">Milestones</span>
          </h2>
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Key achievements and progress in my development journey.
          </p>
        </div>

        {/* Desktop View - Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-dark-200 dark:border-dark-700 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-3xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground">{testimonial.name}</h4>
                  <p className="text-dark-600 dark:text-dark-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-dark-700 dark:text-dark-300 leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden">
          <div className="bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-lg border border-dark-200 dark:border-dark-700">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-3xl mr-4">
                {testimonials[activeIndex].avatar}
              </div>
              <div>
                <h4 className="font-bold text-lg text-foreground">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-dark-600 dark:text-dark-400 text-sm">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>
            <p className="text-dark-700 dark:text-dark-300 leading-relaxed mb-6">
              "{testimonials[activeIndex].content}"
            </p>
            
            {/* Dots Navigation */}
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex
                      ? 'bg-primary-600 w-8'
                      : 'bg-dark-300 dark:bg-dark-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
