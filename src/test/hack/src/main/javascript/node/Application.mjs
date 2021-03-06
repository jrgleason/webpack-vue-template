console.log("Welcome to new Express");
import express from 'express';
import path from 'path';
// var logger = require('morgan');
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import stylus from 'stylus';
import index from './routes/index.mjs';
import users from './routes/users.mjs';
let __dirname = path.resolve();
class Application{
	constructor(){
		let app = express();
		app.set('views', path.join(__dirname, 'views'));
		app.set('view engine', 'pug');
		// this.app.use(logger('dev'));
		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({ extended: false }));
		app.use(cookieParser());
 		app.use(stylus.middleware(path.join(__dirname, 'public')));
		app.use(express.static(path.join(__dirname, 'public')));
		app.use('/', index);
		app.use('/users', users);

		// catch 404 and forward to error handler
		app.use(function(req, res, next) {
  			var err = new Error('Not Found');
  			err.status = 404;
  			next(err);
		});

		// error handler
		app.use(function(err, req, res, next) {
			// set locals, only providing error in development
			res.locals.message = err.message;
			res.locals.error = req.app.get('env') === 'development' ? err : {};
			// render the error page
			res.status(err.status || 500);
			res.render('error');
		});
		this.app = app;
	}
};
export default Application;
