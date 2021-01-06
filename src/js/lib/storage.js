import { Storage } from 'aws-amplify';

export const LIVE_MATRIX_FILE = 'matrix.bmp';

const uploadKey = (basename, { width = 64, height = 32 }) => (
  `/upload/${width}x${height}/${basename}.bmp`
);

export const uploadFile = (basename, data, {
  acl = 'public-read',
  level = 'protected',
  contentType = 'image/bmp'
}) => {
  const key = uploadKey(basename);
  return Storage.put(key, data, { acl, level, contentType });
}
