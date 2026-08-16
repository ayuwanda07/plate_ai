import type { MealItem, PartnerPlace, TestimonialItem, FaqItem, ShortcutChip } from '../types';

export const SHORTCUT_CHIPS: ShortcutChip[] = [
  {
    id: 'chip-1',
    label: 'High-protein lunch under 500 kcal',
    icon: '🥗',
    query: 'Can you recommend a high-protein lunch under 500 kcal that takes less than 20 minutes?',
    category: 'Protein'
  },
  {
    id: 'chip-2',
    label: 'Keto dinner with avocado & salmon',
    icon: '🥑',
    query: 'Give me a delicious low-carb keto dinner idea with wild salmon and avocado.',
    category: 'Keto'
  },
  {
    id: 'chip-3',
    label: 'Quick 15-min post-workout snack',
    icon: '⚡',
    query: 'What is the best quick 15-minute post-workout snack with 30g+ protein?',
    category: 'Fitness'
  },
  {
    id: 'chip-4',
    label: 'Budget-friendly plant-based meal prep',
    icon: '🌱',
    query: 'Suggest a budget-friendly vegan meal prep recipe high in iron and fiber for the week.',
    category: 'Vegan'
  },
  {
    id: 'chip-5',
    label: 'Low-sodium heart-healthy dinner',
    icon: '❤️',
    query: 'What are some delicious low-sodium, heart-healthy dinner options from local organic partners?',
    category: 'Heart-Health'
  },
  {
    id: 'chip-6',
    label: 'Gluten-free pasta alternative',
    icon: '🍜',
    query: 'What are high-protein, gluten-free pasta alternatives and easy homemade sauces?',
    category: 'Gluten-Free'
  }
];

export const PARTNER_PLACES: PartnerPlace[] = [
  {
    id: 'partner-1',
    name: 'GreenSprout Farmacy & Bowls',
    rating: 4.9,
    reviewsCount: 342,
    category: 'Organic Farm-to-Table',
    distance: '0.8 km',
    deliveryTime: '15-20 min',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    address: '142 Evergreen Blvd, Midtown',
    tags: ['100% Organic', 'Gluten-Free', 'Farm Fresh'],
    specialty: 'Cold-pressed superfood bowls & wild quinoa platters',
    badge: 'Top Rated',
    discount: '15% off first AI order'
  },
  {
    id: 'partner-2',
    name: 'The Protein Foundry',
    rating: 4.8,
    reviewsCount: 512,
    category: 'Macro-Targeted Kitchen',
    distance: '1.4 km',
    deliveryTime: '20-25 min',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    address: '88 Athletic Way, Downtown',
    tags: ['High-Protein', 'Custom Macros', 'Halal'],
    specialty: 'Grass-fed flank steak bowls & sous-vide herb chicken',
    badge: 'Athlete Pick',
    discount: 'Free protein smoothie'
  },
  {
    id: 'partner-3',
    name: 'Zenith Superfood Deli',
    rating: 4.9,
    reviewsCount: 289,
    category: 'Plant-Based & Wellness',
    distance: '1.9 km',
    deliveryTime: '25-30 min',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    address: '304 Botanical Ave, Eco District',
    tags: ['Vegan', 'Sugar-Free', 'Superfoods'],
    specialty: 'Spirulina rainbow crunch wraps & warm miso grain pots',
    badge: 'Chef Curated'
  },
  {
    id: 'partner-4',
    name: 'PureHarvest Kitchen',
    rating: 4.7,
    reviewsCount: 198,
    category: 'Mediterranean & Keto',
    distance: '2.3 km',
    deliveryTime: '20-30 min',
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80',
    address: '56 Olive Grove Lane, Westside',
    tags: ['Keto-Friendly', 'Extra Virgin Olive Oil', 'Low Carb'],
    specialty: 'Grilled wild salmon with char-grilled asparagus & tzatziki',
    badge: 'Keto Favorite'
  },
  {
    id: 'partner-5',
    name: 'Nourish Artisan Bakery & Salad',
    rating: 4.8,
    reviewsCount: 420,
    category: 'Whole Grain & Fresh Greens',
    distance: '1.1 km',
    deliveryTime: '15-25 min',
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80',
    address: '19 Baker Crest, North Hills',
    tags: ['Artisan Sourdough', 'Locally Sourced', 'Clean Eats'],
    specialty: 'Avocado poached egg tartines & citrus arugula bowls',
    badge: 'Popular'
  },
  {
    id: 'partner-6',
    name: 'Vitality Poke & Broth Bar',
    rating: 4.9,
    reviewsCount: 630,
    category: 'Omega-3 & Clean Seafood',
    distance: '2.7 km',
    deliveryTime: '25-35 min',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=800&q=80',
    address: '77 Pacific Quay, Marina',
    tags: ['Sustainably Sourced', 'High Omega-3', 'Fresh Poke'],
    specialty: 'Ahi tuna poke with cauliflower rice & collagen bone broth',
    badge: 'PlatePal Verified'
  }
];

