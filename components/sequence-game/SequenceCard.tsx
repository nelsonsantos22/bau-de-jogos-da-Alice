import React from 'react';
import type { SequenceItem } from '../../types';

interface SequenceCardProps {
  item: SequenceItem;
  onDragStart?: (e: React.DragEvent<HTMLDivElement>) => void;
  isDraggable?: boolean;
}

const SequenceCard: React.FC<SequenceCardProps> = ({ item, onDragStart, isDraggable = true }) => {
  return (
    <div
      draggable={isDraggable}
      onDragStart={onDragStart}
      className={`w-24 h-32 md:w-28 md:h-36 bg-white rounded-2xl shadow-lg p-2 flex items-center justify-center transition-all duration-200 ${
        isDraggable
          ? 'cursor-grab active:cursor-grabbing hover:scale-105 hover:shadow-xl'
          : 'cursor-default'
      }`}
      style={{
        border: '4px solid #fff',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      }}
    >
      <span className="text-5xl md:text-6xl" role="img" aria-label={item.description}>
        {item.value}
      </span>
    </div>
  );
};

export default SequenceCard;