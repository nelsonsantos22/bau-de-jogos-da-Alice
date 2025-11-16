
import React from 'react';
import type { CardData } from '../types';
import Card from './Card';

interface GameBoardProps {
  cards: CardData[];
  onCardClick: (index: number) => void;
  isChecking: boolean;
}

const GameBoard: React.FC<GameBoardProps> = ({ cards, onCardClick, isChecking }) => {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 sm:gap-4 p-4 bg-black/10 rounded-xl">
      {cards.map((card, index) => (
        <Card
          key={card.id}
          cardData={card}
          onClick={() => onCardClick(index)}
          isDisabled={isChecking || card.isFlipped}
        />
      ))}
    </div>
  );
};

export default GameBoard;
