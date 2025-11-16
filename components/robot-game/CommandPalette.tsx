import React from 'react';
import type { Command } from '../../types';
import ArrowIcon from './icons/ArrowIcon';
import TurnLeftIcon from './icons/TurnLeftIcon';
import TurnRightIcon from './icons/TurnRightIcon';
import ArrowDownIcon from './icons/ArrowDownIcon';
import GoUpIcon from './icons/GoUpIcon';
import GoDownIcon from './icons/GoDownIcon';
import GoLeftIcon from './icons/GoLeftIcon';
import GoRightIcon from './icons/GoRightIcon';

interface CommandPaletteProps {
  availableCommands: Command[];
  onAddCommand: (command: Command) => void;
  disabled: boolean;
}

const commandMap = {
  forward: { icon: ArrowIcon, label: 'Avançar', color: 'bg-green-500 hover:bg-green-600' },
  backward: { icon: ArrowDownIcon, label: 'Recuar', color: 'bg-red-500 hover:bg-red-600' },
  left: { icon: TurnLeftIcon, label: 'Virar Esq.', color: 'bg-orange-500 hover:bg-orange-600' },
  right: { icon: TurnRightIcon, label: 'Virar Dir.', color: 'bg-purple-500 hover:bg-purple-600' },
  goUp: { icon: GoUpIcon, label: 'Cima', color: 'bg-sky-500 hover:bg-sky-600' },
  goDown: { icon: GoDownIcon, label: 'Baixo', color: 'bg-sky-500 hover:bg-sky-600' },
  goLeft: { icon: GoLeftIcon, label: 'Esquerda', color: 'bg-sky-500 hover:bg-sky-600' },
  goRight: { icon: GoRightIcon, label: 'Direita', color: 'bg-sky-500 hover:bg-sky-600' },
};

const CommandPalette: React.FC<CommandPaletteProps> = ({ availableCommands, onAddCommand, disabled }) => {
  return (
    <div className="bg-slate-100 p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-bold text-slate-700 mb-3 text-center">Comandos Disponíveis</h3>
      <div className="flex justify-center gap-4 flex-wrap">
        {availableCommands.map((command) => {
          const commandInfo = commandMap[command];
          if (!commandInfo) return null;
          const { icon: Icon, label, color } = commandInfo;
          return (
            <button
              key={command}
              onClick={() => onAddCommand(command)}
              disabled={disabled}
              className={`flex flex-col items-center justify-center p-3 w-20 h-20 text-white font-bold rounded-lg shadow-md transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 ${color}`}
              aria-label={`Adicionar comando ${label}`}
            >
              <Icon className="w-8 h-8 mb-1" />
              <span className="text-xs">{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CommandPalette;