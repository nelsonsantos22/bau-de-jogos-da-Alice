import React, { useState } from 'react';
import type { SequenceItem } from '../../types';
import SequenceCard from './SequenceCard';

interface SequenceSlotProps {
  slotNumber: number;
  item: SequenceItem | null;
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragStart?: (e: React.DragEvent<HTMLDivElement>) => void;
  isHinted?: boolean;
  isCardDraggable?: boolean;
}

const SequenceSlot: React.FC<SequenceSlotProps> = ({ slotNumber, item, onDrop, onDragStart, isHinted = false, isCardDraggable = true }) => {
  const [isOver, setIsOver] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };
  
  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOver(true);
  };
  
  const handleDragLeave = () => {
    setIsOver(false);
  };

  const handleDropInternal = (e: React.DragEvent<HTMLDivElement>) => {
    onDrop(e);
    setIsOver(false);
  };
  
  return (
    <div className="flex flex-col items-center">
        <div 
            className={`w-24 h-32 md:w-28 md:h-36 bg-white/40 rounded-2xl shadow-inner flex items-center justify-center transition-all duration-200 relative ${isOver ? 'scale-105 bg-white/60' : ''}`}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDropInternal}
        >
            {isHinted && <div className="absolute inset-0 rounded-2xl ring-4 ring-yellow-400 ring-offset-2 ring-offset-emerald-100 pointer-events-none"></div>}
            {item ? (
                <SequenceCard item={item} onDragStart={onDragStart} isDraggable={isCardDraggable} />
            ) : (
                <div className="w-full h-full border-4 border-dashed border-white/50 rounded-xl" />
            )}
        </div>
        <div className="mt-2 w-8 h-8 flex items-center justify-center bg-emerald-500 text-white font-bold text-lg rounded-full shadow-md">
            {slotNumber}
        </div>
    </div>
  );
};

export default SequenceSlot;