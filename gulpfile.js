const gulp = require('gulp');
const babel = require('gulp-babel');
const mocha = require('gulp-mocha');

const SRC_PATH = 'src/**/*.js';
const DIST_PATH = 'dist/';
const TEST_PATH = 'test/**/*.test.js';

gulp.task('make', () => {
  gulp.src(SRC_PATH)
    .pipe(babel())
    .pipe(gulp.dest(DIST_PATH));
});

gulp.task('default', [
  'make',
]);

gulp.task('test', () => {
  gulp.src(TEST_PATH)
    .pipe(mocha());
});

gulp.task('watch', () => {
  gulp.watch(SRC_PATH, ['make']);
});
