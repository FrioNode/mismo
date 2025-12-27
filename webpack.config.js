const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'umd'),
    filename: 'mismo.min.js',
    library: 'mismo',
    libraryTarget: 'umd',
    globalObject: "this"
  }
};