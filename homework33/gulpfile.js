const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

function styles() {
  return gulp.src('./src/styles/style.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss([
        autoprefixer()
      ]))
      .pipe(gulp.dest('./assets/css'))
      .pipe(postcss([
        cssnano()
      ]))
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest('./assets/css'));
}

function serve(done) {
  browserSync.init({
    server: {
      baseDir: './'
    },
    notify: false,
    open: true
  });
  done();
}

function reload(done) {
  browserSync.reload();
  done();
}

function watchFiles() {
  gulp.watch('./src/styles/**/*.scss', gulp.series(styles, reload));
  gulp.watch('./index.html', reload);
  gulp.watch('./src/**/*.js', reload);}

exports.styles = styles;
exports.serve = gulp.series(styles, serve);
exports.watch = gulp.series(styles, serve, watchFiles);
exports.default = gulp.series(styles, serve, watchFiles);