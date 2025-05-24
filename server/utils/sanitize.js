module.exports = function sanitize(input) {
  if (typeof input !== 'string') return '';
  return input
    .replace(/[<>\/\\'"`$;]/g, '')    // remove dangerous characters
    .replace(/\s{2,}/g, ' ')           // normalize excessive spacing
    .trim();
};
