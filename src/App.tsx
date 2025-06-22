import React from 'react';
import { HeroSection } from './components/HeroSection';
import { ProblemSolutionSection } from './components/ProblemSolutionSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { BenefitsSection } from './components/BenefitsSection';
import { EarlyPreviewSection } from './components/EarlyPreviewSection';
import { FAQSection } from './components/FAQSection';
import { EmailSignupSection } from './components/EmailSignupSection';
import { Footer } from './components/Footer';

function App() {
  const scrollToSignup = () => {
    const signupSection = document.getElementById('signup');
    if (signupSection) {
      signupSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection onGetEarlyAccess={scrollToSignup} />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <BenefitsSection />
      <EarlyPreviewSection onJoinBeta={scrollToSignup} />
      <FAQSection />
      <EmailSignupSection />
      <Footer />
    </div>
  );
}

export default App;