const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map', // Facilite le débogage en mappant le code compilé au code source original
  devServer: {
    static: './dist',
    open: true, // Ouvre automatiquement le navigateur
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Mon Application',
      template: 'src/index.html', // Utilisez ceci si vous avez un fichier HTML spécifique comme template
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Nettoie le dossier de sortie avant de générer de nouveaux fichiers
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
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
