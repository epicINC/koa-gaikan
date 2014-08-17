'use strict';

var mixin = require('utils-merge');
var engine = require('gaikan');
var path = require('path');
// merge


module.exports = renderer;
exports.alt = engine.alterant;


function renderTpl(path, locals)
{

  return function (done)
  {
    done(null, engine.compileFromFile(path)(engine, locals));
  }
}


function renderer(app, settings)
{
  if (app.context.render) return;

  app.context.render = function *(view, options)
  {
    var opts = this.locals || {};
    //mixin(opts, locals || {});
    mixin(opts, options);
    var html = yield renderTpl(view, opts);

    this.type = 'html';
    this.length = html.length;
    this.body = html;
  }

  settings = mixin(settings || {}, { cache: true, zip: true, ext: ['gaikan', 'htm', 'html'], dir: ['views', '.'], root: path.dirname(module.parent.filename)});


  if (settings.hasOwnProperty('cache'))
    engine.options.enableCache = settings.cache;

  if (settings.hasOwnProperty('zip'))
    engine.options.enableCompression = settings.zip;

  if (settings.hasOwnProperty('ext'))
    engine.options.extensions = settings.ext;

  if (settings.hasOwnProperty('dir'))
    engine.options.directories = settings.dir;

  if (settings.hasOwnProperty('root'))
    engine.options.rootDir = settings.root;

  return function *(){ }


}



