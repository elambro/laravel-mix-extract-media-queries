const ExtractCssMediaQueriesPlugin = require('@elambro/extract-css-media-queries')

const mix = require("laravel-mix");

class ExtractCssMediaQueries {

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
        this.plugin     = new ExtractCssMediaQueriesPlugin(this.config());
    }

    /*
     * Plugins to be merged with the master webpack config.
     *
     * @return {Array|Object}
     */
    webpackPlugins() {

        const plugin = this.plugin;

        return [
            plugin,
            new class {
                apply(compiler) {
                    // Works with
                    compiler.hooks.emit.tapAsync('ExtractCssMediaQueriesPlugin', (curCompiler, callback) => {
                        Object.entries(plugin.created).forEach(([name, path]) => {
                            Mix.manifest.addRaw ? Mix.manifest.addRaw(name, path) : Mix.manifest.manifest[name] = path;
                        });
                        callback();
                    });
                }
            }
        ]
    }

    config() {
        return {
            ...this.userConfig
        }
    }
}

mix.extend('extractMediaQueries', new ExtractCssMediaQueries());

module.exports = ExtractCssMediaQueries;
