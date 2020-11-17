import range from 'lodash.range';

export function fillGrid(rows, cols, r, g, b) {
  return Array(rows).fill({ r, g, b }).map(() => new Array(cols).fill({ r, g, b }));
}

export function fillWithGradient(rows, cols) {
  const data = fillGrid(rows, cols, 0, 0, 0);
  for (var col of range(cols)) {
    for (var row of range(rows)) {
      data[row][col] =  
    }
  }
  return data;
}