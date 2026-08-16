import React, { useState } from 'react';
import { Sparkles, Clock, Flame, Dumbbell, Wheat, Heart, Bot, Check, ChefHat } from 'lucide-react';
import { RECOMMENDED_MEALS } from '../data/mockData';
import type { MealItem } from '../types';

interface RecommendationsProps {
  onOpenChat: (initialPrompt?: string) => void;
}

export const Recommendations: React.FC<RecommendationsProps> = ({ onOpenChat }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: '✨ All Smart Picks' },
    { id: 'high-protein', label: '💪 High-Protein' },
    { id: 'low-carb', label: '🥑 Low-Carb & Keto' },
    { id: 'plant-based', label: '🌱 100% Plant-Based' },
    { id: 'quick-prep', label: '⚡ Speedy <15 Min' },
    { id: 'clean-bulk', label: '🏋️ Clean Bulking' },
  ];

  const filteredMeals = activeCategory === 'all'
    ? RECOMMENDED_MEALS
    : RECOMMENDED_MEALS.filter(m => m.category === activeCategory);

  const handleCopyIngredients = (meal: MealItem) => {
    const text = `${meal.name} - Ingredients:\n${meal.ingredients.join('\n')}\n(Macros: ${meal.calories} kcal, ${meal.protein}g Protein)`;
    navigator.clipboard.writeText(text);
    setCopiedId(meal.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="recommendations" className="py-20 relative">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 -right-10 w-96 h-96 bg-emerald-200/25 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-200/20 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100/90 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ChefHat className="w-3.5 h-3.5 text-emerald-600" />
            <span>Curated by AI Nutritionist</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Personalized Healthy Meal Recommendations
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Every dish is nutritionally balanced to deliver high satiety, essential micronutrients, and complete proteins without artificial fillers.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-md shadow-emerald-500/25 scale-[1.02]'
                    : 'bg-white/80 hover:bg-emerald-50 text-slate-600 hover:text-emerald-800 border border-emerald-100 shadow-xs'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Meals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMeals.map((meal) => (
            <div
              key={meal.id}
              className="group rounded-3xl bg-white/85 backdrop-blur-xl border border-emerald-100 hover:border-emerald-300 shadow-card hover:shadow-glass-hover transition-all duration-300 flex flex-col overflow-hidden text-left"
            >
              {/* Image & Overlay Badges */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <img
                  src={meal.image}
                  alt={meal.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* Health Score Pill */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                  <span className="text-xs font-black text-slate-900">{meal.healthScore}/100</span>
                  <span className="text-[10px] text-slate-500 font-bold">Health Score</span>
                </div>

                {/* Prep Time */}
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-300" />
                  <span>{meal.prepTime}</span>
                </div>

                {/* Bottom Overlay Price/Estimate */}
                {meal.price && (
                  <div className="absolute bottom-3 right-3 bg-emerald-600/90 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                    {meal.price}
                  </div>
                )}
              </div>

              {/* Meal Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {meal.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2">
                    {meal.name}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {meal.description}
                  </p>

                  {/* Nutrients Breakdown Pill Box */}
                  <div className="grid grid-cols-4 gap-1.5 mt-4 p-2.5 rounded-2xl bg-slate-50 border border-slate-200/70 text-center">
                    <div>
                      <div className="flex items-center justify-center text-amber-500 mb-0.5">
                        <Flame className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-xs font-extrabold text-slate-900">{meal.calories}</div>
                      <div className="text-[9px] font-semibold text-slate-400">kcal</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center text-emerald-600 mb-0.5">
                        <Dumbbell className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-xs font-extrabold text-emerald-700">{meal.protein}g</div>
                      <div className="text-[9px] font-semibold text-slate-400">Protein</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center text-teal-600 mb-0.5">
                        <Wheat className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-xs font-extrabold text-slate-900">{meal.carbs}g</div>
                      <div className="text-[9px] font-semibold text-slate-400">Carbs</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center text-amber-600 mb-0.5">
                        <span className="text-xs">🥑</span>
                      </div>
                      <div className="text-xs font-extrabold text-slate-900">{meal.fats}g</div>
                      <div className="text-[9px] font-semibold text-slate-400">Fats</div>
                    </div>
                  </div>

                  {/* Chef Tip snippet */}
                  {meal.chefTip && (
                    <div className="mt-3 text-[11px] text-slate-500 italic bg-amber-50/60 p-2 rounded-xl border border-amber-100/60">
                      💡 <strong>Dietitian Note:</strong> {meal.chefTip}
                    </div>
                  )}
                </div>

                {/* Card Actions */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => onOpenChat(`Give me the full recipe, ingredients, and substitutions for ${meal.name}`)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-xs font-bold shadow-sm shadow-emerald-600/20 transition-all flex items-center justify-center gap-1.5"
                  >
                    <Bot className="w-3.5 h-3.5" />
                    <span>Ask AI Recipe</span>
                  </button>

                  <button
                    onClick={() => handleCopyIngredients(meal)}
                    className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-colors"
                    title="Copy ingredients"
                  >
                    {copiedId === meal.id ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <span className="text-xs font-bold">📋</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Interactive Prompt Box for Custom Food Ideas */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-2xl border border-emerald-200 shadow-xl max-w-4xl mx-auto text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xl">🥗</span>
              <h4 className="text-lg font-bold text-slate-900">Have specific ingredients in your fridge right now?</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              Tell PlatePal what you have (e.g. 2 eggs, spinach, sweet potato, peanut butter) and get an instant custom recipe.
            </p>
          </div>

          <button
            onClick={() => onOpenChat("I have these ingredients in my fridge: eggs, spinach, avocado, and tofu. What healthy recipe can I make in 15 minutes?")}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/20 transition-all shrink-0 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Generate Fridge Recipe</span>
          </button>
        </div>

      </div>
    </section>
  );
};
