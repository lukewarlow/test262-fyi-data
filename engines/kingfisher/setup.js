import { $ } from '../../util.js';

export default async () => {
  return {
    version: $('./kingfisher --version').split('\n')[0].trim().replace('Kingfisher ', '')
  };
};
