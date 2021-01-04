import range from 'lodash.range';

import { rgbToHex } from '../core/utils';
import { bmp_rgb } from '../lib/jsbmp';
import { uploadFile, LIVE_MATRIX_FILE } from '../lib/storage';

const fillGrid = (rows, cols, r, g, b) => {
  return Array(rows).fill({ r, g, b }).map(() => new Array(cols).fill({ r, g, b }));
}

const fillWithGradient = (rows, cols, { color1, color2 }) => {
  const data = fillGrid(rows, cols, 0, 0, 0);

  const calc = (factor, row, color) => {
    const delta = factor * row / rows;
    return Math.round(Math.min(255, delta + color));
  }

  for (var col of range(cols)) {
    const percent = col / cols;
    const r = color1.r + percent * (color2.r - color1.r);
    const g = color1.g + percent * (color2.g - color1.g);
    const b = color1.b + percent * (color2.b - color1.b);
    for (var row of range(rows)) {
      data[row][col] = { r: calc(255, row, r), g: calc(0, row, g), b: calc(0, row, b) };
    }
  }
  return data;
}

export function bitmapWithGradient(rows, cols, { index = 0 }) {
  const colors = [
    { color1: { r: 0, g: 235, b: 70 }, color2: { r: 225, g: 50, b: 50 } }, // gradient 1
    { color1: { r: 235, g: 0, b: 70 }, color2: { r: 50, g: 225, b: 50 } }, // gradient 2
  ];
  return new Bitmap(rows, cols, fillWithGradient(rows, cols, colors[index]));
}

class Bitmap {
  constructor(rows, cols, data = fillGrid(rows, cols, 0, 0, 0)) {
    this.rows = rows;
    this.cols = cols;
    this.data = data;
  }

  getData() {
     return this.data;
  }

  publish() {
    const pixels = this.data.reverse().flat().map(rgbToHex);
    const bmp = bmp_rgb(this.cols, this.rows, pixels);
    const data = new Uint8Array(Buffer.from(bmp, 'binary')); // eslint-disable-line
    uploadFile(LIVE_MATRIX_FILE, data);
  }
}

export default Bitmap;
