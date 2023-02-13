export function mergeFields(row: number[]) {
  const movedRow: number[] = row.flat().filter((row) => row);
  let score: number = 0;

  movedRow.map((field, index) => {
    if (field === movedRow[index + 1]) {
      movedRow[index] = field * 2;
      score = score + field * 2;
      movedRow.splice(index + 1, 1);
    }
  });

  return { movedRow, score };
}
