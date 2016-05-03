
'use strict';

const serve = require('./');
const koa = require('koa');
const app = koa();

// $ GET /static/package.json
// $ GET /static/

app.use(serve('.', {
  pathPrefix: '/static'
}));

app.use(function *(next){
  yield next;
  if ('/' == this.path) {
    this.body = 'Try `GET /static/package.json`';
  }
})

app.listen(3000);

console.log('listening on port 3000');