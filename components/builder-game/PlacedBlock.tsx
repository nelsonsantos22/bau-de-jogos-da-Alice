import React from 'react';
import type { PlacedElement } from '../../types';
import { BUILDER_ELEMENTS } from '../../constants/builderElements';

interface PlacedBlockProps {
  element: PlacedElement;
}

const PlacedBlock: React.FC<PlacedBlockProps> = ({ element }) => {
  const elementData = BUILDER_ELEMENTS.find(e => e.id === element.elementId);
  
  if (!elementData) {
    return null;
  }
  
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('instanceId', element.instanceId);
    
    // Calculate and set offset
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    e.dataTransfer.setData('offsetX', offsetX.toString());
    e.dataTransfer.setData('offsetY', offsetY.toString());
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className="absolute cursor-grab active:cursor-grabbing flex items-center justify-center"
      style={{
        left: `${element.x}px`,
        top: `${element.y}px`,
        width: `${elementData.width}px`,
        height: `${elementData.height}px`,
        transform: `rotate(${element.rotation}deg) translate(-50%, -50%)`,
        transformOrigin: 'center center',
        filter: 'drop-shadow(3px 3px 5px rgba(0,0,0,0.3))'
      }}
    >
      <span className="text-6xl" style={{ fontSize: `${elementData.width * 0.9}px` }}>
        {elementData.value}
      </span>
    </div>
  );
};

export default PlacedBlock;
