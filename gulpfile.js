const preprocessor        = 'scss', // Выбрать препроцессор для стилей (scss или less)
      gulpVersion         = '4'; // Версия галпа (3 или 4)

// Команды
// "gulp" - запуск gulp.
// "gulp min" - сжатие js, css (создает минимизированные файлы script.min.js и style.min.css).
// "gulp mg" - группировка всех медиазапросов в кучу.

const gulp                = require('gulp'),
      sass                = require('gulp-sass'),
      less                = require('gulp-less'),
      concatJS            = require('gulp-concat'),
      pug                 = require('gulp-pug'),
      autoprefixer        = require('gulp-autoprefixer'),
      cleanCSS            = require('gulp-clean-css'),
      rigger              = require('gulp-rigger'),
      browserSync         = require('browser-sync'),
      uglify              = require('gulp-uglify'),
      rename              = require("gulp-rename"),
      gcmq                = require('gulp-group-css-media-queries');



gulp.task('jade', function buildHTML() {
  return gulp.src('jade/*.jade')
    .pipe(pug({
      pretty: '\t'
    }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({stream:true}));
});

if (preprocessor == 'scss') {
  gulp.task('style', function () {
    return gulp.src('scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({stream:true}));
  });
}

else if (preprocessor == 'less') {
  gulp.task('style', function () {
    return gulp.src('less/style.less')
    .pipe(less())
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({stream:true}));
  });
}

gulp.task('js', function () {
    return gulp.src('js-app/scripts.js')
    .pipe(rigger())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: './dist/'
        },
        notify: true
    });
});

gulp.task('css-min', function () {
  return gulp.src('dist/css/style.css')
  .pipe(cleanCSS({
    level : 2
  }))
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('dist/css'))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('js-min', function () {
    return gulp.src('dist/js/scripts.js')
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('media-group', function () {
    return gulp.src('dist/css/style.css')
    .pipe(gcmq())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({stream: true}));
});

if (gulpVersion == '3') {
  gulp.task('watch', function () {
    gulp.watch('jade/**/*.jade', ['jade']);
    gulp.watch('js-app/**/*.js', ['js']);
    gulp.watch('scss/**/*.scss', ['style']);
  });

  gulp.task('default', ['browser-sync', 'jade', 'js', 'style', 'watch']);

  gulp.task('minify', ['css-min', 'js-min']);

  gulp.task('mg', ['media-group']);
}
else if (gulpVersion == '4') {
  gulp.task('watch', function () {
    gulp.watch('jade/**/*.jade', gulp.parallel('jade'));
    gulp.watch('js-app/**/*.js', gulp.parallel('js'));
    gulp.watch('scss/**/*.scss', gulp.parallel('style'));
  });

  gulp.task('default', gulp.parallel('browser-sync', 'jade', 'js', 'style', 'watch'));

  gulp.task('min', gulp.parallel('css-min', 'js-min'));

  gulp.task('mg', gulp.parallel('media-group'));
}