var base = '.',
    name = 'functional';

module.exports = exports = {
  name : name,
  src  : [base,name].join('/'),
  dest : base + '/'
};

exports.js = {
  globals: {
    setInterval : false,
    setTimeout  : false,
    console : true,
    module  : true,
    exports : true,
    define  : false
  }
};

exports.lint = {
  bitwise   : false,
  camelcase : true,
  curly     : false,
  eqeqeq    : true,
  forin     : true,
  immed     : true,
  indent    : 2,
  latedef   : false,
  noarg     : true,
  noempty   : true,
  nonew     : false,
  plusplus  : false,
  quotmark  : 'single',
  undef     : true,
  unused    : false,
  strict    : true,
  maxparams : false,
  maxdepth  : false,
  maxlen    : 80,
  sub       : false,
  globals   : exports.js.globals
};