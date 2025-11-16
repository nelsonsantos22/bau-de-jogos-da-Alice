import React, { useState, useEffect, useCallback, useMemo } from 'react';
import type { CardData } from '../types';
import { EMOJI_LIST } from '../constants';
import GameBoard from '../components/GameBoard';
import GameControls from '../components/GameControls';
import WinModal from '../components/WinModal';
import HomeIcon from '../components/HomeIcon';

interface MemoryGamePageProps {
  onGoHome: () => void;
}

const MemoryGamePage: React.FC<MemoryGamePageProps> = ({ onGoHome }) => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [moves, setMoves] = useState(0);

  const shuffleAndDealCards = useCallback(() => {
    const shuffledEmojis = [...EMOJI_LIST, ...EMOJI_LIST]
      .sort(() => Math.random() - 0.5);

    setCards(shuffledEmojis.map((emoji, index) => ({
      id: index,
      value: emoji,
      isFlipped: false,
      isMatched: false,
    })));
    setFlippedIndices([]);
    setMoves(0);
    setIsChecking(false);
  }, []);

  useEffect(() => {
    shuffleAndDealCards();
  }, [shuffleAndDealCards]);

  useEffect(() => {
    if (flippedIndices.length === 2) {
      setIsChecking(true);
      const [firstIndex, secondIndex] = flippedIndices;
      const firstCard = cards[firstIndex];
      const secondCard = cards[secondIndex];

      if (firstCard.value === secondCard.value) {
        // Match
        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map(card =>
              card.value === firstCard.value ? { ...card, isMatched: true, isFlipped: true } : card
            )
          );
          setFlippedIndices([]);
          setIsChecking(false);
        }, 500);
      } else {
        // No match
        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map((card, index) =>
              index === firstIndex || index === secondIndex ? { ...card, isFlipped: false } : card
            )
          );
          setFlippedIndices([]);
          setIsChecking(false);
        }, 1000);
      }
    }
  }, [flippedIndices, cards]);

  const handleCardClick = (index: number) => {
    if (isChecking || cards[index].isFlipped || flippedIndices.length >= 2) {
      return;
    }

    if (flippedIndices.length === 0) {
      setMoves(prev => prev + 1);
    }
    
    setFlippedIndices(prev => [...prev, index]);
    setCards(prevCards =>
      prevCards.map((card, i) => (i === index ? { ...card, isFlipped: true } : card))
    );
  };

  const isGameWon = useMemo(() => cards.length > 0 && cards.every(card => card.isMatched), [cards]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
       <button 
        onClick={onGoHome} 
        className="absolute top-4 left-4 bg-white/50 p-3 rounded-full shadow-md hover:bg-white transition-colors z-20"
        aria-label="Ir para o início"
      >
        <HomeIcon className="w-6 h-6 text-slate-700" />
      </button>

      <div className="text-center mb-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight text-shadow">
          Mania da Memória
        </h1>
        <p className="text-lg md:text-xl text-indigo-100 font-medium mt-2">
          Encontra todos os pares!
        </p>
      </div>
      
      <main className="w-full max-w-md mx-auto">
        <GameBoard
          cards={cards}
          onCardClick={handleCardClick}
          isChecking={isChecking}
        />
      </main>

      <GameControls moves={moves} onReset={shuffleAndDealCards} />

      {isGameWon && <WinModal moves={moves} onPlayAgain={shuffleAndDealCards} />}
      <style>{`
        .text-shadow {
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
};

export default MemoryGamePage;