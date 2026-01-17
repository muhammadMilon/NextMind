'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AddCoursePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    duration: '',
    level: 'Beginner',
    instructor: '',
    category: 'Web Development',
    image: '',
  });
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setShowToast(true);
        setTimeout(() => {
          router.push('/courses');
          router.refresh();
        }, 2000);
      } else {
        alert('Failed to add course');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-12 bg-dark-50 dark:bg-dark-900 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-dark-800 rounded-3xl p-8 md:p-12 shadow-xl border border-dark-100 dark:border-dark-700 animate-slide-up">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold font-display text-gradient mb-4">
                Add New Course
              </h1>
              <p className="text-dark-600 dark:text-dark-400">
                Create a new course to share with the NextMind Academy community.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-dark-700 dark:text-dark-200">Course Name</label>
                  <input
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-dark-50 dark:bg-dark-900 border border-dark-200 dark:border-dark-700 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                    placeholder="e.g. Advanced React Patterns"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-dark-700 dark:text-dark-200">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-dark-50 dark:bg-dark-900 border border-dark-200 dark:border-dark-700 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                  >
                    <option>Web Development</option>
                    <option>Artificial Intelligence</option>
                    <option>Design</option>
                    <option>programming</option>
                    <option>DevOps</option>
                    <option>Data Science</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-dark-700 dark:text-dark-200">Description</label>
                <textarea
                  name="description"
                  required
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-dark-50 dark:bg-dark-900 border border-dark-200 dark:border-dark-700 focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none"
                  placeholder="Brief overview of what students will learn..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-dark-700 dark:text-dark-200">Price</label>
                  <input
                    name="price"
                    required
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-dark-50 dark:bg-dark-900 border border-dark-200 dark:border-dark-700 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                    placeholder="e.g. $99.99"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-dark-700 dark:text-dark-200">Duration</label>
                  <input
                    name="duration"
                    required
                    value={formData.duration}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-dark-50 dark:bg-dark-900 border border-dark-200 dark:border-dark-700 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                    placeholder="e.g. 8 weeks"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-dark-700 dark:text-dark-200">Instructor</label>
                  <input
                    name="instructor"
                    required
                    value={formData.instructor}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-dark-50 dark:bg-dark-900 border border-dark-200 dark:border-dark-700 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                    placeholder="Course Instructor Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-dark-700 dark:text-dark-200">Level</label>
                  <select
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-dark-50 dark:bg-dark-900 border border-dark-200 dark:border-dark-700 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                  >
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-dark-700 dark:text-dark-200">Image URL</label>
                <input
                  name="image"
                  required
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-dark-50 dark:bg-dark-900 border border-dark-200 dark:border-dark-700 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                  placeholder="https://..."
                />
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 gradient-primary text-white rounded-xl font-bold text-lg hover:shadow-xl hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Creating Course...' : 'Create Course'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center space-x-3 animate-slide-up z-50">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="font-bold">Course Created Successfully!</span>
        </div>
      )}
    </>
  );
}