export const RECOMMENDED_MEALS: MealItem[] = [
  {
    id: 'meal-1',
    name: 'Charred Citrus Salmon with Warm Quinoa & Edamame',
    category: 'high-protein',
    calories: 485,
    protein: 42,
    carbs: 34,
    fats: 18,
    prepTime: '20 min',
    healthScore: 98,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
    tags: ['High-Protein', 'Omega-3 Rich', 'Gluten-Free'],
    description: 'Wild Alaskan salmon pan-seared with blood orange reduction, paired with organic tricolor quinoa and crisp steamed edamame.',
    ingredients: ['Wild Salmon 200g', 'Organic Quinoa 50g', 'Edamame', 'Avocado Oil', 'Fresh Lemon & Herbs'],
    chefTip: 'Rich in anti-inflammatory astaxanthin and high-potency marine proteins.',
    price: '$16.50'
  },
  {
    id: 'meal-2',
    name: 'Avocado Green Goddess Super-Crunch Bowl',
    category: 'plant-based',
    calories: 390,
    protein: 22,
    carbs: 45,
    fats: 14,
    prepTime: '12 min',
    healthScore: 96,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    tags: ['100% Plant-Based', 'High-Fiber', 'Immunity Boost'],
    description: 'Crispy chickpeas, massaged Tuscan kale, shredded purple cabbage, avocado cubes, and tahini lemon herbal dressing.',
    ingredients: ['Tuscan Kale', 'Organic Chickpeas', 'Ripe Hass Avocado', 'Hemp Seeds', 'Lemon Tahini'],
    chefTip: 'Sprinkle nutritional yeast for an extra B-complex vitamin punch.',
    price: '$13.20'
  },
  {
    id: 'meal-3',
    name: 'Sous-Vide Herb Chicken Breast with Roasted Asparagus',
    category: 'low-carb',
    calories: 410,
    protein: 48,
    carbs: 12,
    fats: 14,
    prepTime: '15 min',
    healthScore: 95,
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80',
    tags: ['Keto-Friendly', 'Low-Carb', 'Lean Protein'],
    description: 'Tender free-range chicken breast infused with rosemary and garlic, served over char-grilled tenderstem asparagus and walnut pesto.',
    ingredients: ['Free-Range Chicken 220g', 'Green Asparagus', 'Rosemary & Thyme', 'EVOO', 'Roasted Walnuts'],
    chefTip: 'Sous-vide cooking seals 100% of essential amino acids and moisture.',
    price: '$15.80'
  },
  {
    id: 'meal-4',
    name: '15-Minute Mediterranean Mediterranean Scramble Bowl',
    category: 'quick-prep',
    calories: 340,
    protein: 28,
    carbs: 10,
    fats: 20,
    prepTime: '10 min',
    healthScore: 94,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    tags: ['Speedy 10-Min', 'Brain Food', 'Keto'],
    description: 'Pasture-raised organic eggs scrambled softly with baby spinach, kalamata olives, sun-dried tomatoes, and crumbled grass-fed feta.',
    ingredients: ['3 Pasture Eggs', 'Baby Spinach', 'Sundried Tomatoes', 'Feta Cheese', 'Extra Virgin Olive Oil'],
    chefTip: 'High in choline for cognitive clarity and sustained morning energy.',
    price: '$11.50'
  },
  {
    id: 'meal-5',
    name: 'Teriyaki Grass-Fed Beef & Sweet Potato Power Plate',
    category: 'clean-bulk',
    calories: 620,
    protein: 52,
    carbs: 64,
    fats: 16,
    prepTime: '25 min',
    healthScore: 92,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    tags: ['Clean Bulking', 'Iron Rich', 'Muscle Fuel'],
    description: 'Seared lean beef strips glazed with raw honey-ginger coconut aminos, served with baked Japanese sweet potato wedges and broccoli florets.',
    ingredients: ['Lean Grass-Fed Beef 200g', 'Japanese Sweet Potato', 'Steamed Broccoli', 'Coconut Aminos', 'Sesame Seeds'],
    chefTip: 'The ultimate post-heavy lifting recovery meal with clean complex carbs.',
    price: '$18.00'
  },
  {
    id: 'meal-6',
    name: 'Zesty Chimichurri Tofu & Rainbow Vegetable Sauté',
    category: 'plant-based',
    calories: 370,
    protein: 26,
    carbs: 28,
    fats: 15,
    prepTime: '18 min',
    healthScore: 97,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegan', 'Gut-Friendly', 'Antioxidant'],
    description: 'Crispy pressed organic tofu cubes tossed in homemade cilantro-lime chimichurri with roasted bell peppers, zucchini, and black lentils.',
    ingredients: ['Sprouted Tofu 200g', 'Black Beluga Lentils', 'Zucchini & Bell Peppers', 'Fresh Chimichurri', 'Lime'],
    chefTip: 'Sprouted tofu enhances protein bioavailability and eliminates bloating.',
    price: '$12.90'
  }
];

