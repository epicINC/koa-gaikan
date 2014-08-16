var mixin = require('utils-merge');

var a = {a:1};
var b = {a:2, b:3};

mixin(a, b);


console.log(a);