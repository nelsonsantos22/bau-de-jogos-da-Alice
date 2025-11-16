import React from 'react';
import { BUILDER_ELEMENTS } from '../../constants/builderElements';
import DraggableBlock from './DraggableBlock';

const BlockPalette: React.FC = () => {
  return (
    <div className="h-full bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg p-4 flex flex-col">
      <h2 className="text-xl font-bold text-slate-700 text-center mb-4">Peças da Cidade</h2>
      <div className="flex-grow overflow-y-auto pr-2">
        <div className="grid grid-cols-2 gap-4">
          {BUILDER_ELEMENTS.map(element => (
            <DraggableBlock key={element.id} element={element} />
          ))}
        </div>
      </div>
       <style>{`
        /* Custom scrollbar for webkit browsers */
        div::-webkit-scrollbar {
            width: 8px;
        }
        div::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 10px;
        }
        div::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.6);
            border-radius: 10px;
        }
        div::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.8);
        }
       `}</style>
    </div>
  );
};

export default BlockPalette;