import React from 'react';
import type { BuilderElement } from '../../types';

interface DraggableBlockProps {
  element: BuilderElement;
}

const DraggableBlock: React.FC<DraggableBlockProps> = ({ element }) => {

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('elementId', element.id);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className="p-2 bg-white/60 rounded-lg shadow cursor-grab active:cursor-grabbing flex flex-col items-center justify-center aspect-square transform transition-transform hover:scale-110"
      title={element.name}
    >
      <span className="text-4xl" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
        {element.value}
      </span>
    </div>
  );
};

export default DraggableBlock;
