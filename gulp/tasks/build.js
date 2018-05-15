const gulp     = require("gulp"),
      imagemin = require("gulp-imagemin"),
      usemin   = require("gulp-usemin"),
      del      = require("del"),
      cssnano  = require("gulp-cssnano"),
      rev      = require("gulp-rev"),
      uglify   = require("gulp-uglify"),
      htmlmin  = require("gulp-htmlmin"),
      browserSync = require("browser-sync").create();

gulp.task("previewDist", function(){
  browserSync.init({
    server: {
      baseDir: "dist"
    }
  });
})

gulp.task("deleteDist", function(){
  return del("./dist");
});

gulp.task("optimizeImages", ["deleteDist"], function(){
  return gulp.src("./app/assets/images/**/*")
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(gulp.dest("./dist/assets/images"));
});

gulp.task("index", ["deleteDist"], function(){
  return gulp.src('./app/index.html')
    .pipe(usemin({
      css: [function(){ return rev() }, function(){ return cssnano() }],
      js: [function(){ return rev() }, function(){ return uglify() }],
      html: [htmlmin({ collapseWhitespace: true})]
    }))
    .pipe(gulp.dest("./dist"));
});

gulp.task("kanafany", ["deleteDist"], function(){
  return gulp.src('./app/kanafany-two.html')
    .pipe(usemin({
      css: [function(){ return rev() }, function(){ return cssnano() }],
      js: [function(){ return rev() }, function(){ return uglify() }],
      html: [htmlmin({ collapseWhitespace: true})]
    }))
    .pipe(gulp.dest("./dist"));
});

gulp.task("build", ["deleteDist", "optimizeImages", "index", "kanafany"]);
