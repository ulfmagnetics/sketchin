export const zeroPad = (num, padding = 2) => ("0".repeat(padding) + num).slice(-padding);

export const rgbToHex = ({r, g, b}) => `${zeroPad(r.toString(16))}${zeroPad(g.toString(16))}${zeroPad(b.toString(16))}`;
