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

gulp.task("copyGeneralFiles", ["deleteDist"], function(){
  var pathsToCopy = [
    "./app/**/*",
    "!./app/*.html",
    "!./app/images/**/*",
    "!./app/assets/styles/**/*",
    "!./app/assets/scripts/**/*",
    "!./app/temp",
    "!./app/temp/**/*"
  ]

  return gulp.src(pathsToCopy)
    .pipe(gulp.dest("./dist"));
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

gulp.task("htmlTrigger", ["styles", "scripts"], function(){
  gulp.start(["index", "kanafany", "menu", "baking"])
});

gulp.task("index", ["htmlTrigger"], function(){
  return gulp.src('./app/index.html')
    .pipe(usemin({
      css: [function(){ return rev() }, function(){ return cssnano() }],
      js: [function(){ return rev() }, function(){ return uglify() }],
      html: [htmlmin({ collapseWhitespace: true})]
    }))
    .pipe(gulp.dest("./dist"));
});

gulp.task("kanafany", ["htmlTrigger"], function(){
  return gulp.src('./app/kanafany-two.html')
    .pipe(usemin({
      css: [function(){ return rev() }, function(){ return cssnano() }],
      js: [function(){ return rev() }, function(){ return uglify() }],
      html: [htmlmin({ collapseWhitespace: true})]
    }))
    .pipe(gulp.dest("./dist"));
});

gulp.task("menu", ["htmlTrigger"], function(){
  return gulp.src('./app/menu.html')
    .pipe(usemin({
      css: [function(){ return rev() }, function(){ return cssnano() }],
      js: [function(){ return rev() }, function(){ return uglify() }],
      html: [htmlmin({ collapseWhitespace: true})]
    }))
    .pipe(gulp.dest("./dist"));
});

gulp.task("baking", ["htmlTrigger"], function(){
  return gulp.src('./app/baking.html')
    .pipe(usemin({
      css: [function(){ return rev() }, function(){ return cssnano() }],
      js: [function(){ return rev() }, function(){ return uglify() }],
      html: [htmlmin({ collapseWhitespace: true})]
    }))
    .pipe(gulp.dest("./dist"));
});

gulp.task("slickLoader", ["deleteDist", "htmlTrigger"], function(){
  return gulp.src("./app/temp/styles/ajax-loader.gif")
    .pipe(gulp.dest("./dist/assets/styles"));
});

gulp.task("slickFonts", ["slickLoader"], function(){
  return gulp.src(["./app/temp/styles/fonts", "./app/temp/styles/fonts/**/*"])
    .pipe(gulp.dest("./dist/assets/styles/fonts"));
});

gulp.task("build", ["deleteDist", "copyGeneralFiles", "optimizeImages", "index", "kanafany", "menu", "baking", "slickLoader", "slickFonts"]);
