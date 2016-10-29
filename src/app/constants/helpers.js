import { API_DOMAIN } from './paths';

export function apiUrl(path) {
  return `${API_DOMAIN}/${path}`;
};
