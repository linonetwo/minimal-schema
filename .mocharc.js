'use strict';

module.exports = {
  diff: true,
  'watch-files': ['test/**/*.ts', 'src/**/*.ts'],
  recursive: ['test/**/*.ts'],
  package: './package.json',
  reporter: 'nyan',
  slow: 75,
  timeout: 2000,
  ui: 'bdd'
};
