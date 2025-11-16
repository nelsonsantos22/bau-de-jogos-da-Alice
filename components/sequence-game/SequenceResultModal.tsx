import React from 'react';
import StarIcon from '../StarIcon';

interface SequenceResultModalProps {
  status: 'correct' | 'incorrect';
  onNextLevel: () => void;
  onTryAgain: () => void;
  isLastLevel: boolean;
}

const SequenceResultModal: React.FC<SequenceResultModalProps> = ({ status, onNextLevel, onTryAgain, isLastLevel }) => {
  const isCorrect = status === 'correct';
  
  const title = isCorrect ? (isLastLevel ? 'Tudo Concluído!' : 'Correto!') : 'Quase!';
  const message = isCorrect ? "És uma estrela das sequências!" : "Essa não é a ordem correta. Tenta novamente!";
  const buttonText = isCorrect ? (isLastLevel ? 'Jogar Novamente' : 'Próximo Nível') : 'Tentar Novamente';
  const buttonAction = isCorrect ? onNextLevel : onTryAgain;

  return (
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-30 p-4">
      <div
        className={`text-white rounded-2xl shadow-2xl p-8 text-center max-w-sm w-full transform transition-all scale-100 animate-jump-in ${
          isCorrect
            ? 'bg-gradient-to-br from-green-400 to-teal-500'
            : 'bg-gradient-to-br from-rose-500 to-orange-600'
        }`}
      >
        <h2 className="text-4xl font-extrabold mb-2">{title}</h2>
        {isCorrect && (
          <div className="flex justify-center my-4">
            <StarIcon className="w-8 h-8 text-yellow-300 mx-1" />
            <StarIcon className="w-10 h-10 text-yellow-300" />
            <StarIcon className="w-8 h-8 text-yellow-300 mx-1" />
          </div>
        )}
        <p className="text-lg mb-6">{message}</p>
        <button
          onClick={buttonAction}
          className="w-full px-6 py-4 bg-white text-green-600 font-extrabold text-lg rounded-lg shadow-md hover:bg-yellow-200 transition-all duration-200 transform hover:scale-105"
        >
          {buttonText}
        </button>
      </div>
       <style>{`
          @keyframes jump-in {
            0% { transform: scale(0.5); opacity: 0; }
            80% { transform: scale(1.05); opacity: 1; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-jump-in {
            animation: jump-in 0.5s ease-out forwards;
          }
       `}</style>
    </div>
  );
};

export default SequenceResultModal;