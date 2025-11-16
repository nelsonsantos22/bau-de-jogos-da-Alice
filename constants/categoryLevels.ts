import type { CategoryLevel } from '../types';

export const CATEGORY_LEVELS: CategoryLevel[] = [
  {
    levelName: 'Frutas e Animais',
    categories: [
      { id: 'fruits', label: 'FRUTAS', icon: '🍎', color: 'bg-red-400' },
      { id: 'animals', label: 'ANIMAIS', icon: '🐾', color: 'bg-yellow-500' },
    ],
    items: [
      { id: 'apple', value: '🍎', category: 'fruits' },
      { id: 'banana', value: '🍌', category: 'fruits' },
      { id: 'bear', value: '🐻', category: 'animals' },
      { id: 'elephant', value: '🐘', category: 'animals' },
      { id: 'bird', value: '🐦', category: 'animals' },
      { id: 'pig', value: '🐷', category: 'animals' },
      { id: 'grapes', value: '🍇', category: 'fruits' },
      { id: 'orange', value: '🍊', category: 'fruits' },
    ],
  },
  {
    levelName: 'Vegetais e Veículos',
    categories: [
      { id: 'vegetables', label: 'VEGETAIS', icon: '🥕', color: 'bg-green-500' },
      { id: 'vehicles', label: 'VEÍCULOS', icon: '🚗', color: 'bg-blue-400' },
    ],
    items: [
      { id: 'broccoli', value: '🥦', category: 'vegetables' },
      { id: 'carrot', value: '🥕', category: 'vegetables' },
      { id: 'car', value: '🚗', category: 'vehicles' },
      { id: 'rocket', value: '🚀', category: 'vehicles' },
      { id: 'boat', value: '⛵', category: 'vehicles' },
      { id: 'airplane', value: '✈️', category: 'vehicles' },
      { id: 'corn', value: '🌽', category: 'vegetables' },
      { id: 'eggplant', value: '🍆', category: 'vegetables' },
    ],
  },
    {
    levelName: 'Roupas e Brinquedos',
    categories: [
      { id: 'clothes', label: 'ROUPAS', icon: '👕', color: 'bg-purple-400' },
      { id: 'toys', label: 'BRINQUEDOS', icon: '🧸', color: 'bg-pink-400' },
    ],
    items: [
      { id: 'shirt', value: '👕', category: 'clothes' },
      { id: 'jeans', value: '👖', category: 'clothes' },
      { id: 'dress', value: '👗', category: 'clothes' },
      { id: 'socks', value: '🧦', category: 'clothes' },
      { id: 'teddy_bear', value: '🧸', category: 'toys' },
      { id: 'yo_yo', value: '🪀', category: 'toys' },
      { id: 'kite', value: '🪁', category: 'toys' },
      { id: 'puzzle', value: '🧩', category: 'toys' },
    ],
  },
];