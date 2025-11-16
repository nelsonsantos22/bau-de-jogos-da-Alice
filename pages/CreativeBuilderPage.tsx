import React, { useState, useCallback } from 'react';
import type { PlacedElement } from '../types';
import HomeIcon from '../components/HomeIcon';
import BlockPalette from '../components/builder-game/BlockPalette';
import Canvas from '../components/builder-game/Canvas';
import UndoIcon from '../components/builder-game/icons/UndoIcon';
import RedoIcon from '../components/builder-game/icons/RedoIcon';
import SaveIcon from '../components/builder-game/icons/SaveIcon';

interface CreativeBuilderPageProps {
  onGoHome: () => void;
}

const CreativeBuilderPage: React.FC<CreativeBuilderPageProps> = ({ onGoHome }) => {
    const [history, setHistory] = useState<PlacedElement[][]>([[]]);
    const [historyIndex, setHistoryIndex] = useState(0);

    const currentElements = history[historyIndex];

    const updateHistory = (newElements: PlacedElement[]) => {
        const newHistory = history.slice(0, historyIndex + 1);
        newHistory.push(newElements);
        setHistory(newHistory);
        setHistoryIndex(newHistory.length - 1);
    };

    const handlePlaceElement = (elementId: string, x: number, y: number) => {
        const newElement: PlacedElement = {
            instanceId: `${elementId}-${Date.now()}`,
            elementId,
            x,
            y,
            rotation: 0,
        };
        updateHistory([...currentElements, newElement]);
    };

    const handleMoveElement = (instanceId: string, x: number, y: number) => {
        const newElements = currentElements.map(el =>
            el.instanceId === instanceId ? { ...el, x, y } : el
        );
        updateHistory(newElements);
    };

    const handleUndo = useCallback(() => {
        if (historyIndex > 0) {
            setHistoryIndex(prev => prev - 1);
        }
    }, [historyIndex]);

    const handleRedo = useCallback(() => {
        if (historyIndex < history.length - 1) {
            setHistoryIndex(prev => prev + 1);
        }
    }, [historyIndex, history.length]);
    
    // Placeholder for save functionality
    const handleSave = () => {
        alert("Funcionalidade de guardar em breve!");
    }

    return (
        <div className="min-h-screen w-full flex flex-col relative overflow-hidden sky-bg">
            <div className="cloud cloud-1"></div>
            <div className="cloud cloud-2"></div>
            <div className="cloud cloud-3"></div>

            <header className="w-full flex justify-between items-center p-4 z-20">
                <button 
                    onClick={onGoHome} 
                    className="bg-white/50 p-3 rounded-full shadow-md hover:bg-white transition-colors"
                    aria-label="Ir para o início"
                >
                    <HomeIcon className="w-6 h-6 text-slate-700" />
                </button>
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight text-shadow">
                        Paisagem Urbana
                    </h1>
                </div>
                <div className="flex items-center gap-2 bg-white/50 p-2 rounded-full shadow-md">
                    <button onClick={handleUndo} disabled={historyIndex === 0} className="p-2 rounded-full hover:bg-white/80 disabled:opacity-50 disabled:cursor-not-allowed">
                        <UndoIcon className="w-6 h-6 text-slate-700" />
                    </button>
                    <button onClick={handleRedo} disabled={historyIndex === history.length - 1} className="p-2 rounded-full hover:bg-white/80 disabled:opacity-50 disabled:cursor-not-allowed">
                        <RedoIcon className="w-6 h-6 text-slate-700" />
                    </button>
                     <button onClick={handleSave} className="p-2 rounded-full hover:bg-white/80">
                        <SaveIcon className="w-6 h-6 text-slate-700" />
                    </button>
                </div>
            </header>

            <main className="flex-grow flex items-stretch justify-center gap-4 p-4 z-10">
                <div className="w-1/4 max-w-[250px]">
                    <BlockPalette />
                </div>
                <div className="flex-grow">
                    <Canvas 
                        elements={currentElements}
                        onPlaceElement={handlePlaceElement}
                        onMoveElement={handleMoveElement}
                    />
                </div>
            </main>
            
            <style>{`
                .text-shadow { text-shadow: 2px 2px 4px rgba(0,0,0,0.2); }
                .sky-bg {
                    background-color: #87CEEB;
                    background-image: linear-gradient(to bottom, #87CEEB 0%, #B2FFFF 100%);
                }
                .cloud {
                    position: absolute;
                    background: white;
                    border-radius: 50%;
                    opacity: 0.9;
                    filter: blur(5px);
                    animation: move-clouds linear infinite;
                }
                .cloud::before, .cloud::after {
                    content: '';
                    position: absolute;
                    background: white;
                    border-radius: 50%;
                }
                .cloud-1 { width: 200px; height: 60px; top: 10%; animation-duration: 40s; }
                .cloud-1::before { width: 100px; height: 100px; top: -50px; left: 30px; }
                .cloud-1::after { width: 120px; height: 80px; top: -30px; right: 20px; }

                .cloud-2 { width: 300px; height: 80px; top: 30%; animation-duration: 60s; animation-delay: -10s; }
                .cloud-2::before { width: 150px; height: 150px; top: -70px; left: 50px; }
                .cloud-2::after { width: 180px; height: 100px; top: -50px; right: 40px; }

                .cloud-3 { width: 250px; height: 70px; top: 70%; animation-duration: 50s; animation-delay: -25s; }
                .cloud-3::before { width: 120px; height: 120px; top: -60px; left: 40px; }
                .cloud-3::after { width: 150px; height: 90px; top: -40px; right: 30px; }
                
                @keyframes move-clouds {
                    0% { transform: translateX(-100vw); }
                    100% { transform: translateX(100vw); }
                }
            `}</style>
        </div>
    );
};

export default CreativeBuilderPage;