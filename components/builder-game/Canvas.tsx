import React from 'react';
import type { PlacedElement } from '../../types';
import PlacedBlock from './PlacedBlock';

interface CanvasProps {
  elements: PlacedElement[];
  onPlaceElement: (elementId: string, x: number, y: number) => void;
  onMoveElement: (instanceId: string, x: number, y: number) => void;
}

const Canvas: React.FC<CanvasProps> = ({ elements, onPlaceElement, onMoveElement }) => {

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const elementId = e.dataTransfer.getData('elementId');
    const instanceId = e.dataTransfer.getData('instanceId');
    const offsetX = +e.dataTransfer.getData('offsetX');
    const offsetY = +e.dataTransfer.getData('offsetY');
    
    if (instanceId) {
      // It's a move of an existing element
      onMoveElement(instanceId, x - offsetX, y - offsetY);
    } else if (elementId) {
       // It's a new element from the palette
      onPlaceElement(elementId, x, y);
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="w-full h-full bg-green-200 rounded-2xl shadow-inner relative overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        backgroundColor: '#a7e3a7'
      }}
    >
      {elements.map(element => (
        <PlacedBlock key={element.instanceId} element={element} />
      ))}
    </div>
  );
};

export default Canvas;
