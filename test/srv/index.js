var koa = require('koa');
var router = require('koa-router');
var gaikan = require('../../index');
var path = require('path');

var app = koa();


app.use(router(app));
app.use(gaikan(app));


  app.get('/', function *()
  {
    yield this.render('main', {title: 'test'});
  });


  app.listen(3000);