import React, { useState } from 'react';
import { Sparkles, ArrowRight, Flame, HeartPulse, CheckCircle2, ShieldCheck, Search, Zap } from 'lucide-react';
import { SHORTCUT_CHIPS } from '../data/mockData';

interface HeroProps {
  onOpenChat: (initialPrompt?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenChat }) => {
  const [activeChipTab, setActiveChipTab] = useState<string>('All');
  const [customSearchQuery, setCustomSearchQuery] = useState('');

  const categories = ['All', 'Protein', 'Keto', 'Fitness', 'Vegan', 'Heart-Health'];

  const filteredChips = activeChipTab === 'All'
    ? SHORTCUT_CHIPS
    : SHORTCUT_CHIPS.filter(c => c.category === activeChipTab);

  const handleCustomSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customSearchQuery.trim()) {
      onOpenChat(customSearchQuery.trim());
      setCustomSearchQuery('');
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows & Glassmorphism Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-emerald-200/40 via-teal-100/30 to-lime-100/30 blur-3xl rounded-full -z-10 pointer-events-none" />
      <div className="absolute top-40 -left-20 w-72 h-72 bg-emerald-300/20 blur-2xl rounded-full -z-10 pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-teal-200/25 blur-3xl rounded-full -z-10 pointer-events-none" />

      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b9810a_1px,transparent_1px),linear-gradient(to_bottom,#10b9810a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col text-left space-y-6">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50/90 border border-emerald-200/80 backdrop-blur-md shadow-sm w-fit">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span className="text-xs font-bold text-emerald-800 tracking-wide uppercase">
                Next-Gen Nutrition Intelligence
              </span>
              <span className="text-[11px] font-semibold text-emerald-600 bg-white px-2 py-0.5 rounded-full shadow-xs">
                Free Forever Tier
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] font-display">
              Healthy Eating, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500">
                Crafted by AI
              </span>{' '}
              for Your Body.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Meet <strong className="text-slate-900 font-semibold">PlatePal</strong>—your personal AI dietitian. Get tailored macro recommendations, turn pantry ingredients into gourmet meals in seconds, and order straight from verified local healthy food partners.
            </p>

            {/* Instant AI Prompt Input Box */}
            <form
              onSubmit={handleCustomSearchSubmit}
              className="relative flex items-center p-2 rounded-2xl bg-white/90 backdrop-blur-xl border border-emerald-200 shadow-lg shadow-emerald-600/10 focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-500/10 transition-all max-w-xl"
            >
              <div className="pl-3 pr-2 text-emerald-600">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={customSearchQuery}
                onChange={(e) => setCustomSearchQuery(e.target.value)}
                placeholder="Ask AI: e.g. High-protein dinner with salmon & broccoli..."
                className="w-full bg-transparent text-sm sm:text-base text-slate-800 placeholder-slate-400 focus:outline-none py-2"
              />
              <button
                type="submit"
                className="flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] shrink-0"
              >
                <span>Ask AI</span>
                <Sparkles className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* QUICK SHORTCUT CHIPS SECTION */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                  <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>Try Quick AI Shortcut Prompts:</span>
                </div>
                <div className="hidden sm:flex gap-1">
                  {categories.slice(0, 4).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveChipTab(cat)}
                      className={`text-[11px] px-2 py-0.5 rounded-md font-medium transition-colors ${
                        activeChipTab === cat
                          ? 'bg-emerald-100 text-emerald-800 font-bold'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {filteredChips.map((chip) => (
                  <button
                    key={chip.id}
                    onClick={() => onOpenChat(chip.query)}
                    className="group flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/80 hover:bg-emerald-50/90 border border-emerald-100 hover:border-emerald-300 backdrop-blur-md shadow-xs hover:shadow-sm text-xs font-semibold text-slate-700 hover:text-emerald-800 transition-all duration-200 hover:-translate-y-0.5 text-left"
                    title={`Click to ask: "${chip.query}"`}
                  >
                    <span className="text-base group-hover:scale-110 transition-transform">
                      {chip.icon}
                    </span>
                    <span className="truncate max-w-[200px] sm:max-w-[280px]">
                      {chip.label}
                    </span>
                    <Sparkles className="w-3 h-3 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity ml-auto shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            {/* Trust Badges & Metrics */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-6 sm:gap-8">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900">100% Clinical Logic</div>
                  <div className="text-[11px] text-slate-500">Dietitian Approved</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-teal-100 text-teal-700">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900">50,000+ Meals</div>
                  <div className="text-[11px] text-slate-500">Planned This Month</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-amber-100 text-amber-700">
                  <HeartPulse className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900">4.9 / 5 Rating</div>
                  <div className="text-[11px] text-slate-500">From 12,000+ Users</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Glassmorphism Preview Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient Background Gradient for Card */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-lime-400 rounded-3xl blur-xl opacity-30 animate-pulse-slow -z-10" />

            {/* Main Glass Card */}
            <div className="relative rounded-3xl bg-white/80 backdrop-blur-2xl border border-white/80 shadow-2xl p-6 sm:p-7 space-y-6 text-left">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=120&q=80"
                      alt="PlatePal Recommendation"
                      className="w-12 h-12 rounded-2xl object-cover ring-2 ring-emerald-400 shadow-md"
                    />
                    <span className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-bold text-slate-900">AI Daily Macro Target</h4>
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-700">
                        ACTIVE
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">Hyper-tailored to your metabolism</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-lg font-black text-emerald-600 font-display">98/100</span>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Health Score</p>
                </div>
              </div>

              {/* Macro Nutrients Progress Meters */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-emerald-50/80 rounded-2xl p-3 border border-emerald-100">
                  <div className="text-[11px] font-semibold text-emerald-800 mb-1">Protein</div>
                  <div className="text-base font-extrabold text-slate-900">145g</div>
                  <div className="w-full bg-emerald-200/70 h-1.5 rounded-full mt-1.5 overflow-hidden">
                    <div className="bg-emerald-600 h-full rounded-full w-[82%]" />
                  </div>
                  <div className="text-[9px] text-emerald-700 font-bold mt-1">82% Goal</div>
                </div>

                <div className="bg-teal-50/80 rounded-2xl p-3 border border-teal-100">
                  <div className="text-[11px] font-semibold text-teal-800 mb-1">Carbs</div>
                  <div className="text-base font-extrabold text-slate-900">110g</div>
                  <div className="w-full bg-teal-200/70 h-1.5 rounded-full mt-1.5 overflow-hidden">
                    <div className="bg-teal-600 h-full rounded-full w-[65%]" />
                  </div>
                  <div className="text-[9px] text-teal-700 font-bold mt-1">65% Clean</div>
                </div>

                <div className="bg-amber-50/80 rounded-2xl p-3 border border-amber-100">
                  <div className="text-[11px] font-semibold text-amber-800 mb-1">Good Fats</div>
                  <div className="text-base font-extrabold text-slate-900">52g</div>
                  <div className="w-full bg-amber-200/70 h-1.5 rounded-full mt-1.5 overflow-hidden">
                    <div className="bg-amber-600 h-full rounded-full w-[70%]" />
                  </div>
                  <div className="text-[9px] text-amber-700 font-bold mt-1">Avocado/EVOO</div>
                </div>
              </div>

              {/* Simulated AI Insight Dialogue Bubble */}
              <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-white p-4 border border-emerald-200/60 shadow-xs relative">
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-emerald-600/30 text-xs">
                    🥗
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-slate-900">PlatePal Dietitian AI</span>
                      <span className="text-[10px] text-emerald-600 font-semibold">• Just now</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      "I notice your workout was high-intensity today. I recommend <strong className="text-slate-800">Wild Salmon Quinoa Bowl</strong> to hit 42g protein with anti-inflammatory omega-3s."
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onOpenChat("Tell me more about the Wild Salmon Quinoa Bowl recommendation")}
                  className="mt-3 w-full py-2 px-3 rounded-xl bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-800 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Chat About This Recommendation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Bottom Quick Feature Badges */}
              <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Synced with Apple Health / Fit
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                  Local 15-min delivery ready
                </span>
              </div>

            </div>

            {/* Floating Glassmorphism Micro-Badges */}
            <div className="absolute -top-4 -right-4 sm:-right-6 bg-white/90 backdrop-blur-xl border border-emerald-200 rounded-2xl py-2 px-3.5 shadow-xl flex items-center gap-2 animate-float">
              <span className="text-base">🥑</span>
              <div className="text-left">
                <div className="text-xs font-extrabold text-slate-900">100% Organic</div>
                <div className="text-[10px] text-slate-500">Partner Certified</div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white/90 backdrop-blur-xl border border-emerald-200 rounded-2xl py-2 px-3.5 shadow-xl flex items-center gap-2 animate-float-slow">
              <span className="text-base">⚡</span>
              <div className="text-left">
                <div className="text-xs font-extrabold text-slate-900">5-Sec Pantry AI</div>
                <div className="text-[10px] text-emerald-600 font-bold">Zero Waste Recipe</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
