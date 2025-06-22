import React from 'react';
import { Check, Zap, Wrench, RefreshCw, DollarSign, Award } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: Zap,
      text: "Launch 10x faster than traditional platforms",
      color: "text-yellow-600"
    },
    {
      icon: Wrench,
      text: "No tech skills or complex tools required",
      color: "text-blue-600"
    },
    {
      icon: RefreshCw,
      text: "Update content in your sheet anytime",
      color: "text-teal-600"
    },
    {
      icon: DollarSign,
      text: "Free until you're ready to scale",
      color: "text-green-600"
    },
    {
      icon: Award,
      text: "Student tracking and completion certificates included",
      color: "text-violet-600"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Educators Choose SheetLearn
            </h3>
            <p className="text-xl text-gray-600">
              Everything you need to create and manage professional courses
            </p>
          </div>

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group flex items-center p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex-shrink-0 mr-6">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className={`h-6 w-6 ${benefit.color}`} />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <p className="text-lg font-semibold text-gray-900">
                      {benefit.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};