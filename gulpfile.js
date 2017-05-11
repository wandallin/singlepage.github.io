var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'), //自動加入css前綴
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'), //通知更動
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'), //即時重整
    del = require('del');

var path = {
    cssIn : "sass/*.sass",
    cssOut: "/css",
    jsIn: "*.js",
    jsOut: "/"
};

//編譯sass, autoprefixer, 縮小化css
gulp.task('styles', function(){
    return sass(path.cssIn, {style: 'expanded'})
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest(path.cssOut))
    .pipe(cssnano())
    .pipe(gulp.dest(path.cssOut))
    .pipe(notify({message: 'Styles task complete'}));
});

//jsHint, 拼接, 縮小化js
gulp.task('scripts', function(){
    return gulp.src(path.jsIn)
    .pipe(jshint('.jsHintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest(path.jsOut))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(path.jsOut))
    .pipe(notify({message: 'Script task complete'}));
});

gulp.task('default', ['styles', 'scripts']);