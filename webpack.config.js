module.exports = {
	entry: './src/app.js',
	output: {
		filename: './dist/bundle.js'
	},
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: { 
          presets: [ 
            [ 'es2015', { modules: false } ] 
          ] 
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  }
}