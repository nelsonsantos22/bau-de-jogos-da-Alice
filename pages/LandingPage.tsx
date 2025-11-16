import React from 'react';
import type { Game } from '../App';

interface LandingPageProps {
  onPlayGame: (game: 'memory' | 'robot' | 'shape' | 'category' | 'builder' | 'sequence') => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onPlayGame }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <header className="mb-12">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight text-shadow">
          Baú de Jogos da Alice!
        </h1>
        <p className="text-xl md:text-2xl text-indigo-100 font-medium mt-4">
          Escolhe um jogo para jogar!
        </p>
      </header>
      
      <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {/* Memory Game Card */}
          <div 
            className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
            onClick={() => onPlayGame('memory')}
          >
            <div className="text-7xl mb-4">🧠</div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Mania da Memória</h2>
            <p className="text-slate-600 mb-4">Encontra todos os pares!</p>
            <button className="w-full mt-auto px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition-colors duration-200">
              Jogar Agora
            </button>
          </div>

          {/* Robot Game Card */}
           <div 
            className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
            onClick={() => onPlayGame('robot')}
          >
            <div className="text-7xl mb-4">🤖</div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Robot Explorador</h2>
            <p className="text-slate-600 mb-4">Programa o robot para chegar à bandeira!</p>
            <button className="w-full mt-auto px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200">
              Jogar Agora
            </button>
          </div>
          
          {/* Shape Sorter Game Card */}
          <div
            className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
            onClick={() => onPlayGame('shape')}
          >
            <div className="text-7xl mb-4">🎨</div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Organizador de Formas</h2>
            <p className="text-slate-600 mb-4">Arrasta as formas para os seus lugares!</p>
            <button className="w-full mt-auto px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg shadow-md hover:bg-yellow-600 transition-colors duration-200">
              Jogar Agora
            </button>
          </div>

           {/* Category Sort Game Card */}
          <div
            className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
            onClick={() => onPlayGame('category')}
          >
            <div className="text-7xl mb-4">🧺</div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Ordenar por Categoria</h2>
            <p className="text-slate-600 mb-4">Coloca os itens nos caixotes certos!</p>
            <button className="w-full mt-auto px-6 py-3 bg-pink-500 text-white font-bold rounded-lg shadow-md hover:bg-pink-600 transition-colors duration-200">
              Jogar Agora
            </button>
          </div>

          {/* City Scape Game Card */}
          <div
            className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
            onClick={() => onPlayGame('builder')}
          >
            <div className="text-7xl mb-4">🏙️</div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Paisagem Urbana</h2>
            <p className="text-slate-600 mb-4">Desenha e constrói a tua própria cidade!</p>
            <button className="w-full mt-auto px-6 py-3 bg-teal-500 text-white font-bold rounded-lg shadow-md hover:bg-teal-600 transition-colors duration-200">
              Jogar Agora
            </button>
          </div>

          {/* Sequence Story Game Card */}
          {/*<div
            className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
            onClick={() => onPlayGame('sequence')}
          >
            <div className="text-7xl mb-4">🔢</div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">História em Sequência</h2>
            <p className="text-slate-600 mb-4">Coloca as imagens na ordem certa!</p>
            <button className="w-full mt-auto px-6 py-3 bg-orange-500 text-white font-bold rounded-lg shadow-md hover:bg-orange-600 transition-colors duration-200">
              Jogar Agora
            </button>
          </div>*/}
        </div>
      </main>

       <style>{`
        .text-shadow {
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
};

export default LandingPage;