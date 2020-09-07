

# Laravel Mix Extract Media Queries

[![npm version](https://badge.fury.io/js/laravel-mix-extract-media-queries.svg)](https://badge.fury.io/js/laravel-mix-extract-media-queries)

A Laravel Mix Extension for [https://github.com/elambro/extract-css-media-queries]

## Installation

```
npm i -D laravel-mix-extract-media-queries
```

## Usage

```js

require('laravel-mix-extract-media-queries');
mix.extractMediaQueries({
    breakpoints: [{
        minWidth: 768,
        verbose : verbose, 
        minify  : mix.inProduction(),
        combined: true,
        filename: `css/large.css`,
    }]
});

```
This will extract all media queries with a min-width greater or equal to 768 and extract them to the `css/large.css` file

For options, see [https://github.com/elambro/extract-css-media-queries]
