import React from 'react';

export const ProblemSolutionSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Problem Statement */}
          <div className="mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Tired of expensive course platforms that take forever to set up?
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Frustrated with bloated learning tools when all you want is to share your knowledge?
            </p>
          </div>

          {/* Solution */}
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-8 md:p-12">
            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              SheetLearn transforms your Google Sheet into a sleek, 
              student-ready course website — in minutes.
            </h4>
            <p className="text-lg text-gray-600 leading-relaxed">
              No complex setups, no monthly fees until you're ready to scale, 
              and no learning curve. Just the simplicity you've been looking for.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};