import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Bot, Sparkles } from 'lucide-react';
import { FAQ_ITEMS } from '../data/mockData';

interface FAQProps {
  onOpenChat: (initialPrompt?: string) => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenChat }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative bg-gradient-to-b from-transparent via-emerald-50/30 to-transparent">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100/90 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-600 mt-2">
            Everything you need to know about PlatePal’s AI dietitian, partner network, and meal customization.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 text-left">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-white/90 backdrop-blur-xl border-emerald-300 shadow-md shadow-emerald-500/5'
                    : 'bg-white/70 backdrop-blur-md border-emerald-100/80 hover:border-emerald-200 shadow-xs'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4.5 flex items-center justify-between gap-4 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 hidden sm:inline-block">
                      {item.category}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-slate-900">
                      {item.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-emerald-100 text-emerald-800 rotate-180' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80">
                    <p>{item.answer}</p>
                    <button
                      onClick={() => onOpenChat(`I have a follow-up question on: ${item.question}`)}
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                    >
                      <Bot className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Ask AI for more details</span>
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA for Unanswered Questions */}
        <div className="mt-12 text-center p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-900">Have a specific question not covered here?</h4>
            <p className="text-xs text-slate-500">Our 24/7 AI dietitian is ready to answer any dietary or recipe inquiry.</p>
          </div>
          <button
            onClick={() => onOpenChat()}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-xs font-bold shadow-md shadow-emerald-500/20 transition-all flex items-center gap-2 shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Chat with AI Now</span>
          </button>
        </div>

      </div>
    </section>
  );
};
