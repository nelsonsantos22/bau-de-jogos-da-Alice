import React, { useState, useEffect, useCallback } from 'react';
import type { Command, RobotState, Position, Direction } from '../types';
import { ROBOT_LEVELS } from '../constants/robotLevels';
import HomeIcon from '../components/HomeIcon';
import Grid from '../components/robot-game/Grid';
import CommandPalette from '../components/robot-game/CommandPalette';
import CommandSequence from '../components/robot-game/CommandSequence';
import RobotGameControls from '../components/robot-game/RobotGameControls';
import ResultModal from '../components/robot-game/ResultModal';
import RefreshIcon from '../components/robot-game/icons/RefreshIcon';

interface RobotGamePageProps {
  onGoHome: () => void;
}

type GameStatus = 'idle' | 'running' | 'success' | 'fail';

const RobotGamePage: React.FC<RobotGamePageProps> = ({ onGoHome }) => {
  const [levelIndex, setLevelIndex] = useState(0);
  const [levelData, setLevelData] = useState(ROBOT_LEVELS[levelIndex]);
  const [robotState, setRobotState] = useState<RobotState>(levelData.start);
  const [sequence, setSequence] = useState<Command[]>([]);
  const [gameStatus, setGameStatus] = useState<GameStatus>('idle');
  const [modalInfo, setModalInfo] = useState<{ message: string, status: 'success' | 'fail' } | null>(null);
  const [currentObstacles, setCurrentObstacles] = useState<Position[]>(levelData.obstacles);

  const resetLevel = useCallback((obstacles = levelData.obstacles) => {
    const currentLevel = ROBOT_LEVELS[levelIndex];
    setLevelData(currentLevel);
    setRobotState(currentLevel.start);
    setCurrentObstacles(obstacles);
    setSequence([]);
    setGameStatus('idle');
    setModalInfo(null);
  }, [levelIndex, levelData.obstacles]);
  
  useEffect(() => {
    const currentLevel = ROBOT_LEVELS[levelIndex];
    setLevelData(currentLevel);
    setRobotState(currentLevel.start);
    setCurrentObstacles(currentLevel.obstacles);
    setSequence([]);
    setGameStatus('idle');
    setModalInfo(null);
  }, [levelIndex]);

  const handleRandomizeObstacles = () => {
    const { gridSize, start, goal } = levelData;
    const newObstacles: Position[] = [];
    const obstacleCount = Math.floor(gridSize * 1.5);
    const forbiddenPositions = new Set<string>();
    forbiddenPositions.add(`${start.position.x},${start.position.y}`);
    forbiddenPositions.add(`${goal.x},${goal.y}`);

    while (newObstacles.length < obstacleCount && newObstacles.length < (gridSize * gridSize - 2) ) {
      const x = Math.floor(Math.random() * gridSize);
      const y = Math.floor(Math.random() * gridSize);
      const posKey = `${x},${y}`;

      if (!forbiddenPositions.has(posKey)) {
        newObstacles.push({ x, y });
        forbiddenPositions.add(posKey);
      }
    }
    
    resetLevel(newObstacles);
  };

  const handleAddCommand = (command: Command) => {
    setSequence(prev => [...prev, command]);
  };

  const handleClearSequence = () => {
    setSequence([]);
  };
  
  const handleNextLevel = () => {
    if (levelIndex < ROBOT_LEVELS.length - 1) {
      setLevelIndex(prev => prev + 1);
    }
  }

  const runSequence = () => {
    setGameStatus('running');
    let currentRobotState = { ...levelData.start };
    let step = 0;

    const intervalId = setInterval(() => {
      if (step >= sequence.length) {
        // End of sequence, check if at goal
        const { x, y } = currentRobotState.position;
        if (x === levelData.goal.x && y === levelData.goal.y) {
          setGameStatus('success');
          setModalInfo({ status: 'success', message: 'Chegaste ao objetivo!' });
        } else {
          setGameStatus('fail');
          setModalInfo({ status: 'fail', message: "O robot não chegou à bandeira. Ajusta o teu programa!" });
        }
        clearInterval(intervalId);
        return;
      }

      const command = sequence[step];
      currentRobotState = getNextState(currentRobotState, command);
      setRobotState(currentRobotState);

      // Check for failure conditions
      const { x, y } = currentRobotState.position;
      const { gridSize } = levelData;
      if (x < 0 || x >= gridSize || y < 0 || y >= gridSize) {
        setGameStatus('fail');
        setModalInfo({ status: 'fail', message: 'O robot saiu da grelha!' });
        clearInterval(intervalId);
        return;
      }
      if (currentObstacles.some(obs => obs.x === x && obs.y === y)) {
        setGameStatus('fail');
        setModalInfo({ status: 'fail', message: 'O robot chocou contra um obstáculo!' });
        clearInterval(intervalId);
        return;
      }

      step++;
    }, 500);
  };
  
  const getNextState = (currentState: RobotState, command: Command): RobotState => {
    let { position, direction } = currentState;
    let { x, y } = position;

    if (command === 'forward') {
      if (direction === 'up') y--;
      if (direction === 'down') y++;
      if (direction === 'left') x--;
      if (direction === 'right') x++;
    } else if (command === 'backward') {
      if (direction === 'up') y++;
      if (direction === 'down') y--;
      if (direction === 'left') x++;
      if (direction === 'right') x--;
    } else if (command === 'left') {
      const newDir: Record<Direction, Direction> = { up: 'left', left: 'down', down: 'right', right: 'up' };
      direction = newDir[direction];
    } else if (command === 'right') {
      const newDir: Record<Direction, Direction> = { up: 'right', right: 'down', down: 'left', left: 'up' };
      direction = newDir[direction];
    } else if (command === 'goUp') {
        y--;
        direction = 'up';
    } else if (command === 'goDown') {
        y++;
        direction = 'down';
    } else if (command === 'goLeft') {
        x--;
        direction = 'left';
    } else if (command === 'goRight') {
        x++;
        direction = 'right';
    }
    
    return { position: { x, y }, direction };
  };

  const handleCloseModal = () => {
    if (gameStatus === 'fail') {
      // Reset robot to start but keep sequence for editing
      setRobotState(levelData.start);
      setGameStatus('idle');
    }
    setModalInfo(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-2 sm:p-4 relative">
      <button 
        onClick={onGoHome} 
        className="absolute top-4 left-4 bg-white/50 p-3 rounded-full shadow-md hover:bg-white transition-colors z-20"
        aria-label="Ir para o início"
      >
        <HomeIcon className="w-6 h-6 text-slate-700" />
      </button>

      {modalInfo && <ResultModal status={modalInfo.status} message={modalInfo.message} onClose={handleCloseModal} />}

      <div className="text-center mb-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight text-shadow">
          Robot Explorador
        </h1>
        <div className="flex items-center justify-center gap-4 mt-2">
            <p className="text-lg md:text-xl text-indigo-100 font-medium">
                Nível {levelIndex + 1}
            </p>
            <button
                onClick={handleRandomizeObstacles}
                disabled={gameStatus === 'running'}
                className="p-2 bg-white/50 rounded-full shadow-md hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Obstáculos Aleatórios"
                title="Obstáculos Aleatórios"
            >
                <RefreshIcon className="w-5 h-5 text-slate-700"/>
            </button>
        </div>
      </div>
      
      <main className="w-full max-w-4xl mx-auto flex flex-col lg:flex-row gap-4 items-start">
        <div className="w-full lg:w-1/2">
           <Grid
            gridSize={levelData.gridSize}
            robotState={robotState}
            goal={levelData.goal}
            obstacles={currentObstacles}
          />
        </div>
        <div className="w-full lg:w-1/2">
          <CommandPalette 
            availableCommands={levelData.availableCommands}
            onAddCommand={handleAddCommand}
            disabled={gameStatus === 'running'}
          />
          <CommandSequence 
            sequence={sequence}
            onClear={handleClearSequence}
            disabled={gameStatus === 'running'}
          />
          <div className="bg-slate-100 p-4 rounded-lg shadow-md mt-4">
            <h4 className="text-md font-bold text-slate-700 mb-2">Como Jogar</h4>
            <p className="text-sm text-slate-600">
                O teu objetivo é guiar o robot até à bandeira verde! 
                Adiciona comandos da paleta para construir um programa, 
                depois prime 'Executar Programa' para veres o robot a mover-se.
            </p>
          </div>
        </div>
      </main>

      <RobotGameControls 
        onRun={runSequence}
        onNextLevel={handleNextLevel}
        isGameWon={gameStatus === 'success'}
        isLastLevel={levelIndex === ROBOT_LEVELS.length - 1}
        disabled={gameStatus === 'running' || sequence.length === 0}
      />
      <style>{`
        .text-shadow {
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
};

export default RobotGamePage;