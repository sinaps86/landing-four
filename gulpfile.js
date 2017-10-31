var gulp = require('gulp'),
    sass = require('gulp-sass');


gulp.task('sass', function () {
   return gulp.src('app/scss/**/*.scss')
       .pipe(sass())
       .pipe(gulp.dest('app/css'))
});

gulp.task('watch', ['sass'], function () {
    gulp.watch('app/scss/**/*.scss', ['sass']);
})
