import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { ProblemSolutionSection } from './components/ProblemSolutionSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { BenefitsSection } from './components/BenefitsSection';
import { EarlyPreviewSection } from './components/EarlyPreviewSection';
import { FAQSection } from './components/FAQSection';
import { EmailSignupSection } from './components/EmailSignupSection';
import { Footer } from './components/Footer';
import { BoltBadge } from './components/BoltBadge';
import { CookieBanner } from './components/CookieBanner';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { CookiePolicyPage } from './components/CookiePolicyPage';

type Page = 'home' | 'privacy' | 'cookies';

function App() {
  const [page, setPage] = useState<Page>('home');

  const scrollToSignup = () => {
    const signupSection = document.getElementById('signup');
    if (signupSection) {
      signupSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (page === 'privacy') {
    return <PrivacyPolicyPage onBack={() => setPage('home')} />;
  }

  if (page === 'cookies') {
    return <CookiePolicyPage onBack={() => setPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <HeroSection onGetEarlyAccess={scrollToSignup} />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <BenefitsSection />
      <EarlyPreviewSection onJoinBeta={scrollToSignup} />
      <FAQSection />
      <EmailSignupSection />
      <Footer
        onPrivacyPolicy={() => setPage('privacy')}
        onCookiePolicy={() => setPage('cookies')}
      />
      <BoltBadge />
      <CookieBanner onViewCookiePolicy={() => setPage('cookies')} />
    </div>
  );
}

export default App;
