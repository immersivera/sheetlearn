import React, { useEffect } from 'react';
import { ArrowLeft, BookOpen } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onBack: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onBack }) => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-500 text-sm mb-10">Last updated: June 17, 2026</p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to SheetLearn ("we," "us," or "our"). We are committed to protecting your personal
              information and your right to privacy. This Privacy Policy explains how we collect, use, and
              share information about you when you visit our website at sheetlearn.app (the "Site") and
              sign up for early access to our service.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              If you have any questions or concerns about this policy, please contact us at{' '}
              <a href="mailto:sheetlearn@immersivera.dev" className="text-blue-600 hover:underline">
                sheetlearn@immersivera.dev
              </a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We collect information you provide directly to us and information collected automatically
              when you use the Site.
            </p>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Information You Provide</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>
                <strong>Email address</strong> — when you sign up for our early access waitlist or beta
                program.
              </li>
              <li>
                <strong>Communications</strong> — any messages or feedback you send us via email.
              </li>
            </ul>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Automatically Collected Information</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <strong>Usage data</strong> — pages visited, time spent on pages, referring URLs, and
                other browsing activity on the Site.
              </li>
              <li>
                <strong>Device information</strong> — browser type, operating system, and IP address.
              </li>
              <li>
                <strong>Cookies and similar technologies</strong> — see our{' '}
                <button
                  onClick={onBack}
                  className="text-blue-600 hover:underline"
                >
                  Cookie Policy
                </button>{' '}
                for details.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Send you updates about SheetLearn, including early access invitations and product news.</li>
              <li>Respond to your questions and provide customer support.</li>
              <li>Understand how visitors use the Site so we can improve it.</li>
              <li>Detect and prevent fraud or abuse.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. How We Share Your Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <strong>Service providers</strong> — third-party vendors who help us operate the Site
                and send emails (e.g., email delivery services, analytics providers). These parties
                process data only on our behalf and under our instructions.
              </li>
              <li>
                <strong>Legal requirements</strong> — if required by law, court order, or governmental
                authority.
              </li>
              <li>
                <strong>Business transfers</strong> — in connection with a merger, acquisition, or sale
                of assets, your information may be transferred as a business asset.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Data Retention</h2>
            <p className="text-gray-600 leading-relaxed">
              We retain your email address and associated information for as long as you remain on our
              waitlist or are an active user, and for a reasonable period afterward unless you request
              deletion. Analytics data may be retained in aggregated, anonymized form indefinitely.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Your Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Access the personal information we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your personal information.</li>
              <li>Withdraw consent to marketing emails at any time by unsubscribing.</li>
              <li>Lodge a complaint with your local data protection authority.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              To exercise any of these rights, email us at{' '}
              <a href="mailto:sheetlearn@immersivera.dev" className="text-blue-600 hover:underline">
                sheetlearn@immersivera.dev
              </a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Children's Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              The Site is not directed to children under the age of 13. We do not knowingly collect
              personal information from children. If you believe a child has provided us with personal
              information, please contact us and we will delete it promptly.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We take reasonable technical and organizational measures to protect your information against
              unauthorized access, loss, or misuse. However, no internet transmission is completely
              secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of material changes
              by updating the "Last updated" date at the top of this page. Continued use of the Site after
              changes constitutes your acceptance of the revised policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <address className="not-italic text-gray-600 mt-3 space-y-1">
              <p><strong>SheetLearn</strong></p>
              <p>
                Email:{' '}
                <a href="mailto:sheetlearn@immersivera.dev" className="text-blue-600 hover:underline">
                  sheetlearn@immersivera.dev
                </a>
              </p>
            </address>
          </section>
        </div>
      </main>
    </div>
  );
};
