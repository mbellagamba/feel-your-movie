import defaultImage from '../../images/camera.jpg';
import { IMAGES_URL } from '../api';

export function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    // eslint-disable-next-line no-bitwise
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

export function movieImage(path) {
  return path ? `${IMAGES_URL}${path}` : defaultImage;
}
