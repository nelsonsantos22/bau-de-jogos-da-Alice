import React from 'react';
import type { Command } from '../../types';
import ArrowIcon from './icons/ArrowIcon';
import TurnLeftIcon from './icons/TurnLeftIcon';
import TurnRightIcon from './icons/TurnRightIcon';
import TrashIcon from './icons/TrashIcon';
import ArrowDownIcon from './icons/ArrowDownIcon';
import GoUpIcon from './icons/GoUpIcon';
import GoDownIcon from './icons/GoDownIcon';
import GoLeftIcon from './icons/GoLeftIcon';
import GoRightIcon from './icons/GoRightIcon';

interface CommandSequenceProps {
  sequence: Command[];
  onClear: () => void;
  disabled: boolean;
}

const commandIconMap = {
  forward: <ArrowIcon className="w-6 h-6 text-green-700" />,
  backward: <ArrowDownIcon className="w-6 h-6 text-red-700" />,
  left: <TurnLeftIcon className="w-6 h-6 text-orange-700" />,
  right: <TurnRightIcon className="w-6 h-6 text-purple-700" />,
  goUp: <GoUpIcon className="w-6 h-6 text-sky-700" />,
  goDown: <GoDownIcon className="w-6 h-6 text-sky-700" />,
  goLeft: <GoLeftIcon className="w-6 h-6 text-sky-700" />,
  goRight: <GoRightIcon className="w-6 h-6 text-sky-700" />,
};

const CommandSequence: React.FC<CommandSequenceProps> = ({ sequence, onClear, disabled }) => {
  return (
    <div className="bg-slate-100 p-4 rounded-lg shadow-md mt-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold text-slate-700">O Teu Programa</h3>
        <button 
          onClick={onClear} 
          disabled={disabled || sequence.length === 0}
          className="p-2 text-slate-500 hover:text-rose-500 disabled:text-slate-300 transition-colors"
          aria-label="Limpar sequência de comandos"
        >
          <TrashIcon className="w-6 h-6" />
        </button>
      </div>
      <div className="bg-white/80 min-h-[60px] rounded-md p-2 flex flex-wrap gap-2 shadow-inner">
        {sequence.length === 0 ? (
          <p className="text-slate-400 text-sm italic p-2">Adiciona comandos para construir o teu programa...</p>
        ) : (
          sequence.map((command, index) => (
            <div
              key={index}
              className="w-10 h-10 bg-slate-200 rounded flex items-center justify-center shadow"
              aria-label={command}
            >
              {commandIconMap[command]}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommandSequence;