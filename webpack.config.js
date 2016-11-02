var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var UnminifiedWebpackPlugin = require('unminified-webpack-plugin');
var argv = require('yargs').argv;

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(
      (argv.production) ? 'production' : 'development'
    )
  })
];

if (argv.production) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    new UnminifiedWebpackPlugin()
  );
}

module.exports = {
  watch:   true,
  context: __dirname + "/",
  entry: [
    __dirname + '/app/js/app.babel.jsx'
  ],
  module: {
    preLoaders: [
      {
        exclude: /src\//,
        loader: 'source-map'
      }
    ],
    loaders: [
      { test: /\.(json)$/, exclude: /node_modules/, loaders: ['json-loader'] },
      { test: /\.(jsx|.js|babel.jsx|babel.js)$/,
        exclude: /(node_modules)|(vendors)/,
        loaders:  ['babel-loader', 'eslint-loader']
      },
      { test: /\.(postcss.css)$/,  loader: "style-loader!css-loader!postcss-loader" },
      { test: /\.html$/, loader: 'raw-loader' },
      {
        test: /\.(eot|woff|ttf|svg|png|jpg|wav|mp3)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]',
      }
    ]
  },
  postcss: function () {
      return {
          defaults: [ require('precss'),
                      require('postcss-cssnext'),
                      require('postcss-modules'),
                      require('postcss-automath'),
                      require('postcss-custom-media')
                    ],
          cleaner:  [autoprefixer({ browsers: ['last 2 versions', 'ie9'] })]
      };
  },
  output: {
    path:           __dirname + '/app/build/',
    filename:       'guarantee-rate-game.js',
    publicPath:     'build/',
    library:        'guarantee-rate-game',
    libraryTarget:  'umd',
    umdNamedDefine: true,
  },
  plugins: plugins,
  resolve: {
    root: [ path.resolve('./') ],
    moduleDirectories: ['node_modules', 'vendors'],
    target: 'node',
    extensions: [
      '', '.js', '.babel.js', '.babel.jsx',
      '.postcss.css', '.css', '.json'
    ]
  }
};
  