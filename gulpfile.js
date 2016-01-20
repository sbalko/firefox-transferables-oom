var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('webserver', function() {
    return gulp.src('.')
        .pipe($.webserver({
            host: '0.0.0.0',
            port: 9000,
            fallback: 'index.html'
        }));
});
