import stringify from '../util/stringify';

export default function print(...args) {
  const stringifiedArgs = args.map(stringify);
  console.log(...stringifiedArgs);
}
