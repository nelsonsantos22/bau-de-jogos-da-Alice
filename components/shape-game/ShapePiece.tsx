import React from 'react';
import type { ShapeInfo } from '../../types';

interface ShapePieceProps {
  shapeInfo: ShapeInfo;
  isMatched: boolean;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, shapeId: string) => void;
}

const ShapePiece: React.FC<ShapePieceProps> = ({ shapeInfo, isMatched, onDragStart }) => {
  const { id, color, value } = shapeInfo;

  return (
    <div
      id={id}
      draggable={!isMatched}
      onDragStart={(e) => onDragStart(e, id)}
      className={`w-24 h-24 md:w-32 md:h-32 flex items-center justify-center p-2 transition-all duration-300 ${
        isMatched
          ? 'opacity-20 scale-90'
          : 'cursor-grab active:cursor-grabbing hover:scale-110'
      }`}
      style={{
        filter: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.1)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))'
      }}
    >
      <div className="w-full h-full rounded-2xl flex items-center justify-center" style={{ backgroundColor: color }}>
        <span className="text-5xl md:text-6xl" role="img" aria-label={id}>{value}</span>
      </div>
    </div>
  );
};

export default ShapePiece;