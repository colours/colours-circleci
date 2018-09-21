/**
 * Pattern Lab-specific webpack config.
 * This is merged over top of webpack.breda_university.prod.js and
 * outputs compiled bundles to breda_university/dist/assets.
 */

// Library Imports
const merge = require('webpack-merge');

// Custom Imports
const bredaUniversity = require('../../webpack.breda_university.prod');
const pl = require('./webpack.pl.shared');

const prod = {};

module.exports = merge(bredaUniversity, pl, prod);
