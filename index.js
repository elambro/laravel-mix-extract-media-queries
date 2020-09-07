const ExtractMediaQueriesPlugin = require('@elambro/extract-css-media-queries')

const mix = require("laravel-mix");

// Wrapper for https://github.com/SassNinja/media-query-plugin

class ExtractMediaQueries {
    /**
     * The API name for the component.
     */
    name() {
        return 'extractMediaQueries';
    }

    /**
     * Required dependencies for the component.
     */
    dependencies() {
        return ['css', 'clean-css', 'print-message']
    }

    /**
     * Register the component.
     *
     * @param {*} src
     * @param {string} output
     * @param {Array} postCssPlugins
     */
    register(userConfig) {
        this.userConfig = userConfig;
    }

    /*
     * Plugins to be merged with the master webpack config.
     *
     * @return {Array|Object}
     */
    webpackPlugins() {
        return new ExtractMediaQueriesPlugin(this.config())
    }

    config() {
        return {
            ...this.userConfig
        }
    }
}

mix.extend('extractMediaQueries', new ExtractMediaQueries());

module.exports = ExtractMediaQueries;
