var Metalsmith  = require('metalsmith');
var layouts     = require('metalsmith-layouts');
var beautify    = require('metalsmith-beautify');

Metalsmith(__dirname)
    //.use(markdown())
    .use(layouts())
    .use(beautify({
        "indent_size": 4,
        "indent_char": " "
    }))
    .build(function(err, files) {
        if (err) { throw err; }
    });