import React, { useState, useEffect, useCallback } from 'react';
import type { SequenceItem } from '../types';
import { SEQUENCE_LEVELS } from '../constants/sequenceLevels';
import HomeIcon from '../components/HomeIcon';
import SequenceCard from '../components/sequence-game/SequenceCard';
import SequenceSlot from '../components/sequence-game/SequenceSlot';
import SequenceResultModal from '../components/sequence-game/SequenceResultModal';
import CheckIcon from '../components/sequence-game/icons/CheckIcon';
import RefreshIcon from '../components/robot-game/icons/RefreshIcon';
import HintIcon from '../components/sequence-game/icons/HintIcon';
import RevealIcon from '../components/sequence-game/icons/RevealIcon';

interface SequenceGamePageProps {
  onGoHome: () => void;
}

interface DraggedItem {
  item: SequenceItem;
  source: 'unplaced' | 'slot';
  sourceIndex: number;
}

const shuffle = <T,>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
};

const SequenceGamePage: React.FC<SequenceGamePageProps> = ({ onGoHome }) => {
    const [levelIndex, setLevelIndex] = useState(0);
    const [unplacedItems, setUnplacedItems] = useState<SequenceItem[]>([]);
    const [slots, setSlots] = useState<(SequenceItem | null)[]>([]);
    const [draggedItem, setDraggedItem] = useState<DraggedItem | null>(null);
    const [result, setResult] = useState<'correct' | 'incorrect' | null>(null);
    const [isRevealed, setIsRevealed] = useState(false);
    const [hintedSlots, setHintedSlots] = useState<number[]>([]);

    const currentLevel = SEQUENCE_LEVELS[levelIndex];

    const setupLevel = useCallback((levelIdx: number) => {
        const levelData = SEQUENCE_LEVELS[levelIdx];
        setUnplacedItems(shuffle(levelData.items));
        setSlots(Array(levelData.items.length).fill(null));
        setResult(null);
        setIsRevealed(false);
        setHintedSlots([]);
    }, []);

    useEffect(() => {
        setupLevel(levelIndex);
    }, [levelIndex, setupLevel]);

    const handleDragStart = (item: SequenceItem, source: 'unplaced' | 'slot', sourceIndex: number) => {
        setDraggedItem({ item, source, sourceIndex });
    };

    const handleDrop = (targetType: 'unplaced' | 'slot', targetIndex: number) => {
        if (!draggedItem) return;

        const { item, source, sourceIndex } = draggedItem;

        // Create copies of state arrays to modify
        let newUnplaced = [...unplacedItems];
        let newSlots = [...slots];

        // Remove item from its source
        if (source === 'unplaced') {
            newUnplaced.splice(sourceIndex, 1);
        } else { // source === 'slot'
            newSlots[sourceIndex] = null;
        }

        // Place item in its target
        if (targetType === 'slot') {
            const existingItem = newSlots[targetIndex];
            newSlots[targetIndex] = item;
            // If there was an item in the slot, handle it
            if (existingItem) {
                if (source === 'unplaced') {
                    newUnplaced.push(existingItem);
                } else { // swapping slots
                    newSlots[sourceIndex] = existingItem;
                }
            }
        } else { // targetType === 'unplaced'
            newUnplaced.push(item);
        }
        
        setUnplacedItems(newUnplaced);
        setSlots(newSlots);
        setDraggedItem(null);
    };

    const checkOrder = () => {
        const correctOrderIds = currentLevel.items.map(item => item.id);
        const playerOrderIds = slots.map(item => item?.id);
        
        if (JSON.stringify(correctOrderIds) === JSON.stringify(playerOrderIds)) {
            setResult('correct');
        } else {
            setResult('incorrect');
        }
    };

    const handleNextLevel = () => {
        if (levelIndex < SEQUENCE_LEVELS.length - 1) {
            setLevelIndex(prev => prev + 1);
        } else {
            // If it's the last level, restart from the beginning
            setLevelIndex(0);
        }
    };
    
    const handleTryAgain = () => {
        setResult(null);
    }

    const handleReveal = () => {
        setIsRevealed(true);
        setSlots(currentLevel.items);
        setUnplacedItems([]);
        setHintedSlots([]);
    };

    const handleHint = () => {
        let hintSlotIndex = -1;
        for (let i = 0; i < slots.length; i++) {
            if (!slots[i] || slots[i]?.id !== currentLevel.items[i].id) {
                if (!hintedSlots.includes(i)) {
                    hintSlotIndex = i;
                    break;
                }
            }
        }

        if (hintSlotIndex === -1) return;

        const correctItem = currentLevel.items[hintSlotIndex];
        const newSlots = [...slots];
        let newUnplaced = [...unplacedItems];
        
        const currentSlotOfCorrectItem = newSlots.findIndex(item => item?.id === correctItem.id);
        const currentUnplacedOfCorrectItem = newUnplaced.findIndex(item => item.id === correctItem.id);

        const misplacedItem = newSlots[hintSlotIndex];

        newSlots[hintSlotIndex] = correctItem;
        setHintedSlots(prev => [...prev, hintSlotIndex]);

        if (misplacedItem) {
            newUnplaced.push(misplacedItem);
        }

        if (currentSlotOfCorrectItem !== -1) {
            newSlots[currentSlotOfCorrectItem] = null;
        } else if (currentUnplacedOfCorrectItem !== -1) {
            newUnplaced.splice(currentUnplacedOfCorrectItem, 1);
        }
        
        setSlots(newSlots);
        setUnplacedItems(newUnplaced);
    };

    const allSlotsFilled = slots.every(slot => slot !== null);

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-green-100 to-emerald-200">
             {result && (
                <SequenceResultModal 
                    status={result}
                    onNextLevel={handleNextLevel}
                    onTryAgain={handleTryAgain}
                    isLastLevel={levelIndex === SEQUENCE_LEVELS.length - 1}
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
            
             <div className="absolute top-4 right-4 z-20">
                 <button 
                    onClick={() => setupLevel(levelIndex)}
                    className="bg-white/50 p-3 rounded-full shadow-md hover:bg-white transition-colors"
                    aria-label="Recomeçar nível"
                >
                    <RefreshIcon className="w-6 h-6 text-slate-700" />
                </button>
             </div>

            <header className="text-center mb-6 z-10">
                <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-800 tracking-tight text-shadow">
                    História em Sequência
                </h1>
                <h2 className="text-lg md:text-xl text-emerald-600 font-medium mt-2">
                    {currentLevel.levelName}
                </h2>
            </header>

            <main className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center flex-grow z-10">
                {/* Slots Area */}
                <div className="flex justify-center items-center gap-2 md:gap-4 flex-wrap p-4 mb-8">
                    {slots.map((item, index) => (
                        <SequenceSlot
                            key={index}
                            slotNumber={index + 1}
                            item={item}
                            onDrop={() => handleDrop('slot', index)}
                            onDragStart={item ? (e) => handleDragStart(item, 'slot', index) : undefined}
                            isHinted={hintedSlots.includes(index)}
                            isCardDraggable={!isRevealed && !hintedSlots.includes(index)}
                        />
                    ))}
                </div>

                {/* Unplaced Items Area */}
                 <div 
                    className="bg-white/30 backdrop-blur-sm min-h-[150px] w-full max-w-2xl p-4 rounded-3xl shadow-lg flex justify-center items-center gap-2 md:gap-4 flex-wrap"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => handleDrop('unplaced', -1)}
                 >
                    {unplacedItems.map((item, index) => (
                        <SequenceCard
                            key={item.id}
                            item={item}
                            onDragStart={() => handleDragStart(item, 'unplaced', index)}
                            isDraggable={!isRevealed}
                        />
                    ))}
                </div>
            </main>

            <footer className="h-24 flex items-center justify-center z-10 gap-4">
                <button
                    onClick={handleHint}
                    disabled={isRevealed || result !== null || allSlotsFilled}
                    className="p-4 bg-teal-500 text-white font-bold rounded-full shadow-lg hover:bg-teal-600 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                    aria-label="Obter uma dica"
                    title="Obter uma dica"
                >
                    <HintIcon className="w-6 h-6" />
                </button>
                <button 
                    onClick={checkOrder}
                    disabled={!allSlotsFilled || isRevealed || result !== null}
                    className="flex items-center gap-2 px-8 py-4 bg-orange-500 text-white font-bold text-lg rounded-full shadow-lg hover:bg-orange-600 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                >
                    <CheckIcon className="w-6 h-6" />
                    <span>Verificar Ordem</span>
                </button>
                <button
                    onClick={handleReveal}
                    disabled={isRevealed || result !== null}
                    className="p-4 bg-purple-500 text-white font-bold rounded-full shadow-lg hover:bg-purple-600 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                    aria-label="Revelar Resposta"
                    title="Revelar Resposta"
                >
                    <RevealIcon className="w-6 h-6" />
                </button>
            </footer>
             <style>{`
                .text-shadow { text-shadow: 1px 1px 2px rgba(0,0,0,0.1); }
            `}</style>
        </div>
    );
};

export default SequenceGamePage;