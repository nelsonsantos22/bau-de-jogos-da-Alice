import type { LevelData } from '../types';

export const ROBOT_LEVELS: LevelData[] = [
  {
    gridSize: 5,
    start: { position: { x: 0, y: 4 }, direction: 'up' },
    goal: { x: 0, y: 0 },
    obstacles: [{ x: 0, y: 2 }],
    availableCommands: ['forward', 'backward', 'right', 'left'],
  },
  {
    gridSize: 5,
    start: { position: { x: 0, y: 4 }, direction: 'up' },
    goal: { x: 4, y: 0 },
    obstacles: [
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 3, y: 1 },
    ],
    availableCommands: ['forward', 'backward', 'right', 'left'],
  },
  {
    gridSize: 6,
    start: { position: { x: 2, y: 5 }, direction: 'up' },
    goal: { x: 5, y: 0 },
    obstacles: [
      { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 },
      { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
      { x: 3, y: 4 }
    ],
    availableCommands: ['forward', 'backward', 'right', 'left'],
  },
    {
    gridSize: 7,
    start: { position: { x: 0, y: 6 }, direction: 'right' },
    goal: { x: 6, y: 6 },
    obstacles: [
      { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 1, y: 5 },
      { x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 3 }, { x: 3, y: 4 }, { x: 3, y: 5 }, { x: 3, y: 6 },
      { x: 5, y: 0 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 5, y: 5 },
    ],
    availableCommands: ['forward', 'backward', 'right', 'left'],
  },
  {
    gridSize: 8,
    start: { position: { x: 0, y: 7 }, direction: 'up' },
    goal: { x: 7, y: 0 },
    obstacles: [
      {x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}, {x: 1, y: 3}, {x: 1, y: 4}, {x: 1, y: 5}, {x: 1, y: 6},
      {x: 3, y: 1}, {x: 3, y: 2}, {x: 3, y: 3}, {x: 3, y: 4}, {x: 3, y: 5}, {x: 3, y: 6}, {x: 3, y: 7},
      {x: 5, y: 0}, {x: 5, y: 1}, {x: 5, y: 2}, {x: 5, y: 3}, {x: 5, y: 4}, {x: 5, y: 5}, {x: 5, y: 6},
      {x: 7, y: 1}, {x: 7, y: 2}, {x: 7, y: 3}, {x: 7, y: 4}, {x: 7, y: 5}, {x: 7, y: 6},
    ],
    availableCommands: ['goUp', 'goDown', 'goLeft', 'goRight'],
  },
];