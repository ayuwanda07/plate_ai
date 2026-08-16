import React from 'react';
import { Star, Quote, CheckCircle, Award } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-emerald-200/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-teal-200/20 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100/90 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>Real Transformations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Loved by Doctors, Athletes & Busy Professionals
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            See how PlatePal helps thousands reach their health targets without restrictive crash diets or tedious calorie spreadsheets.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="relative rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-100 hover:border-emerald-300 p-6 shadow-card hover:shadow-glass-hover transition-all duration-300 flex flex-col justify-between text-left group hover:-translate-y-1"
            >
              <div>
                {/* Metric Highlight Badge */}
                <div className="mb-4 p-3 rounded-2xl bg-emerald-50/80 border border-emerald-100 flex items-center justify-between">
                  <div>
                    <div className="text-base font-extrabold text-emerald-800">{t.metric}</div>
                    <div className="text-[10px] text-emerald-600 font-semibold">{t.metricLabel}</div>
                  </div>
                  <span className="text-xs font-bold text-slate-500 bg-white px-2 py-1 rounded-lg shadow-xs">
                    {t.tag}
                  </span>
                </div>

                {/* Stars Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Comment */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic relative">
                  <Quote className="w-4 h-4 text-emerald-300 inline-block mr-1 -mt-1" />
                  "{t.comment}"
                </p>
              </div>

              {/* User Bio Footer */}
              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-300 shadow-sm"
                />
                <div className="overflow-hidden">
                  <div className="flex items-center gap-1">
                    <h4 className="text-xs font-bold text-slate-900 truncate">{t.name}</h4>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100 shrink-0" />
                  </div>
                  <p className="text-[11px] text-slate-500 truncate">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-12 text-center text-xs text-slate-500 flex items-center justify-center gap-4 flex-wrap">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Over 500,000+ meals recommended
          </span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-teal-500" />
            Backed by Clinical Nutrition Guidelines
          </span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            HIPAA & GDPR Compliant Health Privacy
          </span>
        </div>

      </div>
    </section>
  );
};
