'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function CourseDetailsPage() {
  const params = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCourseDetails();
  }, [params.id]);

  const fetchCourseDetails = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/courses?id=${params.id}`);
      
      if (!response.ok) {
        throw new Error('Course not found');
      }
      
      const data = await response.json();
      setCourse(data);
    } catch (error) {
      console.error('Error fetching course:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-white dark:bg-dark-900">
        <Navbar />
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-600"></div>
        </div>
      </main>
    );
  }

  if (error || !course) {
    return (
      <main className="min-h-screen bg-white dark:bg-dark-900">
        <Navbar />
        <div className="flex flex-col justify-center items-center min-h-screen px-4">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Course Not Found</h1>
          <p className="text-xl text-dark-600 dark:text-dark-400 mb-8">
            The course you're looking for doesn't exist.
          </p>
          <Link
            href="/courses"
            className="px-8 py-3 gradient-primary text-white rounded-full font-semibold hover:shadow-lg transition-all"
          >
            Back to Courses
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/courses"
            className="inline-flex items-center text-dark-500 hover:text-primary-600 mb-12 transition-all group font-semibold"
          >
            <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span> Back to Academy
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Course Image - Squared */}
            <div className="lg:col-span-5">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-primary-500/10 border border-dark-100 group">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Course Basic Info */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-bold uppercase tracking-wider">
                  {course.category}
                </div>
                <h1 className="text-4xl md:text-6xl font-black font-display text-dark-900 leading-[1.1] tracking-tight">
                  {course.name}
                </h1>
                <p className="text-lg text-dark-600 leading-relaxed font-light max-w-2xl text-left">
                  {course.description}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-dark-100">
                <div className="space-y-1">
                  <div className="text-dark-400 text-[10px] font-bold uppercase tracking-widest">Rating</div>
                  <div className="flex items-center text-dark-900 font-bold">
                    <span className="text-primary-500 mr-1.5">★</span>
                    {course.rating}
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-dark-400 text-[10px] font-bold uppercase tracking-widest">Students</div>
                  <div className="text-dark-900 font-bold">{course.students.toLocaleString()}+</div>
                </div>
                <div className="space-y-1">
                  <div className="text-dark-400 text-[10px] font-bold uppercase tracking-widest">Duration</div>
                  <div className="text-dark-900 font-bold">{course.duration}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-dark-400 text-[10px] font-bold uppercase tracking-widest">Level</div>
                  <div className="text-dark-900 font-bold">{course.level}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                 <button className="px-10 py-4 gradient-primary text-white rounded-xl font-bold text-lg shadow-xl shadow-primary-500/20 hover:shadow-2xl hover:-translate-y-1 transition-all">
                    Enroll for {course.price}
                 </button>
                 <button className="px-10 py-4 bg-white text-dark-800 border-2 border-dark-100 rounded-xl font-bold text-lg hover:bg-dark-50 transition-all">
                    Download Syllabus
                 </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 bg-dark-50/50 border-t border-dark-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left Content Area */}
            <div className="lg:col-span-2 space-y-16">
              {/* Learning Objectives */}
              <div className="bg-white rounded-3xl p-10 shadow-sm border border-dark-100">
                <h3 className="text-2xl font-bold font-display text-dark-900 mb-8 border-l-4 border-primary-600 pl-4">
                  Learning Objectives
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 mr-4 mt-0.5 flex-shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-dark-700 leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curriculum */}
              <div>
                <h3 className="text-2xl font-bold font-display text-dark-900 mb-8 border-l-4 border-primary-600 pl-4">
                  Course Curriculum
                </h3>
                <div className="space-y-4">
                  {course.syllabus.map((item, index) => (
                    <div
                      key={index}
                      className="group bg-white p-6 rounded-2xl border border-dark-100 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-500/5 transition-all flex items-center gap-6"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-dark-50 flex items-center justify-center text-dark-900 font-black text-xl group-hover:bg-primary-600 group-hover:text-white transition-all shadow-inner">
                        {item.week}
                      </div>
                      <div className="text-left">
                        <div className="text-[10px] font-bold text-primary-600 uppercase tracking-widest mb-1">Module {item.week}</div>
                        <h4 className="text-lg font-bold text-dark-900 tracking-tight">{item.topic}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-1 space-y-10">
              {/* Instructor Card */}
              <div className="bg-white rounded-3xl p-8 border border-dark-100 shadow-sm overflow-hidden relative text-left">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary-50 rounded-bl-[4rem] -mr-8 -mt-8 opacity-50"></div>
                <h3 className="text-xl font-bold font-display text-dark-900 mb-6 relative">Instructor</h3>
                <div className="flex items-center gap-5 mb-6 relative">
                  <div className="w-16 h-16 rounded-2xl bg-primary-600 flex items-center justify-center text-white text-3xl font-black shadow-lg shadow-primary-500/30">
                    {course.instructor.charAt(0)}
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-dark-900 text-lg">{course.instructor}</h4>
                    <p className="text-primary-600 text-xs font-bold uppercase tracking-wider">Course Lead</p>
                  </div>
                </div>
                <p className="text-dark-600 text-sm leading-relaxed text-left">
                  Leading expert in {course.category.toLowerCase()} with over 10 years of industrial experience. Focused on practical, project-based learning.
                </p>
              </div>

              {/* Guarantees */}
              <div className="bg-white rounded-3xl p-8 border border-dark-100 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-full -mr-16 -mt-16 opacity-50 group-hover:scale-110 transition-transform"></div>
                <h3 className="text-xl font-bold font-display text-dark-900 mb-6 relative">Course Benefits</h3>
                <div className="space-y-4 relative">
                  {[
                    'Full Lifetime Access',
                    'Industry Certificate',
                    'Direct Mentorship',
                    'Real-world Projects',
                    'Community Slack'
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center text-sm group/item">
                      <span className="w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center mr-3 group-hover/item:bg-primary-600 group-hover/item:shadow-lg group-hover/item:shadow-primary-500/30 transition-all">
                        <svg className="w-3.5 h-3.5 text-primary-600 group-hover/item:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-dark-600 font-medium group-hover/item:text-dark-900 transition-colors">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
