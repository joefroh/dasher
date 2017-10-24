var gulp = require('gulp');
var exec = require('gulp-exec');
var clean = require('gulp-clean');

gulp.task('default', function(){
    return exec('tsc *.ts');
});

gulp.task('clean', function(){
    return gulp.src('./bin', {read: false})
        .pipe(clean());
});