export const SERVICES_LIST = [
  {
    id: 'srv-1',
    icon: 'Brain',
    title: 'Precision Macro & Calorie AI',
    description: 'Calculates your Basal Metabolic Rate (BMR) and adjusts macro ratios dynamically according to your daily steps, workouts, and health goals.',
    badge: 'Core Intelligence',
    highlight: 'Adaptive to your body changes'
  },
  {
    id: 'srv-2',
    icon: 'Sparkles',
    title: 'Fridge-to-Plate Instant Recipe Bot',
    description: 'Type or snap ingredients in your pantry. PlatePal generates Michelin-inspired, macro-balanced recipes in 5 seconds with zero food waste.',
    badge: 'Zero Food Waste',
    highlight: 'Over 50,000+ smart variations'
  },
  {
    id: 'srv-3',
    icon: 'MapPin',
    title: 'Hyper-Local Partner Integration',
    description: 'Instantly syncs with top organic, gluten-free, and clean restaurants nearby. Order your exact AI-prescribed healthy meal in one click.',
    badge: 'Instant Delivery',
    highlight: 'Verified clean kitchens only'
  },
  {
    id: 'srv-4',
    icon: 'ShieldCheck',
    title: 'Dietary & Allergy Guardian',
    description: 'Bulletproof filtering for celiac, keto, vegan, nut allergies, low-FODMAP, diabetic, or religious dietary protocols.',
    badge: '100% Safe',
    highlight: 'Deep ingredient screening'
  },
  {
    id: 'srv-5',
    icon: 'Activity',
    title: 'Continuous Biometric Feedback',
    description: 'Tracks energy levels, satiety index, and workout recovery to refine future meal suggestions with progressive AI learning.',
    badge: 'Machine Learning',
    highlight: 'Gets smarter each week'
  },
  {
    id: 'srv-6',
    icon: 'Bot',
    title: '24/7 AI Dietitian Concierge',
    description: 'Ask any nutrition question anytime: dining out cheat sheets, grocery lists, alcohol swaps, or sudden late-night cravings advice.',
    badge: 'Instant Response',
    highlight: 'Backed by clinical nutrition data'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Dr. Sarah Lin, MD',
    role: 'Sports Medicine Physician',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    comment: 'PlatePal removes the guesswork from healthy eating. I prescribe it to my patients for realistic, delicious dietary adherence.',
    metric: '98% Adherence',
    metricLabel: 'Patient success rate',
    tag: 'Clinical Verified'
  },
  {
    id: 'test-2',
    name: 'Marcus Vance',
    role: 'CrossFit Athlete & Coach',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    comment: 'The instant macro recommendations and local kitchen ordering saved me 8 hours a week of meal prepping while hitting 180g protein easily.',
    metric: '+4.5kg Lean Mass',
    metricLabel: 'In 10 weeks',
    tag: 'Fitness Enthusiast'
  },
  {
    id: 'test-3',
    name: 'Elena Rostova',
    role: 'Product Designer & Mom',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    comment: 'The fridge-to-plate feature is pure magic! It turns random vegetables in my crisper into gourmet, healthy family dinners.',
    metric: 'Saved $240/mo',
    metricLabel: 'On grocery waste',
    tag: 'Busy Professional'
  },
  {
    id: 'test-4',
    name: 'David Chen',
    role: 'Tech Lead',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    comment: 'Having an AI dietitian in my pocket kept my cholesterol and blood sugar steady during crunch quarters. The UI is stunning!',
    metric: '-8 kg Fat',
    metricLabel: 'Sustained healthy weight',
    tag: 'Desk Worker'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'AI & Nutrition',
    question: 'How does PlatePal personalize my healthy meal recommendations?',
    answer: 'PlatePal utilizes a sophisticated nutrition reasoning model trained on peer-reviewed clinical guidelines. By analyzing your physical profile, activity levels, dietary preferences (e.g. Keto, Vegan, Mediterranean), and taste preferences, our AI calculates exact micronutrient and macronutrient targets and generates bespoke recipes or pairs you with local partner dishes.'
  },
  {
    id: 'faq-2',
    category: 'Partners & Delivery',
    question: 'How do the Local Healthy Food Partners work?',
    answer: 'We partner directly with certified organic, gluten-free, and clean-eating kitchens in your radius. When PlatePal recommends a meal, you can cook it yourself from the step-by-step AI recipe or order it with 1-click delivery directly from a verified local kitchen.'
  },
  {
    id: 'faq-3',
    category: 'Dietary Restrictions',
    question: 'Can PlatePal handle severe allergies and strict dietary restrictions?',
    answer: 'Yes, absolutely! You can configure strict exclusion filters for allergens (peanuts, shellfish, dairy, gluten, soy) and dietary protocols (Low-FODMAP, Renal, Diabetic-friendly, Halal, Kosher). Our AI scans 100% of ingredients to guarantee safety.'
  },
  {
    id: 'faq-4',
    category: 'AI Chatbot',
    question: 'What can I ask the floating AI Dietitian chat assistant?',
    answer: 'You can ask anything from "What should I order at a Thai restaurant to stay in ketosis?" to "Give me a high-iron breakfast with oats and blueberries" or "Convert this 700 kcal recipe into a 450 kcal lunch." It operates 24/7 with instant responses.'
  },
  {
    id: 'faq-5',
    category: 'Pricing',
    question: 'Is PlatePal free to use?',
    answer: 'PlatePal offers a generous Free Forever tier with unlimited AI chatbot nutrition queries and daily recipe recommendations. PlatePal Pro ($9.99/mo) unlocks automated weekly grocery ordering, biometric wearable sync, and exclusive 20% discounts across all local healthy partner kitchens.'
  },
  {
    id: 'faq-6',
    category: 'Pantry Vision',
    question: 'How does the Fridge-to-Plate recipe generator work?',
    answer: 'Simply list or upload what ingredients you have in your fridge or pantry. PlatePal will cross-reference your available ingredients against your macro goals and produce instant, step-by-step gourmet recipes with estimated cooking times.'
  }
];

