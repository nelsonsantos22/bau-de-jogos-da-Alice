import type { SequenceLevel } from '../types';

export const SEQUENCE_LEVELS: SequenceLevel[] = [
  {
    levelName: "A Vida de uma Planta",
    items: [
      { id: 'seed', value: '🌱', description: 'Uma pequena semente' },
      { id: 'sprout', value: '🌿', description: 'Um rebento a sair da terra' },
      { id: 'plant', value: '🌳', description: 'Uma planta a crescer' },
      { id: 'flower', value: '🌻', description: 'Uma flor a desabrochar' },
    ],
  },
  {
    levelName: 'Rotina Matinal',
    items: [
      { id: 'wake-up', value: '😴', description: 'Acordar na cama' },
      { id: 'brush-teeth', value: '🦷', description: 'Lavar os dentes' },
      { id: 'breakfast', value: '🥣', description: 'Tomar o pequeno-almoço' },
      { id: 'school', value: '🏫', description: 'Ir para a escola' },
    ],
  },
  {
    levelName: 'Diversão com o Boneco de Neve',
    items: [
      { id: 'base', value: '⚪', description: 'Uma grande bola de neve para a base' },
      { id: 'middle', value: '⚪', description: 'Uma bola de neve média para o meio' },
      { id: 'head', value: '☃️', description: 'Uma pequena bola de neve para a cabeça' },
      { id: 'decorate', value: '🥕', description: 'Adicionar um nariz de cenoura e decorações' },
    ],
  },
];