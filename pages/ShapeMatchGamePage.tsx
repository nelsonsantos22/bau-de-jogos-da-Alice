import React, { useState, useEffect, useCallback } from 'react';
import type { ShapeInfo, ShapeType } from '../types';
import { SHAPE_LEVELS } from '../constants/shapeLevels';
import HomeIcon from '../components/HomeIcon';
import WinModal from '../components/shape-game/WinModal';
import ShapePiece from '../components/shape-game/ShapePiece';
import ShapeSlot from '../components/shape-game/ShapeSlot';
import RefreshIcon from '../components/robot-game/icons/RefreshIcon';


interface ShapeMatchGamePageProps {
  onGoHome: () => void;
}

const shuffle = <T,>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
};

const DecorativeElements = () => (
    <>
      <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-white/20 rounded-full blur-xl animate-fade-move-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-white/20 rounded-full blur-xl animate-fade-move"></div>
      <span className="absolute top-[10%] left-[10%] text-4xl animate-float">🦋</span>
      <span className="absolute top-[80%] left-[85%] text-4xl animate-float-delay">🦋</span>
      <style>{`
        @keyframes fade-move {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.2; }
            50% { transform: translate(20px, -20px) scale(1.1); opacity: 0.3; }
        }
        @keyframes fade-move-slow {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.2; }
            50% { transform: translate(-30px, 30px) scale(1.1); opacity: 0.3; }
        }
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(-5deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-fade-move { animation: fade-move 10s infinite ease-in-out; }
        .animate-fade-move-slow { animation: fade-move-slow 12s infinite ease-in-out; }
        .animate-float { animation: float 6s infinite ease-in-out; }
        .animate-float-delay { animation: float 6s infinite ease-in-out 3s; }
      `}</style>
    </>
);


const ShapeMatchGamePage: React.FC<ShapeMatchGamePageProps> = ({ onGoHome }) => {
  const [levelIndex, setLevelIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [matchedShapes, setMatchedShapes] = useState<ShapeType[]>([]);
  const [showWinModal, setShowWinModal] = useState(false);
  const [dragOverSlotId, setDragOverSlotId] = useState<string | null>(null);
  
  const [shuffledShapes, setShuffledShapes] = useState<ShapeInfo[]>([]);
  const [shuffledSlots, setShuffledSlots] = useState<ShapeInfo[]>([]);

  const currentLevel = SHAPE_LEVELS[levelIndex];
  const isGameWon = matchedShapes.length > 0 && matchedShapes.length === currentLevel.shapes.length;

  const setupLevel = useCallback((levelIdx: number) => {
    const levelData = SHAPE_LEVELS[levelIdx];
    setMatchedShapes([]);
    setShowWinModal(false);
    setShuffledShapes(shuffle(levelData.shapes));
    setShuffledSlots(shuffle(levelData.shapes));
    if (levelIdx === 0) {
      setScore(0);
    }
  }, []);
  
  useEffect(() => {
    setupLevel(levelIndex);
  }, [levelIndex, setupLevel]);

  useEffect(() => {
    if (isGameWon) {
      const timer = setTimeout(() => setShowWinModal(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isGameWon]);
  
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, shapeId: string) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('shapeId', shapeId);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const shapeId = e.dataTransfer.getData('shapeId') as ShapeType;
    const slotId = e.currentTarget.dataset.slotId as ShapeType;
    setDragOverSlotId(null);

    if (shapeId === slotId && !matchedShapes.includes(shapeId)) {
      setMatchedShapes(prev => [...prev, shapeId]);
      setScore(prev => prev + 10);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  
  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    const slotId = e.currentTarget.dataset.slotId;
    if (slotId && !matchedShapes.includes(slotId as ShapeType)) {
        setDragOverSlotId(slotId);
    }
  };

  const handleDragLeave = () => {
     setDragOverSlotId(null);
  };

  const handleNextLevel = () => {
    if (levelIndex < SHAPE_LEVELS.length - 1) {
      setLevelIndex(prev => prev + 1);
    }
  };

  const handleRestart = () => {
    setLevelIndex(0);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-sky-200 to-green-200">
        <DecorativeElements />
        {showWinModal && (
            <WinModal 
                score={score}
                onNextLevel={handleNextLevel}
                onRestart={handleRestart}
                isLastLevel={levelIndex === SHAPE_LEVELS.length - 1}
            />
        )}
        
        <div className="absolute top-4 left-4 z-20">
            <button 
                onClick={onGoHome} 
                className="bg-white/50 p-3 rounded-full shadow-md hover:bg-white transition-colors"
                aria-label="Ir para o início"
            >
                <HomeIcon className="w-6 h-6 text-slate-700" />
            </button>
        </div>

        <header className="text-center mb-2 z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight text-shadow">
                Organizador de Formas
            </h1>
            <h2 className="text-lg md:text-xl text-indigo-100 font-medium mt-2">
                {currentLevel.levelName}
            </h2>
        </header>

        <div className="absolute top-4 right-4 z-20 flex items-center gap-4">
             <div className="bg-white/50 text-slate-700 font-bold px-4 py-2 rounded-full shadow-md">
                Pontuação: {score}
            </div>
            <button 
                onClick={() => setupLevel(levelIndex)}
                className="bg-white/50 p-3 rounded-full shadow-md hover:bg-white transition-colors"
                aria-label="Recomeçar nível"
            >
                <RefreshIcon className="w-6 h-6 text-slate-700" />
            </button>
        </div>

        <main className="w-full max-w-4xl mx-auto flex flex-col items-center justify-between flex-grow z-10 pt-16 md:pt-10">
            {/* Slots Area */}
            <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap p-4 mb-8 h-1/3">
                {shuffledSlots.map(shapeInfo => (
                    <ShapeSlot
                        key={shapeInfo.id}
                        shapeInfo={shapeInfo}
                        isFilled={matchedShapes.includes(shapeInfo.id)}
                        isOver={dragOverSlotId === shapeInfo.id}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onDragEnter={handleDragEnter}
                        onDragLeave={handleDragLeave}
                    />
                ))}
            </div>

            {/* Shapes Area */}
            <div className="bg-white/30 backdrop-blur-sm p-4 rounded-3xl shadow-lg flex justify-center items-center gap-4 md:gap-8 flex-wrap min-h-[150px]">
                {shuffledShapes.map(shapeInfo => (
                    <ShapePiece
                        key={shapeInfo.id}
                        shapeInfo={shapeInfo}
                        isMatched={matchedShapes.includes(shapeInfo.id)}
                        onDragStart={(e) => handleDragStart(e, shapeInfo.id)}
                    />
                ))}
            </div>
        </main>
        
        <style>{`
            .text-shadow { text-shadow: 2px 2px 4px rgba(0,0,0,0.2); }
        `}</style>
    </div>
  );
};

export default ShapeMatchGamePage;