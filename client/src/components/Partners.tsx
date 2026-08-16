import React, { useState } from 'react';
import { Star, MapPin, Clock, ExternalLink, Sparkles, UtensilsCrossed } from 'lucide-react';
import { PARTNER_PLACES } from '../data/mockData';
import type { PartnerPlace } from '../types';

interface PartnersProps {
  onOpenChat: (initialPrompt?: string) => void;
  onSelectPartner?: (partner: PartnerPlace) => void;
}

export const Partners: React.FC<PartnersProps> = ({ onOpenChat }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedCity, setSelectedCity] = useState('Downtown & Midtown');

  const filterOptions = ['All', '100% Organic', 'High-Protein', 'Vegan', 'Keto-Friendly', 'Artisan Sourdough'];

  const filteredPartners = activeFilter === 'All'
    ? PARTNER_PLACES
    : PARTNER_PLACES.filter(p => p.tags.some(t => t.toLowerCase().includes(activeFilter.toLowerCase())) || p.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="partners" className="py-20 relative bg-gradient-to-b from-transparent via-emerald-50/40 to-transparent">
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-emerald-200/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-teal-200/20 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span>Hyper-Local Kitchen Network</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Local Healthy Food Partners & Kitchens
            </h2>
            <p className="text-base text-slate-600 mt-2">
              PlatePal coordinates with verified farm-fresh cafes and macro-targeted restaurants so you can order exact AI-curated meals straight to your door.
            </p>
          </div>

          {/* Location Switcher */}
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md p-1.5 rounded-2xl border border-emerald-100 shadow-sm self-start md:self-auto">
            <span className="text-xs font-semibold text-slate-500 pl-2">Area:</span>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1.5 rounded-xl border-none focus:outline-none cursor-pointer"
            >
              <option value="Downtown & Midtown">📍 Downtown & Midtown (within 3km)</option>
              <option value="Westside & Eco District">📍 Westside & Eco District</option>
              <option value="Marina & South Beach">📍 Marina & South Beach</option>
            </select>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20 scale-[1.02]'
                  : 'bg-white/90 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200/80'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPartners.map((partner) => (
            <div
              key={partner.id}
              className="group relative rounded-3xl bg-white/85 backdrop-blur-xl border border-emerald-100 hover:border-emerald-300 shadow-card hover:shadow-glass-hover transition-all duration-300 flex flex-col overflow-hidden text-left"
            >
              {/* Partner Image & Badges */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* Top Badge */}
                {partner.badge && (
                  <div className="absolute top-3 left-3 bg-emerald-600/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>{partner.badge}</span>
                  </div>
                )}

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-bold text-slate-900">{partner.rating}</span>
                  <span className="text-[10px] text-slate-500">({partner.reviewsCount})</span>
                </div>

                {/* Delivery Time & Distance Float */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold">
                  <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{partner.distance}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg">
                    <Clock className="w-3.5 h-3.5 text-teal-300" />
                    <span>{partner.deliveryTime}</span>
                  </div>
                </div>
              </div>

              {/* Partner Details */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                        {partner.category}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {partner.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">{partner.address}</p>
                    </div>
                  </div>

                  {/* Specialty Quote */}
                  <div className="mt-3 p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100/80 text-xs text-slate-700">
                    <span className="font-bold text-emerald-800">Specialty: </span>
                    {partner.specialty}
                  </div>

                  {/* Dietary Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {partner.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  {partner.discount ? (
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-lg">
                      🎉 {partner.discount}
                    </span>
                  ) : (
                    <span className="text-[11px] font-semibold text-slate-400">
                      ⚡ AI Meal Plan Enabled
                    </span>
                  )}

                  <button
                    onClick={() => onOpenChat(`Show me the healthiest recommended dishes from ${partner.name}`)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-xl transition-colors shrink-0"
                  >
                    <UtensilsCrossed className="w-3.5 h-3.5 text-emerald-600" />
                    <span>AI Menu</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner for New Partners */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 p-6 sm:p-8 text-white text-left relative overflow-hidden shadow-xl">
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/20 text-emerald-100 text-xs font-bold">
                <Sparkles className="w-3 h-3" />
                <span>Partner Onboarding</span>
              </div>
              <h3 className="text-2xl font-bold font-display">Own a healthy organic kitchen or meal prep service?</h3>
              <p className="text-emerald-100 text-sm">
                Join 120+ verified partners and let PlatePal’s AI dietitian match hungry, health-conscious eaters directly to your menu.
              </p>
            </div>

            <button
              onClick={() => onOpenChat("How can my restaurant become a PlatePal healthy food partner?")}
              className="px-6 py-3 rounded-2xl bg-white text-emerald-800 hover:bg-emerald-50 font-bold text-sm shadow-lg transition-all hover:scale-105 shrink-0 flex items-center gap-2"
            >
              <span>Apply as Partner</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
