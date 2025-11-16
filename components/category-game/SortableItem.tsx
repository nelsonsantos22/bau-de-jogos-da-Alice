import React from 'react';
import type { SortableItemInfo } from '../../types';

interface SortableItemProps {
  item: SortableItemInfo;
  isBeingDragged: boolean;
  isIncorrect: boolean;
  onDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnd: () => void;
}

const SortableItem: React.FC<SortableItemProps> = ({ item, isBeingDragged, isIncorrect, onDragStart, onDragEnd }) => {
  return (
    <div
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      className={`w-24 h-24 flex items-center justify-center bg-white/80 rounded-full shadow-lg cursor-grab active:cursor-grabbing transition-all duration-300 animate-float ${isBeingDragged ? 'opacity-50 scale-110' : 'opacity-100'} ${isIncorrect ? 'animate-shake' : ''}`}
      style={{
         boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
         borderBottom: '4px solid rgba(0,0,0,0.1)'
      }}
    >
      <span className="text-6xl" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
        {item.value}
      </span>
      <style>{`
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(-2deg); }
            50% { transform: translateY(-10px) rotate(2deg); }
        }
        .animate-float { 
          animation: float 4s infinite ease-in-out;
          animation-delay: ${Math.random() * 2}s;
         }
        @keyframes shake {
          10%, 90% { transform: translateX(-1px); }
          20%, 80% { transform: translateX(2px); }
          30%, 50%, 70% { transform: translateX(-4px); }
          40%, 60% { transform: translateX(4px); }
        }
        .animate-shake { animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both; }
      `}</style>
    </div>
  );
};

export default SortableItem;
