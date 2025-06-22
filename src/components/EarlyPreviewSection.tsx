import React from 'react';
import { Users, ArrowRight } from 'lucide-react';

interface EarlyPreviewSectionProps {
  onJoinBeta: () => void;
}

export const EarlyPreviewSection: React.FC<EarlyPreviewSectionProps> = ({ onJoinBeta }) => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-teal-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 mb-6">
              <Users className="h-5 w-5 text-white mr-2" />
              <span className="text-white font-medium">Beta Program</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              🎓 Real Course Previews Coming Soon
            </h3>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              We're working with early educators to showcase real examples. 
              Want yours featured? Join the beta and be part of shaping SheetLearn.
            </p>
          </div>

          <button
            onClick={onJoinBeta}
            className="group bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
          >
            Join the Beta
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};