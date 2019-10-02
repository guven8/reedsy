module.exports = {
  entry: {
    app: './src/style.scss'
  },
  output: {
    // This is necessary for webpack to compile, but we never reference this js file.
    filename: 'style-bundle.js'
  },
  devServer: {
    publicPath: '/',
    contentBase: './public'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'style.css'
            }
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
};
