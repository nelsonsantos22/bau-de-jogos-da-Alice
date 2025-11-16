// Fix: Import React to provide the React namespace for types like React.FC.
import React from 'react';

export interface CardData {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
}

// Types for Robot Game
export type Command = 'forward' | 'backward' | 'left' | 'right' | 'goUp' | 'goDown' | 'goLeft' | 'goRight';
export type Direction = 'up' | 'down' | 'left' | 'right';

export interface Position {
  x: number;
  y: number;
}

export interface RobotState {
  position: Position;
  direction: Direction;
}

export interface LevelData {
  gridSize: number;
  start: RobotState;
  goal: Position;
  obstacles: Position[];
  availableCommands: Command[];
}

// Types for Shape Match Game
export type ShapeType = string;

export interface ShapeInfo {
  id: ShapeType;
  color: string;
  value: string; // The emoji or character to display
}

// Types for Category Sort Game
export interface Category {
  id: string;
  label: string;
  icon: string;
  color: string;
}

export interface SortableItemInfo {
  id: string;
  value: string;
  category: string;
}

export interface CategoryLevel {
  levelName: string;
  categories: Category[];
  items: SortableItemInfo[];
}

// Types for Creative Builder Game
export interface BuilderElement {
  id: string;
  name: string;
  type: 'block' | 'decoration';
  value: string; // Emoji
  width: number; // in px
  height: number; // in px
}

export interface PlacedElement {
  instanceId: string; // unique ID for each placed item
  elementId: string; // maps back to BuilderElement
  x: number; // position on canvas
  y: number; // position on canvas
  rotation: number; // in degrees
}

// Types for Sequence Story Game
export interface SequenceItem {
  id: string;
  value: string; // Emoji
  description: string;
}

export interface SequenceLevel {
  levelName: string;
  items: SequenceItem[]; // This array is ordered correctly
}
