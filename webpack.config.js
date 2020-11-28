const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDirectory = fs.realpathSync(process.cwd());
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  context: path.join(__dirname, './'),
  entry: './src/js/main.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.mjs', '.js', '.jsx'],
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
        test: /\.js$/,
        enforce: 'pre',
        use: [
          {
            loader: 'source-map-loader',
            options: {
              filterSourceMappingUrl: (url, resourcePath) => {
                // skip some problematic source maps
                if (/aws\-sdk/i.test(resourcePath)) {
                  return false;
                }
                return true;
              },
            },
          }
        ]
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: resolveAppPath('public/index.html'),
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    publicPath: '/',
    compress: true,
    hot: true,
    //public: 'sketchin.glitch.me',
    port: 9000,
  }
};
