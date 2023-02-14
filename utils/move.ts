import { addNewRandomField } from "./addNewRandomField";
import { mergeFields } from "./mergeFields";

export function move(direction: string, board: number[][]) {
  const matrix: number[][] = [...board];
  let newMatrix: number[][] = [];
  let isMovePossible: boolean = true;
  let score: number = 0;

  const rotateMatrix: number[][] =
    direction === "top" || direction === "bottom"
      ? matrix[0].map((val, index) => matrix.map((row) => row[index]))
      : matrix;

  rotateMatrix.map((row) => {
    const merge = mergeFields(row);
    score = score + merge.score;

    const emptyFields: number = 4 - merge.movedRow.length;

    for (let i = 0; i < emptyFields; i++) {
      if (direction === "top" || direction === "left") merge.movedRow.push(0);
      if (direction === "bottom" || direction === "right")
        merge.movedRow.unshift(0);
    }

    newMatrix.push(merge.movedRow);
  });

  if (direction === "top" || direction === "bottom")
    newMatrix = newMatrix[0].map((val, index) =>
      newMatrix.map((row) => row[index])
    );

  const findZeros: number[] = newMatrix.flat().filter((row) => row);

  if (findZeros.length !== 16) {
    addNewRandomField(newMatrix);
  } else {
    isMovePossible = false;
  }

  return { newMatrix, isMovePossible, score };
}
