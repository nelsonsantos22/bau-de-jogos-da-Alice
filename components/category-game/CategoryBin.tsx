import React, { useState } from 'react';
import type { Category, SortableItemInfo } from '../../types';

interface CategoryBinProps {
  category: Category;
  sortedItems: SortableItemInfo[];
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
}

const CategoryBin: React.FC<CategoryBinProps> = ({ category, sortedItems, onDrop }) => {
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
    <div
      onDrop={handleDropInternal}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      className={`w-full sm:w-80 h-64 ${category.color} rounded-t-3xl shadow-2xl p-4 flex flex-col transition-all duration-300 transform ${isOver ? 'scale-105' : 'scale-100'}`}
      style={{
        borderBottom: '10px solid rgba(0,0,0,0.2)'
      }}
    >
      <div className="flex items-center justify-center gap-2 mb-2 pb-2 border-b-4 border-white/50">
        <span className="text-3xl">{category.icon}</span>
        <h3 className="text-2xl font-extrabold text-white text-shadow">{category.label}</h3>
      </div>
      <div className="flex-grow bg-white/30 rounded-lg p-2 overflow-y-auto">
        <div className="grid grid-cols-4 gap-2">
            {sortedItems.map(item => (
                <div key={item.id} className="w-full aspect-square bg-white/50 rounded-md flex items-center justify-center text-3xl animate-pop-in">
                    {item.value}
                </div>
            ))}
        </div>
      </div>
       <style>{`
          @keyframes pop-in {
            0% { transform: scale(0.5); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-pop-in { animation: pop-in 0.3s ease-out forwards; }
          .text-shadow { text-shadow: 1px 1px 3px rgba(0,0,0,0.3); }
       `}</style>
    </div>
  );
};

export default CategoryBin;
