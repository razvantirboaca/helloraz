'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const fileinclude = require('gulp-file-include');
const webpack = require('webpack-stream');
const sassImporterTilde = require('node-sass-tilde-importer');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cleancss = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const svgsprite = require('gulp-svg-sprite');
const del = require('del');
const browserSync = require('browser-sync').create();

const packageJson = require('./package.json');
const config = {
    src: './src',
    dest: './dist'
};
Object.assign(config, {
    html: {
        src: config.src,
        dest: config.dest,
        partials: `${config.src}/partials`
    },
    js: {
        src: `${config.src}/js`,
        dest: `${config.dest}/js`
    },
    css: {
        src: `${config.src}/scss`,
        dest: `${config.dest}/css`
    },
    svg: {
        src: `${config.src}/assets/svg`,
        dest: `${config.dest}/assets/svg`
    },
    img: {
        src: `${config.src}/assets/images`,
        dest: `${config.dest}/assets/images`
    },
    fonts: {
        src: `${config.src}/assets/fonts`,
        dest: `${config.dest}/assets/fonts`
    },
    video: {
        src: `${config.src}/assets/video`,
        dest: `${config.dest}/assets/video`
    }
});

const isProduction = (process.env.NODE_ENV === 'production') ? true : true;

const clean = () => del(
    [`${config.dest}/**/*`],
    {force: true}
);

const html = () => gulp.src(`${config.html.src}/*.html`)
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
    }))
    .pipe(gulp.dest(config.html.dest));

const js = () => gulp.src(`${config.js.src}/**/*.js`)
    .pipe(webpack({
        mode: isProduction && 'production' || 'development',
        output: {
            filename: '[name].js',
            chunkFilename: '[name]-chunk.js'
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }]
        }
    }))
    .pipe(gulp.dest(config.js.dest));

const css = () => {
    let stream = gulp.src(`${config.css.src}/**/*.scss`)
        .pipe(sass.sync({
            includePaths: ['./node_modules/'],
            importer: sassImporterTilde
        }).on('error', sass.logError))
        .pipe(postcss([
            autoprefixer()
        ]));

    if (isProduction) stream = stream
        .pipe(cleancss({
            level: 1
        }));

    stream
        .pipe(gulp.dest(config.css.dest))
        .pipe(browserSync.stream());

    return stream;
};

const svgIcons = () => gulp.src([
    `${config.svg.src}/icons/**/*.svg`
])
    .pipe(svgsprite({
        shape: {
            id: { separator: '-', generator: 'icon-%s' },
            dimension: { maxWidth: 32, maxHeight: 32 }
        },
        mode: {
            symbol: { dest: '', sprite: 'icons.svg' }
        }
    }))
    .pipe(gulp.dest(config.svg.dest));

const svg = gulp.series(svgIcons);

const img = () => gulp.src(`${config.img.src}/**/*.+(png|jpg|jpeg|gif|svg)`)
    .pipe(
        cache(
            imagemin({
                interlaced: true
            })
        )
    )
    .pipe(gulp.dest(config.img.dest));


const fonts = () => gulp.src(`${config.fonts.src}/**/*`)
    .pipe(gulp.dest(config.fonts.dest));

const video = () => gulp.src(`${config.video.src}/**/*`)
.pipe(gulp.dest(config.video.dest));

const copyfiles = () => gulp.src([
    //'./src/robots.txt',
    './src/.htaccess'
])
    .pipe(gulp.dest(config.dest));

const serve = () => browserSync.init({
    server: {
        baseDir: config.dest,
        routes: {
            '/about': 'dist/about.html',
            '/work': 'dist/work.html',
            '/cinema': 'dist/cinema.html'
        }
    },
    port: 4000,
    notify: false,
    reloadDelay: 500,
    ghostMode: false,
    open: true
});

const watch = () => {
    gulp.watch([`${config.html.src}/*.html`, `${config.html.partials}/*.html`])
        .on('change', gulp.series(html));
    gulp.watch(`${config.js.src}/**/*.js`)
        .on('change', gulp.series(js));
    gulp.watch(`${config.css.src}/**/*.scss`)
        .on('change', gulp.series(css));
    gulp.watch(`${config.svg.src}/icons/**/*.svg`)
        .on('change', gulp.series(svgIcons));
    gulp.watch([`${config.dest}/**/*`, `!${config.dest}/**/*.css`])
        .on('change', gulp.series(browserSync.reload));
};

const build = gulp.series(clean, html, js, css, svg, img, fonts, video, copyfiles);

exports.build = build;
exports.serve = serve;
exports.default = gulp.parallel(
    gulp.series(build, serve),
    watch
);
