koa-gaikan
==========


###Usage

```base
npm install koa-gaikan
```

```js
var koa = require('koa');
var router = require('koa-router');
var gaikan = require('koa-gaikan');

var app = koa();


app.use(router(app));
app.use(gaikan(app));


app.get('/', function *()
{
	yield this.render('index', {title: 'test'});
});


app.listen(3000);
```

###Config


```js
gaikan(app, { cache: true, zip: true, ext: ['gaikan', 'htm', 'html'], dir: ['views', '.'], root: __dirname });
```

cache

	enable or disable template caching.

zip

	enable or disable template compression.

ext

	template file extensions.

dir
	
	relative directiories.

root

	absolute path.

###links

[Gaikan](https://github.com/Deathspike/gaikan)
[koa](https://github.com/koajs/koa)


