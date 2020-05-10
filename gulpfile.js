var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass'),
    concat = require('gulp-concat');
connect = require('gulp-connect');


var coffeeSources = ['components/coffee/tagline.coffee'];
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

gulp.task('js', gulp.series(function (done) {
    gulp.src(jsSources)
        .pipe(concat('scripts.js'))
        .pipe(browserify())
        .pipe(gulp.dest('builds/development/js'))
        .pipe(connect.reload())
    done();
}));


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
        .pipe(connect.reload())
});



gulp.task('watch', function () {
    //GULP VERSION 3 only   gulp.watch(coffeeSources, ['coffee'])
    gulp.watch('components/coffee/tagline.coffee', gulp.series('coffee'));
    gulp.watch('components/scripts/rclick.js', gulp.series('js'));
    gulp.watch('components/sass/*.scss', gulp.series('compass'));


});

gulp.task('connect', function () {
    connect.server({
        root: 'builds/development/',
        livereload: true

    })

});

gulp.task('default', gulp.series('coffee', 'js', 'compass', 'connenct', 'watch'))







// create a default task and just log a message
gulp.task('test', gulp.series(function (done) {

    done();
}));
