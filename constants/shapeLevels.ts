import type { ShapeInfo } from '../types';

interface Level {
  levelName: string;
  shapes: ShapeInfo[];
}

export const SHAPE_LEVELS: Level[] = [
  {
    levelName: 'Nível 1: Formas Clássicas',
    shapes: [
      { id: 'square', color: '#3b82f6', value: '🟥' },
      { id: 'circle', color: '#ef4444', value: '🔵' },
      { id: 'triangle', color: '#eab308', value: '🔺' },
      { id: 'star', color: '#22c55e', value: '⭐' },
    ],
  },
  {
    levelName: 'Nível 2: Animais Fofos',
    shapes: [
      { id: 'dog', color: '#a16207', value: '🐶' },
      { id: 'cat', color: '#f97316', value: '🐱' },
      { id: 'fox', color: '#ea580c', value: '🦊' },
      { id: 'panda', color: '#404040', value: '🐼' },
    ],
  },
  {
    levelName: 'Nível 3: Frutas Deliciosas',
    shapes: [
      { id: 'apple', color: '#dc2626', value: '🍎' },
      { id: 'banana', color: '#facc15', value: '🍌' },
      { id: 'grapes', color: '#9333ea', value: '🍇' },
      { id: 'strawberry', color: '#e11d48', value: '🍓' },
    ],
  },
  {
    levelName: 'Nível 4: Debaixo de Água',
    shapes: [
      { id: 'fish', color: '#0ea5e9', value: '🐠' },
      { id: 'crab', color: '#ef4444', value: '🦀' },
      { id: 'octopus', color: '#a855f7', value: '🐙' },
      { id: 'whale', color: '#3b82f6', value: '🐋' },
      { id: 'dolphin', color: '#60a5fa', value: '🐬' },
    ],
  },
  {
    levelName: 'Nível 5: Veículos',
    shapes: [
      { id: 'car', color: '#dc2626', value: '🚗' },
      { id: 'rocket', color: '#6b7280', value: '🚀' },
      { id: 'boat', color: '#ca8a04', value: '⛵' },
      { id: 'airplane', color: '#d1d5db', value: '✈️' },
      { id: 'train', color: '#166534', value: '🚂' },
    ],
  },
  {
    levelName: 'Nível 6: Doces',
    shapes: [
      { id: 'donut', color: '#d946ef', value: '🍩' },
      { id: 'cupcake', color: '#f472b6', value: '🧁' },
      { id: 'ice cream', color: '#a78bfa', value: '🍦' },
      { id: 'cookie', color: '#854d0e', value: '🍪' },
      { id: 'lollipop', color: '#f87171', value: '🍭' },
    ],
  },
  {
    levelName: 'Nível 7: Clima',
    shapes: [
      { id: 'sun', color: '#f59e0b', value: '☀️' },
      { id: 'cloud', color: '#9ca3af', value: '☁️' },
      { id: 'rainbow', color: '#ec4899', value: '🌈' },
      { id: 'lightning', color: '#facc15', value: '⚡' },
      { id: 'snowflake', color: '#06b6d4', value: '❄️' },
    ],
  },
];