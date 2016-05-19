export default function combinations(...iterators) {
  const last = iterators.pop();

  if (iterators.length === 0) {
    return last.map(x => [x]);
  }
  const combs = combinations(...iterators);
  return combs
    .map(combination => last.map(l => [...combination, l]))
    .reduce((p, n) => p.concat(n), []);
}
