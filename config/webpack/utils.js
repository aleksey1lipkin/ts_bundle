const ensureSlash = (path, needsSlash = false) => {
  if (!path) {
    throw new Error('The path variable is required but was not specified.');
  }
  const hasSlash = path.endsWith('/');
  if (hasSlash && !needsSlash) {
    return path.slice(0, -1);
  }
  if (!hasSlash && needsSlash) {
    return `${path}/`;
  }
  return path;
};

module.exports = {
  ensureSlash,
};
