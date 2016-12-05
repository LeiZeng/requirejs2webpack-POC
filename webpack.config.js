module.exports = {
  entry: './index.js',
  output: {
    path: 'dist',
    filename: 'index.js'
  },
  resolve: {
    alias: {
      "three": "lib/three",
      'component': './component'
    }
  },
  module: {
    loaders: [
      {
        test: 'component',
        loader: 'exports?component!imports?jquery'
      }
    ]
  },
  externals: {
    jquery : "hello"
  },
  devServer: {
    contentBase: 'dist'
  }
}
