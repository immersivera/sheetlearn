import React, { useEffect } from 'react';
import { ArrowLeft, BookOpen } from 'lucide-react';

interface CookiePolicyPageProps {
  onBack: () => void;
}

export const CookiePolicyPage: React.FC<CookiePolicyPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 text-white py-6 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex items-center gap-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to SheetLearn
            </button>
            <div className="flex items-center gap-2 ml-auto">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold">SheetLearn</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-gray">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Cookie Policy</h1>
          <p className="text-gray-500 text-sm mb-10">Last updated: June 17, 2026</p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. What Are Cookies?</h2>
            <p className="text-gray-600 leading-relaxed">
              Cookies are small text files placed on your device by websites you visit. They are widely
              used to make websites work efficiently and to provide reporting information. Cookies set by
              the website owner (in this case, SheetLearn) are called "first-party cookies." Cookies set
              by parties other than the website owner are called "third-party cookies."
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              SheetLearn uses cookies and similar tracking technologies for the following purposes:
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Types of Cookies We Use</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse mt-4">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">Type</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">Purpose</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr>
                    <td className="p-3 border border-gray-200 font-medium">Strictly Necessary</td>
                    <td className="p-3 border border-gray-200">
                      Required for the Site to function. Includes storing your cookie consent preference
                      so we don't ask again.
                    </td>
                    <td className="p-3 border border-gray-200">Session / 1 year</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border border-gray-200 font-medium">Analytics</td>
                    <td className="p-3 border border-gray-200">
                      Help us understand how visitors interact with the Site — which pages are visited,
                      where visitors come from, and how long they stay.
                    </td>
                    <td className="p-3 border border-gray-200">Up to 2 years</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200 font-medium">Functional</td>
                    <td className="p-3 border border-gray-200">
                      Remember your preferences to improve your experience (e.g., language, region).
                    </td>
                    <td className="p-3 border border-gray-200">Up to 1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-500 text-sm mt-4">
              We currently do not use advertising or targeting cookies.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Local Storage</h2>
            <p className="text-gray-600 leading-relaxed">
              In addition to cookies, we use <code className="bg-gray-100 px-1 rounded text-sm">localStorage</code>{' '}
              in your browser to remember your cookie consent choice (accepted or declined). This data
              never leaves your device and is not transmitted to our servers.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Third-Party Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              We may use third-party analytics services (such as Google Analytics or similar tools) that
              place their own cookies on your device to help us analyze Site usage. These third parties
              have their own privacy policies governing their use of such information. We encourage you
              to review those policies.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Managing Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You can control cookies in several ways:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              <li>
                <strong>Cookie banner</strong> — use the Accept or Decline buttons on our cookie banner
                when you first visit the Site. You can reset your preference by clearing your browser's
                local storage.
              </li>
              <li>
                <strong>Browser settings</strong> — most browsers allow you to refuse cookies or delete
                existing cookies. See your browser's help documentation for instructions:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-500">
                  <li>Chrome: Settings → Privacy and security → Cookies</li>
                  <li>Firefox: Settings → Privacy & Security → Cookies and Site Data</li>
                  <li>Safari: Preferences → Privacy → Manage Website Data</li>
                  <li>Edge: Settings → Cookies and site permissions</li>
                </ul>
              </li>
              <li>
                <strong>Opt-out tools</strong> — for analytics cookies, you may opt out via your
                analytics provider's opt-out mechanism (e.g., Google Analytics Opt-out Browser
                Add-on).
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Please note that disabling certain cookies may affect the functionality of the Site.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Cookie Policy from time to time. Changes will be posted on this page
              with an updated "Last updated" date. We encourage you to review this page periodically.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have questions about our use of cookies, please contact us at{' '}
              <a href="mailto:sheetlearn@immersivera.dev" className="text-blue-600 hover:underline">
                sheetlearn@immersivera.dev
              </a>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};