export const AI_PRESET_ANSWERS: Record<string, { reply: string; meal?: { name: string; calories: number; protein: number; tags: string[]; prepTime: string }; followUps: string[] }> = {
  default: {
    reply: "Hello! I am **PlatePal AI**, your personal nutritionist and culinary assistant 🥗. I can help you with personalized meal ideas, macro calculations, pantry recipe generation, or finding healthy food near you. What are your health goals today?",
    followUps: [
      "Recommend a high-protein lunch under 500 kcal",
      "Keto dinner with avocado & salmon",
      "Quick 15-min post-workout snack"
    ]
  },
  protein: {
    reply: "Here is a stellar **High-Protein Lunch (under 500 kcal)** crafted for sustained energy and muscle synthesis:\n\n✨ **Charred Lemon Salmon & Quinoa Bowl**\n• **Calories:** 485 kcal\n• **Protein:** 42g | **Carbs:** 34g | **Fats:** 18g\n• **Key Micronutrients:** Omega-3s, Vitamin D, Magnesium\n\n💡 *Chef Tip:* Wild salmon combined with edamame gives a complete amino acid profile without digestive heaviness.",
    meal: {
      name: 'Charred Lemon Salmon & Quinoa Bowl',
      calories: 485,
      protein: 42,
      tags: ['High-Protein', 'Omega-3', 'Gluten-Free'],
      prepTime: '20 min'
    },
    followUps: [
      "Where can I order this locally?",
      "Give me a vegetarian alternative with 35g+ protein",
      "Calculate my daily protein target"
    ]
  },
  keto: {
    reply: "For a satisfying **Keto Dinner with Salmon & Avocado**:\n\n🥑 **Pan-Crisped Salmon with Avocado Herb Salsa & Asparagus**\n• **Calories:** 510 kcal\n• **Net Carbs:** 6g | **Protein:** 44g | **Healthy Fats:** 34g\n\n🥑 *Nutrition Highlights:* Rich in monounsaturated fats from fresh Hass avocado and anti-inflammatory EPA/DHA.",
    meal: {
      name: 'Pan-Crisped Salmon with Avocado Salsa',
      calories: 510,
      protein: 44,
      tags: ['Keto', 'Low-Carb', 'Heart-Healthy'],
      prepTime: '18 min'
    },
    followUps: [
      "Suggest a keto dessert under 3g net carbs",
      "What sauces are keto-friendly?",
      "Find keto restaurants nearby"
    ]
  },
  workout: {
    reply: "Here is your optimal **15-Minute Post-Workout Snack** to jumpstart muscle protein synthesis:\n\n⚡ **Whey/Plant Protein Greek Yogurt Power Parfait**\n• **Calories:** 320 kcal\n• **Protein:** 36g | **Carbs:** 28g | **Fats:** 4g\n• **Ingredients:** 200g 0% Greek Yogurt, 1 scoop vanilla protein, fresh berries, touch of raw honey.\n\n⏱️ Consuming this within 45 minutes of training replenishes glycogen and reduces delayed muscle soreness (DOMS).",
    meal: {
      name: 'Greek Yogurt Berry Power Parfait',
      calories: 320,
      protein: 36,
      tags: ['Post-Workout', 'High-Protein', 'Fast Prep'],
      prepTime: '5 min'
    },
    followUps: [
      "Can I make this dairy-free?",
      "How much water should I drink post-workout?",
      "Suggest high-protein pre-workout snack"
    ]
  },
  vegan: {
    reply: "Here is a vibrant **Budget-Friendly Vegan Meal Prep** packed with plant iron and prebiotic fiber:\n\n🌱 **Zesty Lime Black Lentil & Sprouted Tofu Harvest Bowl**\n• **Calories:** 420 kcal\n• **Protein:** 31g | **Fiber:** 14g | **Iron:** 6.8mg (38% DV)\n• **Cost per serving:** ~$3.20\n\n💡 *Pro-Tip:* Pairing lentils with citrus lime juice increases plant non-heme iron absorption by over 300%!",
    meal: {
      name: 'Black Lentil & Sprouted Tofu Harvest Bowl',
      calories: 420,
      protein: 31,
      tags: ['100% Vegan', 'High-Fiber', 'High-Iron'],
      prepTime: '25 min'
    },
    followUps: [
      "How do I meal prep this for 4 days?",
      "What other plant foods are rich in zinc & B12?",
      "Show nearby vegan kitchen partners"
    ]
  },
  heart: {
    reply: "For a **Heart-Healthy & Low-Sodium Dinner**:\n\n❤️ **Mediterranean Herb-Crusted Cod with Steamed Broccolini & Olive Oil Mash**\n• **Sodium:** <220mg per portion\n• **Calories:** 360 kcal | **Protein:** 38g | **Fats:** 12g (EVOO)\n\n🌿 Boosted with garlic, oregano, and lemon zest for bold flavor without excess salt.",
    meal: {
      name: 'Herb-Crusted Mediterranean Cod',
      calories: 360,
      protein: 38,
      tags: ['Low-Sodium', 'Heart-Healthy', 'Mediterranean'],
      prepTime: '20 min'
    },
    followUps: [
      "What are the best natural salt substitutes?",
      "Show local Mediterranean places",
      "How does potassium balance sodium?"
    ]
  },
  gluten: {
    reply: "Here are the top **High-Protein Gluten-Free Pasta Alternatives**:\n\n🍜 **1. Red Lentil Rotini:** 24g protein / 100g (Firm texture, holds sauces)\n🍜 **2. Chickpea Penne:** 21g protein, rich in fiber & manganese\n🍜 **3. Edamame Spaghetti:** 44g protein, lowest net carb option\n\nPair with homemade basil-spinach walnut pesto or roasted tomato marinara for an easy 12-minute dinner!",
    meal: {
      name: 'Red Lentil Pasta with Basil Pesto',
      calories: 440,
      protein: 28,
      tags: ['Gluten-Free', 'High-Protein', 'Comfort Food'],
      prepTime: '15 min'
    },
    followUps: [
      "Give me the 5-minute pesto recipe",
      "Which brands are certified celiac-safe?",
      "Find gluten-free pasta delivery"
    ]
  }
};
