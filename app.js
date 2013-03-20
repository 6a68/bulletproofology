const fs = require('fs'),
  ejs = require('ejs'),
  fonty = require('connect-fonts'),
  opensans = require('connect-fonts-opensans');

function load(fileName) {
  return fs.readFileSync(__dirname + fileName, 'utf8');
}

var app = require('express').createServer(),
  indexTpl = load('/index.ejs'),
  tpl = load('/tpl.ejs'),
  bp = load('/bulletproof.ejs'),
  mo = load('/mo-bulletproofer.ejs'),
  fontspring = load('/fontspring.ejs'),
  cf = load('/connect-fonts.ejs');

app.use(fonty.setup({
  fonts: [opensans],
  allow_origin: '*' // TODO don't put on the interwebs without restricting :)
}));

// we are using connect-fonts to serve fonts and headers.
//
// this means the fonts will be served from endpoints like
//
//   /fonts/en/opensans-regular.*
//

app.get('/', function(req, res) {
  res.send(indexTpl);
});

app.get('/bulletproof', function(req, res) {
  res.send(render(bp, req.route.path));
});

app.get('/mo-bulletproofer', function(req, res) {
  res.send(render(mo, req.route.path));
});

app.get('/fontspring', function(req, res) {
  res.send(render(fontspring, req.route.path));
});

app.get('/connect-fonts', function(req, res) {
  res.send(render(cf, req.route.path));
});

function render(stylez, name) {
  return ejs.render(tpl, {stylez: stylez, name: name.slice(1)});
}

app.listen(process.env['PORT'] || 8888, process.env['HOSTNAME'] || '127.0.0.1');
