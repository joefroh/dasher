var gulp = require('gulp');
var ts = require('gulp-typescript');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');

var tsProject = ts.createProject("tsconfig.json");

//Default cleans then builds
gulp.task('default', function(){
   return runSequence('clean','build');
});

//Build the TS
gulp.task('build', function(){
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("bin"));
});

//Clean the build folder
gulp.task('clean', function(){
    return gulp.src('./bin', {read: false})
        .pipe(clean());
});