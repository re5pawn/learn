'use strict';

const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || 'development';
const LANG = process.env.LANG || 'en';

/*
  multicompilation: array of configs instead single config;
  will be useful for diferent bundles
  e.g: config for styles/scripts/images, for l10n
*/
//module.exports = [config01, config02, configN];

module.exports = {
  /*
    a base folder to write paths in "entry"
    without it
  */
  context: __dirname + '/src',

  /*
    module name(s)
  */
  // string for single module
  //entry: './home',

  // object for lots of modules
  entry: {
    home: './home',
    about: './about',

    // our own common code;
    // will be added to bundled "common.js" file
    common: './common'
  },

  output: {
    /*
      dist folder
    */
    path: __dirname + '/public',

    /*
      output filename
    */
    // for single bundle
    //filename: 'build.js',

    // for individual files
    // output: home.js, about.js, common.js ...
    filename: '[name].js',
    
    /*
      a variable for access to module from global scope;
      here will be "module.exports" code
    */
    // for single bundle
    //library: 'home',

    // for individual files
    library: '[name]'
  },

  /*
    watch and recompilation only for development mode
  */
  watch: NODE_ENV === 'development',

  watchOptions: {
    /*
      a timeout before start build;
      300 by default
    */
    aggregateTimeout: 100
  },

  /*
    source map options:
    "cheap-source-map" - good for production (if that's need)
    "cheap-inline-module-source-map" - good for development
  */
  devtool: NODE_ENV === 'development' ?  'cheap-inline-module-source-map' : null,

  plugins: [
    /*
      will send environment variables for using in bundled code
      e.g: NODE_ENV=development webpack
           if (process.env.NODE_ENV === 'development') { console.log('something'); }
    */
    //new webpack.EnvironmentPlugin('NODE_ENV')

    /*
      use instead EnvironmentPlugin for more flexible setting
    */
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
      LANG: JSON.stringify(LANG)
      // or 
      //LANG: JSON.stringify('"en"')
    }),

    /*
      when errors happened, bundled files will not created
    */
    new webpack.NoErrorsPlugin(),

    /*
      for separate a common parts to external file
    */
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      /*
        if a common parts used at least in 2 modules
        it will be an external file
      */
      //minChunks: 2,

      /*
        a clear indication to which files need for common module
      */
      //chunks: ['about', 'home']
    })
  ],

  resolve: {
    /*
      default module directory (if path not specified)
    */
    modulesDirectories: ['node_modules'],

    /*
      which files will check
    */
    extensions: ['', '.js', '.ts']
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'],

    /*
      a mask for finding loaders
    */
    moduleTemplates: ['*-loader', '*'],
    extensions: ['', '.js']
  },

  module: {
    loaders: [
      /*
        babel loader
      */
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,

        // optional[]=runtime - separate Babel's utils to external module
        // to prevent a duplication of code
        loader: 'babel?optional[]=runtime',
        query: {
          presets: ['es2015']
        }
      },
      /*
        typescript loader
      */
      {
        test: /\.ts$/,
        loader: 'ts'
      }
    ]
  }
};

/*
  plugins for production mode
*/
if (NODE_ENV === 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  );
}

/*
  show extra info about build
*/
// webpack --display-modules -v

/*
  analyse statistic
*/
// 1. webpack --json --profile >stats.json
// 2. http://webpack.github.io/analyse/
// 3. open stats.json
