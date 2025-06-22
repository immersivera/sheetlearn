import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

interface HeroSectionProps {
  onGetEarlyAccess: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onGetEarlyAccess }) => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center mb-8">
            <div className="bg-blue-600 p-3 rounded-2xl mr-3">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">SheetLearn</h1>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Turn Your{' '}
            <span className="text-blue-600 relative">
              Google Sheets
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-200 rounded-full transform scale-x-0 animate-pulse"></div>
            </span>
            <br />
            Into Professional Online Courses
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Create engaging learning platforms in minutes, not months. No coding required — 
            just your spreadsheet and our magic.
          </p>

          {/* CTA Button */}
          <button
            onClick={onGetEarlyAccess}
            className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
          >
            Get Early Access
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          {/* Trust Note */}
          <p className="mt-4 text-gray-500 text-sm">
            Built for real educators. No tech headaches.
          </p>

          {/* Visual Elements */}
          <div className="mt-16 relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-500">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-blue-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-3 bg-teal-200 rounded w-2/3"></div>
                  <div className="h-3 bg-violet-200 rounded w-1/3"></div>
                </div>
              </div>
              <div className="text-center mt-4">
                <p className="text-sm text-gray-600">Your course, ready in minutes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};