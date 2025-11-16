import React, { useState, useEffect, useCallback } from 'react';
import type { SortableItemInfo } from '../types';
import { CATEGORY_LEVELS } from '../constants/categoryLevels';
import HomeIcon from '../components/HomeIcon';
import StarIcon from '../components/StarIcon';
import CategoryBin from '../components/category-game/CategoryBin';
import SortableItem from '../components/category-game/SortableItem';
import CategoryWinModal from '../components/category-game/CategoryWinModal';

interface CategorySortGamePageProps {
  onGoHome: () => void;
}

const shuffle = <T,>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
};

type SortedItems = {
    [key: string]: SortableItemInfo[];
};

const CategorySortGamePage: React.FC<CategorySortGamePageProps> = ({ onGoHome }) => {
    const [levelIndex, setLevelIndex] = useState(0);
    const [unsortedItems, setUnsortedItems] = useState<SortableItemInfo[]>([]);
    const [sortedItems, setSortedItems] = useState<SortedItems>({});
    const [showWinModal, setShowWinModal] = useState(false);
    const [draggedItemId, setDraggedItemId] = useState<string | null>(null);
    const [incorrectDropId, setIncorrectDropId] = useState<string | null>(null);

    const currentLevel = CATEGORY_LEVELS[levelIndex];

    const setupLevel = useCallback((levelIdx: number) => {
        const levelData = CATEGORY_LEVELS[levelIdx];
        setShowWinModal(false);
        setUnsortedItems(shuffle(levelData.items));
        const initialSorted: SortedItems = {};
        levelData.categories.forEach(cat => {
            initialSorted[cat.id] = [];
        });
        setSortedItems(initialSorted);
    }, []);
  
    useEffect(() => {
        setupLevel(levelIndex);
    }, [levelIndex, setupLevel]);

    const isLevelWon = unsortedItems.length === 0 && currentLevel.items.length > 0;

    useEffect(() => {
        if (isLevelWon) {
            const timer = setTimeout(() => setShowWinModal(true), 500);
            return () => clearTimeout(timer);
        }
    }, [isLevelWon]);
  
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, item: SortableItemInfo) => {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('itemId', item.id);
        e.dataTransfer.setData('itemCategory', item.category);
        setDraggedItemId(item.id);
    };

    const handleDragEnd = () => {
        setDraggedItemId(null);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, binId: string) => {
        e.preventDefault();
        const itemId = e.dataTransfer.getData('itemId');
        const itemCategory = e.dataTransfer.getData('itemCategory');

        if (itemCategory === binId) {
            const item = unsortedItems.find(i => i.id === itemId);
            if (item) {
                setUnsortedItems(prev => prev.filter(i => i.id !== itemId));
                setSortedItems(prev => ({
                    ...prev,
                    [binId]: [...prev[binId], item],
                }));
            }
        } else {
            setIncorrectDropId(itemId);
            setTimeout(() => setIncorrectDropId(null), 500); // Duration of shake animation
        }
    };

    const handleNextLevel = () => {
        if (levelIndex < CATEGORY_LEVELS.length - 1) {
            setLevelIndex(prev => prev + 1);
        }
    };

    const handleRestart = () => {
        setLevelIndex(0);
    };

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-between p-4 relative overflow-hidden polka-dot-bg">
            {showWinModal && (
                <CategoryWinModal 
                    onNextLevel={handleNextLevel}
                    onRestart={handleRestart}
                    isLastLevel={levelIndex === CATEGORY_LEVELS.length - 1}
                />
            )}
        
            <header className="w-full flex justify-between items-start z-10 p-2">
                 <button 
                    onClick={onGoHome} 
                    className="bg-white/50 p-3 rounded-full shadow-md hover:bg-white transition-colors"
                    aria-label="Ir para o início"
                >
                    <HomeIcon className="w-6 h-6 text-slate-700" />
                </button>
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight text-shadow">
                        Ordenar por Categoria
                    </h1>
                    <h2 className="text-lg md:text-xl text-indigo-100 font-medium mt-2">
                        {currentLevel.levelName}
                    </h2>
                </div>
                 <div className="flex items-center gap-1 bg-white/50 p-2 rounded-full shadow-md">
                    {Array.from({ length: levelIndex + 1 }).map((_, i) => (
                        <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                    ))}
                </div>
            </header>

            <main className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center flex-grow z-10">
                {/* Unsorted Items Area */}
                <div className="w-full flex-grow flex items-center justify-center flex-wrap gap-4 p-4 min-h-[200px]">
                    {unsortedItems.map(item => (
                        <SortableItem
                            key={item.id}
                            item={item}
                            onDragStart={(e) => handleDragStart(e, item)}
                            onDragEnd={handleDragEnd}
                            isBeingDragged={draggedItemId === item.id}
                            isIncorrect={incorrectDropId === item.id}
                        />
                    ))}
                </div>
            </main>

            {/* Bins Area */}
            <footer className="w-full flex justify-center items-end gap-4 p-4 z-10 flex-wrap">
                {currentLevel.categories.map(category => (
                    <CategoryBin
                        key={category.id}
                        category={category}
                        onDrop={(e) => handleDrop(e, category.id)}
                        sortedItems={sortedItems[category.id] || []}
                    />
                ))}
            </footer>
        
            <style>{`
                .text-shadow { text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }
                .polka-dot-bg {
                    background-color: #fef9c3;
                    background-image: radial-gradient(#fde68a 12%, transparent 13%);
                    background-size: 40px 40px;
                }
            `}</style>
        </div>
    );
};

export default CategorySortGamePage;