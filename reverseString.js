// A small, clear implementation that exports a function named `solution`
// so the in-browser test runner will find it.

export function solution(s) {
  // Use split/reverse/join (handles Unicode code points correctly for simple BMP cases)
  // For full Unicode grapheme clusters you'd need a more advanced approach.
  return s.split('').reverse().join('');
}

// Also provide a default named function for older examples
export function reverseString(s) {
  return solution(s);
}
