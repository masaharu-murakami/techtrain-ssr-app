const path = require('path');

module.exports = {
  entry: './server/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-modules-commonjs']
          }
        }
      }
    ]
  },
  target: 'node',
  mode: 'production',  // 'development' に変更することで開発モードにできます
};
