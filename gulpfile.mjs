import gulp from "gulp";
const { src, dest, watch, parallel, series } = gulp;
import imagemin from "gulp-imagemin";
import browserSync from "browser-sync";
import htmlmin from "gulp-htmlmin";
import concat from "gulp-concat";
import terser from "gulp-terser";
import cleanCss from "gulp-clean-css";
import processhtml from "gulp-processhtml";

const minifyHTML = () =>
  src("src/*.html")
    .pipe(processhtml({}))
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(dest("dist"));

const cssMinify = () =>
  src("src/css/**/*.css")
    .pipe(concat('style.min.css'))
    .pipe(cleanCss())
    .pipe(dest('dist/css'))

const imgMinify = () =>
  gulp.src("src/imgs/*").pipe(imagemin()).pipe(dest("dist/imgs"));

const jsMinify = () =>
  src("src/js/**/*.js", { sourcemaps: true })
    .pipe(concat("bundle.min.js"))
    .pipe(terser())
    .pipe(dest("dist/js", { sourcemaps: "." }));

const serve = (callback) => {
  browserSync({
    server: {
      baseDir: "dist/",
    },
  });
  callback();
};

const reloadTask = (done) => {
  browserSync.reload();
  done();
};

const watchTask = () => {
  watch("src/*.html", series(minifyHTML, reloadTask));
  watch("src/css/**/*.css", series(cssMinify, reloadTask));
  watch("src/js/**/*.js", series(jsMinify, reloadTask));
};

export default series(
  parallel(minifyHTML, cssMinify, imgMinify, jsMinify ),
  serve,
  watchTask
);
