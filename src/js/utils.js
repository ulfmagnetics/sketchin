import range from 'lodash.range';

export function fillGrid(rows, cols, r, g, b) {
  return Array(rows).fill({ r, g, b }).map(() => new Array(cols).fill({ r, g, b }));
}

export function fillWithGradient(rows, cols) {
  const data = fillGrid(rows, cols, 0, 0, 0);
  for (var col of range(cols)) {
    for (var row of range(rows)) {
      const color1 = { r: 255, g: 0, b: 0 };
      const color2 = { r: 0, g: 0, b: 255 };
      const rowPercent = row / rows;
      const colPercent = col / cols;
      const r = color1.r + rowPercent * (color2.r - color1.r);
      const g = color1.g + ((rowPercent + colPercent) / 2) * (color2.g - color1.g);
      const b = color1.b + colPercent * (color2.b - color1.b);
      data[row][col] = { r, g, b }; 
    }
  }
  return data;
}