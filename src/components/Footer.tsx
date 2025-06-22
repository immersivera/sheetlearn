import React from 'react';
import { Mail, Twitter, Linkedin, Github, BookOpen } from 'lucide-react';

export const Footer: React.FC = () => {
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
                <p className="text-gray-400">Coming Summer 2025</p>
              </div>
            </div>

            {/* Social */}
            <div>
              <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-gray-800 hover:bg-gray-700 p-3 rounded-xl transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 hover:bg-gray-700 p-3 rounded-xl transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 hover:bg-gray-700 p-3 rounded-xl transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Updates coming soon
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 SheetLearn. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};