const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'umd'),
    filename: 'string-compare.min.js',
    library: 'stringCompare',
    libraryTarget: 'umd',
    globalObject: "this"
  }
};