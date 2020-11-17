import range from 'lodash.range';

export function fillGrid(rows, cols, r, g, b) {
  return Array(rows).fill({ r, g, b }).map(() => new Array(cols).fill({ r, g, b }));
}

export function fillWithGradient(rows, cols) {
  const data = fillGrid(rows, cols, 0, 0, 0);
  const color1 = { r: 70, g: 235, b: 70 };
  const color2 = { r: 225, g: 50, b: 225 };
  for (var col of range(cols)) {
    const percent = col / cols;
    const r = color1.r + percent * (color2.r - color1.r);
    const g = color1.g + percent * (color2.g - color1.g);
    const b = color1.b + percent * (color2.b - color1.b);
    console.log(`col ${col}: r=${r}, g=${g}, b=${b}`);
    for (var row of range(rows)) {
      data[row][col] = { r: Math.round(r), g: Math.round(g), b: Math.round(b) }; 
    }
  }
  return data;
}