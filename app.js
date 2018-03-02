var path = require ('path');
var express = require ('express');
var webpack = require ('webpack');
var webpackDevMiddleware = require ('webpack-dev-middleware');
var webpackHotMiddleware = require ('webpack-hot-middleware');

// routes
var index = require('./routes/index');
var users = require('./routes/users');

config = require ('./webpack.config.dev');

app = express();

// setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set ('view engine', 'ejs');

app.use("/", index);
app.use("/users", users);

router = express.Router();

compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {colors: true}
}))

app.use(webpackHotMiddleware(compiler, {
    log: console.log
}))

app.listen(3000, () => console.log ('listening on 3000'));

module.exports = app;
