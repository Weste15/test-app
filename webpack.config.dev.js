var path = require('path');
webpack = require ('webpack');

module.exports  =  {
  devtool: 'inline-source-map',
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    path.resolve(__dirname, 'app.js')
  ],
  target: 'web',
  output: {
    path: '/',
    publicPath: 'http://localhost:3000/views/',
    filename: 'bundle.js'
  },
  plugins: [

  ],
  module: {
    rules: [
      {
          test: /\.js$/, 
          exclude: /node_modules/, 
          loaders: ['babel-loader']
    },
    {
        test: /\.ejs$/,
        loader: 'ejs-loader'} 
    ]
  }
};