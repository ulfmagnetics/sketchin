import { Storage } from 'aws-amplify';

export const LIVE_MATRIX_FILE = 'matrix.bmp';

export const UPLOAD_PATH = '/upload/64x32'; // TODO: parameterize these dimensions

export const uploadPath = (basename) => `${UPLOAD_PATH}/${basename}.bmp`;

export function uploadFile(key, data, { acl = 'public-read', level = 'protected', contentType = 'image/bmp' }) {
  Storage.put(key, data, { acl, level, contentType })
}
