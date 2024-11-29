import React from 'react';
import Hero from './Hero';
import AboutMyThrift from './AboutMyThrift';
import ComingSoonSection from './ComingSoonSection';
import FAQs from './FAQS';
import Countdown from './Countdown';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <AboutMyThrift />
      <ComingSoonSection />
      <FAQs />
      <Countdown />
      <Footer />
    </div>
  );
};

export default LandingPage;
