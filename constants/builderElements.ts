import type { BuilderElement } from '../types';

export const BUILDER_ELEMENTS: BuilderElement[] = [
  // Roads & Transport
  { id: 'road', name: 'Estrada', type: 'block', value: '🛣️', width: 80, height: 80 },
  { id: 'car', name: 'Carro', type: 'decoration', value: '🚗', width: 60, height: 40 },
  { id: 'taxi', name: 'Táxi', type: 'decoration', value: '🚕', width: 60, height: 40 },
  { id: 'bus', name: 'Autocarro', type: 'decoration', value: '🚌', width: 80, height: 45 },
  { id: 'traffic-light', name: 'Semáforo', type: 'decoration', value: '🚦', width: 30, height: 70 },
  
  // Buildings
  { id: 'house', name: 'Casa', type: 'block', value: '🏠', width: 80, height: 80 },
  { id: 'house-garden', name: 'Casa com Jardim', type: 'block', value: '🏡', width: 90, height: 90 },
  { id: 'apartment', name: 'Apartamento', type: 'block', value: '🏢', width: 90, height: 120 },
  { id: 'skyscraper', name: 'Arranha-céus', type: 'block', value: '🏙️', width: 100, height: 150 },
  { id: 'store', name: 'Loja', type: 'block', value: '🏬', width: 90, height: 100 },
  { id: 'hospital', name: 'Hospital', type: 'block', value: '🏥', width: 100, height: 100 },
  { id: 'school', name: 'Escola', type: 'block', value: '🏫', width: 100, height: 90 },
  { id: 'post-office', name: 'Correios', type: 'block', value: '🏤', width: 80, height: 85 },
  
  // Nature & Parks
  { id: 'tree', name: 'Árvore', type: 'decoration', value: '🌳', width: 70, height: 80 },
  { id: 'evergreen-tree', name: 'Pinheiro', type: 'decoration', value: '🌲', width: 70, height: 80 },
  { id: 'park', name: 'Parque', type: 'block', value: '🏞️', width: 120, height: 120 },
  { id: 'fountain', name: 'Fonte', type: 'decoration', value: '⛲', width: 80, height: 80 },
  { id: 'flower-bed', name: 'Canteiro de Flores', type: 'decoration', value: '🌸', width: 50, height: 50 },
  
  // Other
  { id: 'ferris-wheel', name: 'Roda Gigante', type: 'decoration', value: '🎡', width: 120, height: 120 },
  { id: 'bench', name: 'Banco', type: 'decoration', value: '🪑', width: 40, height: 30 },
];