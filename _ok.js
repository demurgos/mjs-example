// Rename to `ok.js` to act as if it was the result of the transpilation of `ok.mjs`

exports.default = function ok(cond) {
  console.assert(cond);
};
