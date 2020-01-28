import webpack, { Configuration as WebpackConfiguration } from 'webpack';
import nodeExternals from 'webpack-node-externals';
import * as path from 'path';

// Webpack plugins:
import TerserPlugin from 'terser-webpack-plugin';

// Misc imports:
const isWsl = require('is-wsl');

// Delete env var pointing to `tsconfig.webpack.json` so that `ts-loader`
// will use default file `tsconfig.json` instead
delete process.env.TS_NODE_PROJECT;

//=================================//
// Build Webpack Config For Client //
//=================================//

export const clientWebpackConfig: WebpackConfiguration = {
  entry: [
    // Path to entry file relative to this file
    path.resolve(__dirname, '..', 'index.ts')
  ],

  output: {
    // filename: '[name].[contenthash].js',
    filename: 'lambda.js',
    // Path relative to executable launch point
    path: path.resolve('dist-lambda'),
    // Ensure bundle has exportable module
    libraryTarget: 'commonjs'
  },

  externals: [
    nodeExternals({
      whitelist: [
        // Include here string names of any node packages you want to include in bundle
        // You do NOT need 'aws-sdk' libraries!
        'tslib'
      ]
    })
  ],

  target: 'node', // See: https://webpack.js.org/concepts/targets/

  // devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.js'],

    alias: {},

    plugins: []
  },

  module: {
    rules: [
      {
        test: /\.(js|ts)?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true, // Don't complain about ts errors, just transpile
              happyPackMode: true
            }
          }
        ].filter(Boolean) as webpack.RuleSetUse,
        exclude: [/node_modules/]
      }
    ]
  },

  plugins: [].filter(Boolean) as webpack.Plugin[],

  optimization: {
    minimize: !true, // Apply minimizer[] only in prod
    minimizer: [
      // Taken (mostly) from ejected `create-react-app --typescript` (v3.0.0)
      new TerserPlugin({
        terserOptions: {
          parse: {
            // we want terser to parse ecma 8 code. However, we don't want it
            // to apply any minification steps that turns valid ecma 5 code
            // into invalid ecma 5 code. This is why the 'compress' and 'output'
            // sections only apply transformations that are ecma 5 safe
            // https://github.com/facebook/create-react-app/pull/4234
            ecma: 8
          },
          compress: {
            ecma: 5, // mb added
            warnings: false,
            // Disabled because of an issue with Uglify breaking seemingly valid code:
            // https://github.com/facebook/create-react-app/issues/2376
            // Pending further investigation:
            // https://github.com/mishoo/UglifyJS2/issues/2011
            comparisons: false,
            // Disabled because of an issue with Terser breaking valid code:
            // https://github.com/facebook/create-react-app/issues/5250
            // Pending futher investigation:
            // https://github.com/terser-js/terser/issues/120
            inline: 2
          } as any,
          mangle: {
            safari10: true
          },
          output: {
            ecma: 5,
            comments: false,
            // Turned on because emoji and regex is not minified properly using default
            // https://github.com/facebook/create-react-app/issues/2488
            ascii_only: true
          }
        },
        // Use multi-process parallel running to improve the build speed
        // Default number of concurrent runs: os.cpus().length - 1
        // Disabled on WSL (Windows Subsystem for Linux) due to an issue with Terser
        // https://github.com/webpack-contrib/terser-webpack-plugin/issues/21
        parallel: !isWsl,
        // Enable file caching
        cache: true,
        sourceMap: true
      })
    ]
    // Automatically split vendor and commons
    // https://twitter.com/wSokra/status/969633336732905474
    // https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
    // splitChunks: {
    //   name: true,
    //   cacheGroups: {
    //     commons: {
    //       chunks: 'initial',
    //       minChunks: 20
    //     },
    //     vendors: {
    //       test: /[\\/]node_modules[\\/]/,
    //       chunks: 'all',
    //       name: 'vendors'
    //     }
    //   }
    // }
  }
};

export default clientWebpackConfig;
