import { getRandomPositions } from "./getRandomPositions";
import { rollInitialValue } from "./rollInitialValue";

export function addNewRandomField(board: number[][]) {
  const matrix: number[][] = [...board];
  const position: number[] = getRandomPositions();

  if (matrix[position[0]][position[1]] === 0) {
    matrix[position[0]][position[1]] = rollInitialValue();
    return matrix;
  } else {
    addNewRandomField(matrix);
  }
}
