import React from 'react';

interface RobotGameControlsProps {
  onRun: () => void;
  onNextLevel: () => void;
  isGameWon: boolean;
  isLastLevel: boolean;
  disabled: boolean;
}

const RobotGameControls: React.FC<RobotGameControlsProps> = ({ onRun, onNextLevel, isGameWon, isLastLevel, disabled }) => {
  return (
    <div className="flex items-center justify-center w-full max-w-lg mx-auto my-6 px-4">
      {!isGameWon ? (
        <button
          onClick={onRun}
          disabled={disabled}
          className="px-8 py-4 bg-blue-500 text-white font-bold text-lg rounded-lg shadow-md hover:bg-blue-600 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
        >
          Executar Programa
        </button>
      ) : (
        <button
          onClick={onNextLevel}
          disabled={isLastLevel}
          className="px-8 py-4 bg-green-500 text-white font-bold text-lg rounded-lg shadow-md hover:bg-green-600 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-400"
        >
          {isLastLevel ? "Concluíste Todos os Níveis!" : "Próximo Nível"}
        </button>
      )}
    </div>
  );
};

export default RobotGameControls;