import React, { useState } from 'react';
import { Sparkles, Send, Check, Heart } from 'lucide-react';

interface FooterProps {
  onOpenChat: (initialPrompt?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenChat }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3500);
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-12 border-t border-emerald-950 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-600/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-teal-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800 text-left">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <span className="text-xl">🥗</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-white font-display">
                  Plate<span className="text-emerald-400">Pal</span>
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-900 text-emerald-300 border border-emerald-700">
                  <Sparkles className="w-2.5 h-2.5 mr-0.5 text-emerald-400" />
                  AI Agent
                </span>
              </div>
            </a>
            
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Your 24/7 intelligent nutritional companion. Generating personalized healthy meals, curbing cravings, and connecting with certified organic local partners.
            </p>

            {/* Newsletter signup */}
            <div className="pt-2">
              <span className="text-xs font-bold text-slate-200 block mb-2">Get Weekly AI Healthy Recipes & Partner Deals:</span>
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 bg-slate-800/90 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors flex items-center gap-1 shrink-0"
                >
                  {subscribed ? <Check className="w-4 h-4 text-emerald-200" /> : <Send className="w-3.5 h-3.5" />}
                  <span>{subscribed ? 'Joined!' : 'Join'}</span>
                </button>
              </form>
              {subscribed && (
                <p className="text-[11px] text-emerald-400 mt-1.5 font-medium">
                  🎉 You are now subscribed to PlatePal weekly recipes!
                </p>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-200">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#partners" className="hover:text-emerald-400 transition-colors">Healthy Partners</a></li>
              <li><a href="#recommendations" className="hover:text-emerald-400 transition-colors">AI Recommendations</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Features & Services</a></li>
              <li><a href="#testimonials" className="hover:text-emerald-400 transition-colors">Success Stories</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* AI Prompts */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-200">AI Dietitian Prompts</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onOpenChat("Suggest a high-protein breakfast for muscle growth")} className="hover:text-emerald-400 transition-colors text-left">
                  💪 High-Protein Breakfast
                </button>
              </li>
              <li>
                <button onClick={() => onOpenChat("Give me a 1500 kcal daily keto meal plan")} className="hover:text-emerald-400 transition-colors text-left">
                  🥑 1500 kcal Keto Plan
                </button>
              </li>
              <li>
                <button onClick={() => onOpenChat("What are low-glycemic snacks for steady blood sugar?")} className="hover:text-emerald-400 transition-colors text-left">
                  🩸 Low-Glycemic Snacks
                </button>
              </li>
              <li>
                <button onClick={() => onOpenChat("How to calculate my ideal daily water and electrolyte intake?")} className="hover:text-emerald-400 transition-colors text-left">
                  💧 Hydration Calculator
                </button>
              </li>
              <li>
                <button onClick={() => onOpenChat("Find clean vegan restaurants in my area")} className="hover:text-emerald-400 transition-colors text-left">
                  🌱 Vegan Places Near Me
                </button>
              </li>
            </ul>
          </div>

          {/* Partner & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-200">Partners & Trust</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onOpenChat("How can local restaurants partner with PlatePal?")} className="hover:text-emerald-400 transition-colors text-left">
                  Apply as Food Partner
                </button>
              </li>
              <li><span className="text-slate-500">Clinical Nutrition Board</span></li>
              <li><span className="text-slate-500">Privacy Policy (HIPAA Compliant)</span></li>
              <li><span className="text-slate-500">Terms of Service</span></li>
              <li><span className="text-slate-500">Cookie Preferences</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} PlatePal AI Inc. Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>for healthy living.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 text-[11px] border border-slate-700">
              🟢 AI Engine v2.4 Operational
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
