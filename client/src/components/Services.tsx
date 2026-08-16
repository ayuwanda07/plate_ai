import React from 'react';
import { Brain, Sparkles, MapPin, ShieldCheck, Activity, Bot, ArrowRight, Zap } from 'lucide-react';
import { SERVICES_LIST } from '../data/mockData';

interface ServicesProps {
  onOpenChat: (initialPrompt?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenChat }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-6 h-6 text-emerald-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-teal-600" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-emerald-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-teal-600" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-emerald-600" />;
      case 'Bot':
      default:
        return <Bot className="w-6 h-6 text-teal-600" />;
    }
  };

  const servicePrompts = [
    { title: 'Calculate my BMR & TDEE', prompt: 'Calculate my daily calorie and macro target based on my age, weight, and fitness routine.' },
    { title: 'Create 7-Day Clean Meal Plan', prompt: 'Generate a 7-day clean eating meal plan with a grocery shopping list.' },
    { title: 'Check Restaurant Menu Healthiness', prompt: 'How do I choose the healthiest low-carb meal when dining at Italian restaurants?' },
    { title: 'Allergy-Safe Snack Swaps', prompt: 'What are nut-free and dairy-free high-protein afternoon snacks for work?' },
  ];

  return (
    <section id="services" className="py-20 relative bg-gradient-to-b from-emerald-50/30 via-white to-emerald-50/20">
      
      {/* Background orbs */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-emerald-200/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-200/25 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-emerald-600" />
            <span>AI Superpowers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            How PlatePal Transforms Your Nutrition
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Powered by advanced multimodal models and clinical nutritional science, PlatePal automates your planning, shopping, cooking, and dining choices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-100/90 hover:border-emerald-300 p-7 shadow-card hover:shadow-glass-hover transition-all duration-300 flex flex-col justify-between text-left hover:-translate-y-1"
            >
              <div>
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 group-hover:bg-emerald-100/80 flex items-center justify-center transition-colors shadow-xs">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 group-hover:bg-emerald-100 group-hover:text-emerald-800 transition-colors">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2.5">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom Highlight & Trigger */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-700">
                  ✨ {service.highlight}
                </span>

                <button
                  onClick={() => onOpenChat(`Tell me more about how ${service.title} works in PlatePal`)}
                  className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-emerald-600 text-slate-400 group-hover:text-white flex items-center justify-center transition-all shadow-xs"
                  aria-label={`Ask about ${service.title}`}
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Shortcut Prompts Bar */}
        <div className="mt-14 p-6 rounded-3xl bg-emerald-900 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-800 via-teal-900 to-emerald-950 opacity-90" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-left space-y-1">
              <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <Bot className="w-4 h-4" />
                <span>Instant AI Dietitian Prompts</span>
              </div>
              <h4 className="text-xl font-bold font-display">Ready to test our nutrition model?</h4>
              <p className="text-xs text-emerald-200">Click any shortcut prompt below to launch live AI analysis in seconds.</p>
            </div>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
              {servicePrompts.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => onOpenChat(item.prompt)}
                  className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-semibold text-white transition-all backdrop-blur-md hover:scale-105 active:scale-95 flex items-center gap-1.5"
                >
                  <span>⚡</span>
                  <span>{item.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
