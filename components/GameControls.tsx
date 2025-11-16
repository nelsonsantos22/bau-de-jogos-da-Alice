import React from 'react';

interface GameControlsProps {
  moves: number;
  onReset: () => void;
}

const GameControls: React.FC<GameControlsProps> = ({ moves, onReset }) => {
  return (
    <div className="flex items-center justify-between w-full max-w-md mx-auto my-6 px-4">
      <div className="text-xl font-bold text-slate-700">
        Jogadas: <span className="text-indigo-600">{moves}</span>
      </div>
      <button
        onClick={onReset}
        className="px-6 py-3 bg-rose-500 text-white font-bold rounded-lg shadow-md hover:bg-rose-600 transition-colors duration-200 transform hover:scale-105"
      >
        Recomeçar
      </button>
    </div>
  );
};

export default GameControls;