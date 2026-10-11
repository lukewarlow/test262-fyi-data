import { $$ } from '../../util.js';

export default (file, module = false) => {
  const args = [ '--test262', file ];
  // if (module) args.unshift('--module');

  return $$('./kingfisher', args);
};