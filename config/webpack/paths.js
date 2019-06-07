const path = require('path');

const projectSrc = 'src';
const ROOT_PATH = process.cwd();
const BUILD_CACHE_PATH = path.join(ROOT_PATH, '.build-cache-web');

const paths = {
  rootPath: ROOT_PATH,
  projectSrcPath: path.join(ROOT_PATH, projectSrc),
  buildPath: path.join(ROOT_PATH, 'dist'),
  staticFilesPath: path.join(ROOT_PATH, 'assets'),
  babelCachePath: path.join(BUILD_CACHE_PATH, '.babel-cache'),
};

module.exports = {
  paths,
};
