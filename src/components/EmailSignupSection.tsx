import React, { useState } from 'react';
import { Mail, CheckCircle, ExternalLink } from 'lucide-react';

export const EmailSignupSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [courseType, setCourseType] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');

    // Create mailto link with pre-filled content
    const subject = encodeURIComponent('SheetLearn Waitlist - Early Access Request');
    const body = encodeURIComponent(
      `Hi SheetLearn Team,

I'd like to join the waitlist for early access to SheetLearn.

Email: ${email}
Course Type: ${courseType || 'Not specified'}

I'm excited to transform my Google Sheets into professional online courses!

Best regards,
${email.split('@')[0]}`
    );
    
    const mailtoLink = `mailto:sheetlearn@immersivera.dev?subject=${subject}&body=${body}`;
    
    // Open mailto link
    window.location.href = mailtoLink;
    
    // Show success state
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="signup" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 rounded-3xl p-12 transform">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                📧 Email Client Opened!
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Your email client should have opened with a pre-filled message. 
                Just hit send to join our waitlist!
              </p>
              <div className="bg-white rounded-xl p-4 border border-green-200">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Didn't open automatically?</strong>
                </p>
                <button
                  onClick={() => {
                    const subject = encodeURIComponent('SheetLearn Waitlist - Early Access Request');
                    const body = encodeURIComponent(
                      `Hi SheetLearn Team,

I'd like to join the waitlist for early access to SheetLearn.

Email: ${email}
Course Type: ${courseType || 'Not specified'}

I'm excited to transform my Google Sheets into professional online courses!

Best regards,
${email.split('@')[0]}`
                    );
                    window.location.href = `mailto:sheetlearn@immersivera.dev?subject=${subject}&body=${body}`;
                  }}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Click here to open email
                </button>
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 text-gray-500 hover:text-gray-700 text-sm underline transition-colors duration-300"
              >
                ← Go back to form
              </button>
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

          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="space-y-6">
              {/* Email Input */}
              <div className="transform transition-all duration-300 hover:scale-105">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                  placeholder="your@email.com"
                  required
                />
              </div>

              {/* Course Type Input */}
              <div className="transform transition-all duration-300 hover:scale-105">
                <label htmlFor="courseType" className="block text-sm font-medium text-gray-700 mb-2">
                  What kind of courses do you create? (optional)
                </label>
                <input
                  id="courseType"
                  type="text"
                  value={courseType}
                  onChange={(e) => setCourseType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                  placeholder="e.g., Language learning, Professional development..."
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg border border-red-200 animate-shake">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
              >
                <Mail className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Send Email to Join
              </button>

              {/* Privacy Note */}
              <div className="text-center">
                <p className="text-sm text-gray-500">
                  This will open your email client with a pre-filled message to{' '}
                  <span className="font-medium text-blue-600">sheetlearn@immersivera.dev</span>
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  We'll only contact you about SheetLearn. No spam, ever.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};