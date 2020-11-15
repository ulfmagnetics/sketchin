const path = require('path');

module.exports = {
  context: path.join(__dirname, './'),
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: path.join(__dirname, '.'),
        options: {
          presets: [
            ['@babel/preset-env', { targets: "defaults" }],
            ['@babel/preset-react', { targets: "defaults" }]
          ]
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000
  },
};