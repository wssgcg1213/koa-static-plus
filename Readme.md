# koa-static-plus

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
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