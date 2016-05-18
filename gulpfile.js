const gulp = require('gulp');
const babel = require('gulp-babel');
const mocha = require('gulp-mocha');

const SRC_PATH = 'src/**/*.js';
const DIST_PATH = 'dist/';

gulp.task('make', () => {
  gulp.src(SRC_PATH)
    .pipe(babel())
    .pipe(gulp.dest(DIST_PATH));
});

gulp.task('default', [
  'make',
]);

gulp.task('watch', () => {
  gulp.watch(SRC_PATH, ['make']);
});
