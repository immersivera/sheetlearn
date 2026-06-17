import React, { useEffect, useState } from 'react';
import { Shield, X } from 'lucide-react';

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

const STORAGE_KEY = 'sheetlearn_cookie_consent';

interface CookieBannerProps {
  onViewCookiePolicy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onViewCookiePolicy }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    window.dataLayer?.push({ event: 'cookie_consent_accepted', cookie_consent: 'accepted' });
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined');
    window.dataLayer?.push({ event: 'cookie_consent_declined', cookie_consent: 'declined' });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-gray-700 shadow-2xl">
      <div className="container mx-auto px-4 py-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Shield className="h-5 w-5 text-blue-400 mt-0.5 shrink-0" />
            <p className="text-sm text-gray-300 leading-relaxed">
              We use cookies to improve your experience and analyze site traffic. By clicking{' '}
              <strong className="text-white">Accept</strong>, you consent to our use of cookies.{' '}
              <button
                onClick={onViewCookiePolicy}
                className="text-blue-400 hover:text-blue-300 underline transition-colors"
              >
                Cookie Policy
              </button>
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={decline}
              className="px-4 py-2 text-sm text-gray-400 hover:text-white border border-gray-600 hover:border-gray-400 rounded-lg transition-colors"
            >
              Decline
            </button>
            <button
              onClick={accept}
              className="px-5 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
            >
              Accept
            </button>
            <button
              onClick={decline}
              className="text-gray-500 hover:text-gray-300 transition-colors"
              aria-label="Dismiss"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
