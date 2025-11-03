// Plain function definitions (no ES module exports) so the in-page runner can eval them.
// The runner looks for `solution` first, then `reverseString`.

function solution(s) {
  // Use split/reverse/join. Note: for full Unicode grapheme clusters use a proper grapheme splitter.
  return s.split('').reverse().join('');
}

function reverseString(s) {
  return solution(s);
}

// Expose to window/global in case runner checks global scope
if (typeof window !== 'undefined') {
  window.solution = solution;
  window.reverseString = reverseString;
}
