const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser'),
      favicon = require('serve-favicon'),
      morgan = require('morgan'),
      path = require('path'),
      source = path.resolve(path.dirname(__dirname), 'src'),
      staticSource = express.static('dist');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(staticSource);

app.all('/*', function(req, res, next) {
  res.sendFile('../dist/index.html', {root: source});
});

module.exports = app;
