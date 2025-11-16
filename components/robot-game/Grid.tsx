import React from 'react';
import type { Position, RobotState } from '../../types';
import RobotIcon from './icons/RobotIcon';
import FlagIcon from './icons/FlagIcon';

interface GridProps {
  gridSize: number;
  robotState: RobotState;
  goal: Position;
  obstacles: Position[];
}

const Grid: React.FC<GridProps> = ({ gridSize, robotState, goal, obstacles }) => {
  const cells = Array.from({ length: gridSize * gridSize });

  const isObstacle = (x: number, y: number) => {
    return obstacles.some(obs => obs.x === x && obs.y === y);
  };

  return (
    <div
      className="grid bg-slate-200/50 rounded-lg p-2 shadow-inner"
      style={{
        gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${gridSize}, minmax(0, 1fr))`,
      }}
    >
      {cells.map((_, index) => {
        const x = index % gridSize;
        const y = Math.floor(index / gridSize);

        const isRobotPosition = robotState.position.x === x && robotState.position.y === y;
        const isGoalPosition = goal.x === x && goal.y === y;

        return (
          <div
            key={index}
            className="aspect-square flex items-center justify-center border border-slate-300/50"
          >
            {isObstacle(x, y) && <div className="w-full h-full bg-slate-600 rounded-sm"></div>}
            {isGoalPosition && <FlagIcon className="w-3/4 h-3/4 text-green-500" />}
            {isRobotPosition && <RobotIcon className="w-full h-full text-blue-600 z-10" direction={robotState.direction}/>}
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
