var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require("gulp-rename");

gulp.task('js', function() {
	return gulp.src('./js/*.js')
		.pipe(uglify())
		.pipe(concat('main.min.js'))
		.pipe(gulp.dest('./dist'));
});

gulp.task('css', function () {
	return gulp.src('./css/*.css')
			.pipe(csso())
			.pipe(rename('style.min.css'))
			.pipe(gulp.dest('./dist'));
});

gulp.task('deploy', function() {
	return gulp.src('./dist/**/*')
		.pipe(ghPages({ remoteUrl: 'https://github.com/re5pawn/learn.git' }));
});
