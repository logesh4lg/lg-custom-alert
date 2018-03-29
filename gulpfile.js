var gulp = require("gulp");
var minifyHtml = require("gulp-minify-html");
var ngHtml2js = require("gulp-ng-html2js");
var ngAnnotate = require("gulp-ng-annotate");
var iife = require("gulp-iife");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");

gulp.task("html", function() {
    return gulp.src("src/alertModal.html")
        .pipe(minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(ngHtml2js({
            moduleName: "lg.customAlert",
            prefix: "lg-custom-alert/",
            declareModule: false
        }))
        .pipe(concat("lg.customAlert.min.js"))
        .pipe(gulp.dest("dist"));
});

gulp.task("js", ["html"], function() {
    return gulp.src(["src/lg-custom-alert.js", "dist/lg.customAlert.min.js"])
        .pipe(ngAnnotate())
        .pipe(concat("lg.customAlert.min.js"))
        .pipe(iife())
        .pipe(uglify())
        .pipe(gulp.dest("dist"));
});

gulp.task("build", ["js"]);

gulp.task("default", ["build"]);
