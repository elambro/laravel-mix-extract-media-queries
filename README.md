

# Laravel Mix Extract Media Queries

A Laravel Mix Extension for [https://github.com/elambro/extract-css-media-queries]

## Installation

```
npm i -D laravel-mix-extract-media-queries
```

## Usage

```js

require('./laravel-mix-extract-media-queries');

mix.extractMediaQueries({
    verbose : !mix.inProduction(), 
    minify  : mix.inProduction(),
    filename: `css/large.css`,
    combined: true,
    breakpoints: [768]
});

```

For options, see [https://github.com/elambro/extract-css-media-queries]