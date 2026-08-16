export interface MealItem {
  id: string;
  name: string;
  category: 'all' | 'high-protein' | 'low-carb' | 'plant-based' | 'quick-prep' | 'clean-bulk';
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  prepTime: string;
  healthScore: number;
  image: string;
  tags: string[];
  description: string;
  ingredients: string[];
  chefTip?: string;
  price?: string;
}

export interface PartnerPlace {
  id: string;
  name: string;
  rating: number;
  reviewsCount: number;
  category: string;
  distance: string;
  deliveryTime: string;
  image: string;
  address: string;
  tags: string[];
  specialty: string;
  badge?: string;
  discount?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  metric: string;
  metricLabel: string;
  tag: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
  isError?: boolean;
}

export interface ShortcutChip {
  id: string;
  label: string;
  icon: string;
  query: string;
  category?: string;
}
