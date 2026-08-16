import { useState } from 'react';
import './index.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Partners } from './components/Partners';
import { Recommendations } from './components/Recommendations';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { AIChatBot } from './components/AIChatBot';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [pendingPrompt, setPendingPrompt] = useState<string | null>(null);

  const handleOpenChat = (initialPrompt?: string) => {
    setIsChatOpen(true);
    if (initialPrompt) {
      setPendingPrompt(initialPrompt);
    }
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  const handleClearPendingPrompt = () => {
    setPendingPrompt(null);
  };

  return (
    <div className="min-h-screen bg-[#F9FAF9] text-slate-800 flex flex-col selection:bg-emerald-500 selection:text-white font-sans relative">
      {/* Fixed Sticky Glass Navbar */}
      <Navbar onOpenChat={handleOpenChat} />

      {/* Main Landing Page Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenChat={handleOpenChat} />

        {/* Local Healthy Food Partners / Places */}
        <Partners onOpenChat={handleOpenChat} />

        {/* Food Recommendation Section */}
        <Recommendations onOpenChat={handleOpenChat} />

        {/* Services / Features Section */}
        <Services onOpenChat={handleOpenChat} />

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ Section */}
        <FAQ onOpenChat={handleOpenChat} />
      </main>

      {/* Footer */}
      <Footer onOpenChat={handleOpenChat} />

      {/* Cute Floating AI Chatbot in Bottom Right */}
      <AIChatBot
        isOpen={isChatOpen}
        onOpen={() => setIsChatOpen(true)}
        onClose={handleCloseChat}
        pendingPrompt={pendingPrompt}
        onClearPendingPrompt={handleClearPendingPrompt}
      />
    </div>
  );
}

export default App;
