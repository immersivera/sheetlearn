import React from 'react';
import { Mail, BookOpen } from 'lucide-react';

interface FooterProps {
  onPrivacyPolicy: () => void;
  onCookiePolicy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onPrivacyPolicy, onCookiePolicy }) => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 p-2 rounded-xl mr-3">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold">SheetLearn</h4>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Transforming Google Sheets into professional online courses. 
                Built for educators who value simplicity and effectiveness.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h5 className="text-lg font-semibold mb-4">Get in Touch</h5>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-400 mr-3" />
                  <a 
                    href="mailto:sheetlearn@immersivera.dev" 
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    sheetlearn@immersivera.dev
                  </a>
                </div>
                <p className="text-gray-400">Coming Soon</p>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 SheetLearn. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <button
                  onClick={onPrivacyPolicy}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={onCookiePolicy}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Cookie Policy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};