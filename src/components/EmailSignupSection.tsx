import React, { useState } from 'react';
import { Mail, CheckCircle, Loader } from 'lucide-react';

export const EmailSignupSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [courseType, setCourseType] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setError('');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Here you would typically send the data to your backend
    console.log('Signup data:', { email, courseType });
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="signup" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 rounded-3xl p-12">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                🎉 You're on the list!
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                We'll reach out when we open access. Get ready to transform your teaching!
              </p>
              <p className="text-sm text-gray-500">
                Check your email for a confirmation message.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="signup" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 mb-6">
              <Mail className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-blue-600 font-medium">Join the Waitlist</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Be First to Know
            </h3>
            <p className="text-xl text-gray-600">
              Get early access to SheetLearn and start creating courses that matter.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-3xl p-8">
            <div className="space-y-6">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>

              {/* Course Type Input */}
              <div>
                <label htmlFor="courseType" className="block text-sm font-medium text-gray-700 mb-2">
                  What kind of courses do you create? (optional)
                </label>
                <input
                  id="courseType"
                  type="text"
                  value={courseType}
                  onChange={(e) => setCourseType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="e.g., Language learning, Professional development..."
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none transition-all duration-300 flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <Loader className="animate-spin h-5 w-5 mr-2" />
                    Joining...
                  </>
                ) : (
                  'Notify Me'
                )}
              </button>

              {/* Privacy Note */}
              <p className="text-sm text-gray-500 text-center">
                We'll only contact you about SheetLearn. No spam, ever.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};