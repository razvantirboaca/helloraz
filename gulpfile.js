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
        files: ['./*.html', '!' + paths.dist + 'css/*']
    });
});

gulp.task('sass', function () {
var onError = function(err) {
notify.onError({
    title: 'Sass error',
    message: 'Error: <%= error.message %>'
})(err);
this.emit('end');
};
return gulp.src(paths.src.css)
    .pipe(plumber({errorHandler: onError}))
    .pipe(sass())
    .pipe(postcss([
        autoprefixer()
    ]))
    .pipe(cssnano())
    .pipe(gulp.dest(paths.dist + 'css'))
    .pipe(notify({ message: 'Sass task complete' }))
    .pipe(bs.stream())
});

gulp.task('js', function () {
var onError = function(err) {
notify.onError({
    title: 'JS error',
    message: 'Error: <%= error.message %>'
})(err);
this.emit('end');
};
return gulp.src([
        paths.src.js + 'lazy-load.js',
        paths.src.node + 'photoswipe/dist/photoswipe.min.js',
        paths.src.node + 'photoswipe/dist/photoswipe-ui-default.min.js',
        paths.src.js + 'app.js'
    ])
    .pipe(plumber({errorHandler: onError}))
    .pipe(concat('app.js'))
    //.pipe(uglify())
    .pipe(gulp.dest(paths.dist + 'js'))
    .pipe(notify({ message: 'JS task complete' }))
    .pipe(bs.stream())
});

gulp.task('default', ['browser-sync'], function(){
// Listen to change events on scss and compile sass
gulp.watch(paths.watch.sass, ['sass']);
// Listen to change events on js and concat js
gulp.watch(paths.watch.js, ['js']);
});