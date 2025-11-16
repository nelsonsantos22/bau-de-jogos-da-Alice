import React from 'react';
import type { CardData } from '../types';

interface CardProps {
  cardData: CardData;
  onClick: () => void;
  isDisabled: boolean;
}

const Card: React.FC<CardProps> = ({ cardData, onClick, isDisabled }) => {
  const { value, isFlipped, isMatched } = cardData;

  const handleClick = () => {
    if (!isDisabled && !isFlipped) {
      onClick();
    }
  };

  return (
    <div className="w-full aspect-square [perspective:1000px]" onClick={handleClick}>
      <div
        className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Card Back */}
        <div className="absolute w-full h-full bg-indigo-500 rounded-lg shadow-lg flex items-center justify-center [backface-visibility:hidden]">
           <span className="text-4xl text-indigo-300">?</span>
        </div>

        {/* Card Front */}
        <div className={`absolute w-full h-full bg-slate-100 rounded-lg shadow-lg flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden] transition-all duration-300 ${isMatched ? 'ring-4 ring-offset-2 ring-green-500 bg-green-100' : ''}`}>
          <span className="text-4xl md:text-5xl">{value}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
