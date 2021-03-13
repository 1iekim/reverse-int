module.exports = function reverse (n) {
  return (n > 0) ? (n+'').split('').reverse().join('') : (n * - 1 +'').split('').reverse().join('');
}
