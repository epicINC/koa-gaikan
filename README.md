koa-gaikan
==========


###Usage

Install
'''bash
<del>npm install koa-gaikan</del>
'''

'''js
var koa = require('koa');
var router = require('koa-router');
var gaikan = require('koa-gaikan');

var app = koa();


app.use(router(app));
app.use(gaikan(app,  {root: __dirname}));


app.get('/', function *()
{
	yield this.render('index', {title: 'test'});
});


app.listen(3000);
'''

