//import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// export
module.exports = {
  //parcel index.html
  //파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js',

  //결과물(번들)을 변환하는 설정
  output: {
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js',
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader', //후처리기, 다양한 플러그인을 수행할 환경일뿐임.
          'sass-loader'//전처리기
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'  //js compiler 최신버전 js문법도 브라우저가 이해할수 있게 변환해줌(es6, es7 => es5)
        ]
      }
    ]
  },

  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        {  from: 'static' }
      ]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}