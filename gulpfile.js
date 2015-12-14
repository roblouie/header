var gulp = require('gulp'),
  sass = require('gulp-ruby-sass'),
  concat = require('gulp-concat'),
  notify = require('gulp-notify'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  minifycss = require('gulp-minify-css'),
  Server = require('karma').Server;

gulp.task('makeTemp', function() {
	return gulp.src('src/scripts/**/*.js')
		.pipe(concat('header.js'))
		.pipe(gulp.dest('tmp'));
});

gulp.task('test', function (done) {
	gulp.start('makeTemp');
	new Server({
		configFile: __dirname + '/karma.conf.js',
		singleRun: true
	}, done).start();
});

gulp.task('makeDist', function() {
  return gulp.src('src/scripts/**/*.js')
    .pipe(concat('header.js'))
    .pipe(gulp.dest('dist'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
    .pipe(notify({ message: 'makeDist completed' }));
});

gulp.task('default', function() {
  gulp.start('makeDist');
});