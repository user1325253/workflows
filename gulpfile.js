var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass'),
    concat = require('gulp-concat');

var coffeeSources = ['components/coffee/*.coffee'];
var jsSources = ['components/scripts/rclick.js',
'components/scripts/pixgrid.js',
'components/scripts/tagline.js',
'components/scripts/template.js'];

var sassSources = ['components/sass/style.scss'];

gulp.task('coffee', async function () {
    gulp.src(coffeeSources)
        .pipe(coffee({
                bare: true
            })
            .on('error', gutil.log))
        .pipe(gulp.dest('components/scripts'))

});

<<<<<<< HEAD
gulp.task('js', gulp.series('coffee', async function () {
    gulp.src(jsSources)
        .pipe(concat('scripts.js'))
        .pipe(browserify())
        .pipe(gulp.dest('builds/development/js'))
}));
=======
gulp.task('js', ['coffee'], sync
    function () {
        gulp.src(jsSources)
            .pipe(concat('scripts.js'))
            .pipe(browserify())
            .pipe(gulp.dest('builds/development/js'))
    });
>>>>>>> 98d0834ef9dfbcb4014afb30d7bbb41ef54234ee

gulp.task('compass', async function () {
    gulp.src(sassSources)
        .pipe(compass({
                sass: 'components/sass',
                image: 'builds/development/images',
                style: 'expanded'
            })
            .on('error', gutil.log)

        )
        .pipe(gulp.dest('builds/development/css'))
});

<<<<<<< HEAD
gulp.task('watch', function () {
    gulp.watch

})

gulp.task('default', gulp.series('coffee', 'js', 'compass'));
=======

gulp.task('default', ['coffee', 'js', 'compass']);
>>>>>>> 98d0834ef9dfbcb4014afb30d7bbb41ef54234ee
