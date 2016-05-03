# koa-static-plus

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

 Koa static file serving middleware, a modify of koa-static

## Installation

```bash
$ npm install koa-static-plus
```

## API

*TOTALLY compatible to koa-static*

## Additional Options

- `pathPrefix` (string), Static path prefix string.

## Example

```js
import koaStaticPlus from 'koa-static-plus'
// ... app = koa()

app.use(koaStaticPlus(path.join(__dirname, '../public'), {
  pathPrefix: '/static'
})

// $ GET /static/hello.txt
// will to send the file ../public/hello.txt
```

## Author 
    
    @Ling.(wssgcg1213)

## Liscense 
 
    MIT
    
[npm-image]: https://img.shields.io/npm/v/koa-static-plus.svg?style=flat-square
[npm-url]: https://npmjs.org/package/koa-static-plus
[travis-image]: https://img.shields.io/travis/wssgcg1213/koa-static-plus.svg?style=flat-square
[travis-url]: https://travis-ci.org/wssgcg1213/koa-static-plus
[license-image]: http://img.shields.io/npm/l/koa-static.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/koa-static-plus.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/koa-static-plus