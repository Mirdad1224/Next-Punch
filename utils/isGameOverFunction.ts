import { move } from "./move";

export function isGameOverFunction(board: number[][]) {
  if (
    !move("top", board).isMovePossible &&
    !move("bottom", board).isMovePossible &&
    !move("left", board).isMovePossible &&
    !move("right", board).isMovePossible
  ) {
    return true;
  } else {
    return false;
  }
}
