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
          "plugins": [
            ["@babel/plugin-proposal-class-properties", { "loose": true }]
          ],
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
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    public: 'sketchin.glitch.me'
  }
};