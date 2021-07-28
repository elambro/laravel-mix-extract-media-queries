

# Laravel Mix Extract Media Queries

[![npm version](https://badge.fury.io/js/laravel-mix-extract-media-queries.svg)](https://badge.fury.io/js/laravel-mix-extract-media-queries) [![GitHub version](https://badge.fury.io/gh/elambro%2Flaravel-mix-extract-media-queries.svg)](https://badge.fury.io/gh/elambro%2Flaravel-mix-extract-media-queries) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/elambro/laravel-mix-extract-media-queries/graphs/commit-activity)

A Laravel Mix Extension for [https://github.com/elambro/extract-css-media-queries].
This package extracts media queries (e.g. `@media (min-size: 768px) {...}`) from your CSS into separate stylesheets which you can use to lower package sizes for your mobile users.

You can then load this larger stylesheet(s) through a `<link>` tag:

```html
<link rel="stylesheet" media="screen and (min-width: 768px)" href="/style.css">
```
or load it dynamically through your js.

## Installation

```
npm i -D laravel-mix-extract-media-queries
```

## Usage

```js

require('laravel-mix-extract-media-queries');

//...

mix.extractMediaQueries({
    hash: '[name].[contenthash].css',
    breakpoints: [{
        minWidth: 768,
        verbose : false,
        minify  : mix.inProduction(),
        combined: true,
        filename: `css/large.css`,
    }]
});

```
This will extract all media queries with a min-width greater or equal to 768 and extract them to the `css/large.css` file

## Examples

1.

`const options = {breakpoints:[567,767]}`

Will give you 3 files:
-  `style.css`       - Common style, with all media queries `@media (min-width: 567px)` and higher extracted out.
- `style-767.css`  - Only media queries `@media(min-width: 767px)` and above. e.g. `@media(min-width: 800px)` is also included.
- `style-567.css` -  Only media queries `@media(min-width: 567px)` up to `@media(min-width: 767px)`

Duplicate media queries are merged in the results, then they're sorted with the highest `min-width` (and `min-height`) media queries at the bottom of the file.

2.

```js
{
    groups: [
        {
            breakpoints:[
                {
                    minWidth: 640,
                    filename: 'css/utilities-sm.[ext]',
                },
                {
                    minWidth: 768,
                    filename: 'css/utilities-md.[ext]',
                },
                {
                    minWidth: 1024,
                    filename: 'css/utilities-lg.[ext]',
                },
                {
                    minWidth: 1280,
                    filename: 'css/utilities-xl.[ext]',
                },
                {
                    minWidth: 1500,
                    filename: 'css/utilities-2xl.[ext]',
                },
            ],
            include : '/css/utilities.css',
            combined : false,
            verbose : true,
            minify  : mix.inProduction(),
        },
    ]
}

```js

## Webpack

For options, see the webpack plugin [https://github.com/elambro/extract-css-media-queries]
