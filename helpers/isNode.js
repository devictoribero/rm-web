const isNode = () =>
  typeof process !== 'undefined' &&
  process.release &&
  process.release.name === 'node'

export default isNode