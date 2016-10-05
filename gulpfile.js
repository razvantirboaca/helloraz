var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  sass = require('gulp-sass'),
  cssnano = require('gulp-cssnano'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  notify  = require('gulp-notify'),
  del = require('del'),
  bs = require('browser-sync').create(),
  proxyUrl = 'localhost/razvan';

var paths = {
  watch : {
    sass: 'src/css/**/**/*.scss',
    js: 'src/js/**/**/*.js'
  },
  src: {
    css: 'src/css/style.scss',
    js: 'src/js/',
    node: 'node_modules/'
  },
  dist: 'dist/'
};

gulp.task('browser-sync', function() {
bs.init({
proxy: proxyUrl,
  scriptPath: function (path, port, options) {
    return options.get("absolute");
  },
  files: ['./index.html', '!' + paths.dist + 'css/*']
});
});

gulp.task('css', function () {
return gulp.src(paths.src.css)
  .pipe(plumber({
    handleError: function (err) {
      notify('Something is wrong');
      console.log(err);
      this.emit('end');
    }
  }))
  .pipe(sass())
  .pipe(postcss([
    autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    })
  ]))
  .pipe(cssnano())
  .pipe(gulp.dest(paths.dist + 'css'))
  .pipe(notify({ message: 'CSS task complete' }))
  .pipe(bs.stream())
});

gulp.task('js', function () {
return gulp.src([
    paths.src.node + 'photoswipe/dist/photoswipe.min.js',
    paths.src.node + 'photoswipe/dist/photoswipe-ui-default.min.js',
    paths.src.node + 'sticky-state/dist/sticky-state.min.js',
    paths.src.js + 'app.js'
  ])
  .pipe(concat('app.js'))
  .pipe(uglify())
  .pipe(gulp.dest(paths.dist + 'js'))
  .pipe(notify({ message: 'JS task complete' }))
  .pipe(bs.stream())
});

gulp.task('default', ['browser-sync'], function(){
// Listen to change events on scss and compile sass
gulp.watch(paths.watch.sass, ['css']);
// Listen to change events on js and concat js
gulp.watch(paths.watch.js, ['js']);
});