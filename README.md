

# Laravel Mix Extract Media Queries

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

For options, see [https://github.com/elambro/extract-css-media-queries]