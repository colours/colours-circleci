/**
 * Webpack shared config
 * The shared loaders, plugins, and processing that all our "apps" should use
 * for prod.
 */

// Theme
const theme = process.env.theme ? process.env.theme : 'base';
const cssFileName = process.env.theme ? `app-drupal-${  process.env.theme}` : 'app-drupal';

// Library Imports
const path = require('path');
const merge = require('webpack-merge');

// Custom Imports
const shared = require('./webpack.breda_university.dev.js');
const sassExportData = require('@theme-tools/sass-export-data')({
    name: 'export_data',
    path: path.resolve(__dirname, 'source/_data/'),
});

// Plugins
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const prod = {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist/assets/'),
        publicPath: '/themes/custom/breda_university/dist/assets/',
    },
    // See webpack.[app].prod.js for entry points
    module: {
        rules: [
            {
                // Wrapped with ExtractText to create a standalone file.
                test: /\.(sass|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {sourceMap: true, importLoaders: 2},
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                ident: 'postcss',
                                plugins: () => [
                                    autoprefixer(),
                                ],
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                                functions: sassExportData,
                                data: `$theme: ${ theme  };`,
                            },
                        },
                    ],
                }),
            },
        ],
    },
    plugins: [
        // Pulls out compile css to a standalone file
        new ExtractTextPlugin({
            filename: `${cssFileName}.styles.css`,
            allChunks: true,
        }),
    ],
};

module.exports = merge(shared, prod);
