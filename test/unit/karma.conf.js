var webpackConfig = require('../../webpack.config');

module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],

        files: [
            '*.js',
        ],

        preprocessors: {
            '*.js': ['webpack']
        },

        browsers: ['Chrome', 'Firefox'],

        webpack: webpackConfig
    })
}
