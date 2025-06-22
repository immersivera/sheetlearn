import React from 'react';
import { FileSpreadsheet, Link2, Rocket } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: FileSpreadsheet,
      title: "Create in Google Sheets",
      description: "Outline your modules, lessons, and quizzes in a simple spreadsheet format",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Link2,
      title: "Connect to SheetLearn",
      description: "One-click import and live preview of your course content",
      color: "bg-teal-100 text-teal-600"
    },
    {
      icon: Rocket,
      title: "Launch Your Course",
      description: "Track progress, issue certificates, and share your course link",
      color: "bg-violet-100 text-violet-600"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h3>
            <p className="text-xl text-gray-600">
              Three simple steps to transform your knowledge into a professional course
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 bg-gray-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="h-8 w-8" />
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300 transform -translate-y-1/2 z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};