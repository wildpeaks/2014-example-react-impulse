var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');


gulp.task('static', function(){
	'use strict';
	gulp.src(['src/index.html', 'src/css/app.css'])
	.pipe(gulp.dest('./www'));
});


gulp.task('js', function task_js(){
	'use strict';
	var bundler = browserify('./src/js/index.js', {debug: true, basedir: __dirname});
	bundler.transform(reactify);
	var stream = bundler.bundle();
	return stream
	.pipe(source('app.js'))
	.pipe(gulp.dest('./www'));
});


gulp.task('default', ['static', 'js']);