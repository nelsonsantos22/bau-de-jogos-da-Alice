import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import MemoryGamePage from './pages/MemoryGamePage';
import RobotGamePage from './pages/RobotGamePage';
import ShapeMatchGamePage from './pages/ShapeMatchGamePage';
import CategorySortGamePage from './pages/CategorySortGamePage';
import CreativeBuilderPage from './pages/CreativeBuilderPage';
import SequenceGamePage from './pages/SequenceGamePage';

export type Game = 'memory' | 'robot' | 'shape' | 'category' | 'builder' | 'sequence' | null;

const App: React.FC = () => {
  const [activeGame, setActiveGame] = useState<Game>(null);

  const handlePlayGame = (game: 'memory' | 'robot' | 'shape' | 'category' | 'builder' | 'sequence') => {
    setActiveGame(game);
  };

  const handleGoHome = () => {
    setActiveGame(null);
  };

  const renderPage = () => {
    switch (activeGame) {
      case 'memory':
        return <MemoryGamePage onGoHome={handleGoHome} />;
      case 'robot':
        return <RobotGamePage onGoHome={handleGoHome} />;
      case 'shape':
        return <ShapeMatchGamePage onGoHome={handleGoHome} />;
      case 'category':
        return <CategorySortGamePage onGoHome={handleGoHome} />;
      case 'builder':
        return <CreativeBuilderPage onGoHome={handleGoHome} />;
      case 'sequence':
        return <SequenceGamePage onGoHome={handleGoHome} />;
      default:
        return <LandingPage onPlayGame={handlePlayGame} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-200 to-blue-300">
      {renderPage()}
    </div>
  );
};

export default App;
