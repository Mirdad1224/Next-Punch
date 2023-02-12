export function rollInitialValue(): number {
  const randomNumber: number = Math.floor(Math.floor(Math.random() * 4) + 1);

  return randomNumber === 1 ? 4 : 2;
}
