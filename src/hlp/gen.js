import Generator from '../class/Generator';

export default function gen(...args) {
  return new Generator(args);
}
