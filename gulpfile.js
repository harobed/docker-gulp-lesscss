const { src, dest, watch, series } = require('gulp');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const autoprefix = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const livereload = require('gulp-livereload');

function _less(cb) {
    src('styles/main.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(cleanCSS())
        .pipe(autoprefix('last 2 version'))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('static/css/'))
        .pipe(livereload());
    cb();
}

function _watch(cb) {
    livereload.listen();
    watch('styles/*.less', less)
    cb();
}

exports.less = _less
exports.watch = series(_less, _watch)

// This code fix CTRL-C Nodejs issue (see https://stackoverflow.com/questions/39741441/gulp-watch-task-doest-exit-on-ctrl-c)
process.on('SIGINT', function () {
    process.exit();
});