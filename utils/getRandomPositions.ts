export function getRandomPositions() {
  const position: number[] = [
    Math.floor(Math.random() * 4),
    Math.floor(Math.random() * 4),
  ];

  return position;
}
