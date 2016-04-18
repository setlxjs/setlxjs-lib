export default function range(start, end) {
  const ret = [];
  for (let i = start; i <= end; ++i) {
    ret.push(i);
  }
  return ret;
}
