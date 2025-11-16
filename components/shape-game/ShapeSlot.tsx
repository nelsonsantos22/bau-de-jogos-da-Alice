import React from 'react';
import type { ShapeInfo } from '../../types';

interface ShapeSlotProps {
  shapeInfo: ShapeInfo;
  isFilled: boolean;
  isOver: boolean;
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnter: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave: (e: React.DragEvent<HTMLDivElement>) => void;
}

const ShapeSlot: React.FC<ShapeSlotProps> = ({ shapeInfo, isFilled, isOver, ...dragHandlers }) => {
  const { id, color, value } = shapeInfo;

  return (
    <div
      data-slot-id={id}
      className={`w-24 h-24 md:w-32 md:h-32 flex items-center justify-center p-2 rounded-2xl transition-all duration-300 ${
        isOver && !isFilled ? 'bg-white/50 scale-110' : 'bg-white/20'
      }`}
      {...dragHandlers}
    >
      <div className="w-full h-full flex items-center justify-center border-4 border-dashed border-white/50 rounded-xl p-2">
        {isFilled ? (
           <div className="w-full h-full rounded-lg flex items-center justify-center opacity-90" style={{ backgroundColor: color }}>
            <span className="text-5xl md:text-6xl" role="img" aria-label={id}>{value}</span>
          </div>
        ) : (
          <span className="text-5xl md:text-6xl text-white/30">{value}</span>
        )}
      </div>
    </div>
  );
};

export default ShapeSlot;