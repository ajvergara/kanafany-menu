const gulp     = require("gulp"),
      imagemin = require("gulp-imagemin"),
      usemin   = require("gulp-usemin"),
      del      = require("del"),
      cssnano  = require("gulp-cssnano"),
      rev      = require("gulp-rev"),
      uglify   = require("gulp-uglify"),
      htmlmin  = require("gulp-htmlmin"),
      browserSync = require("browser-sync").create();

gulp.task("previewDocs", function(){
  browserSync.init({
    server: {
      baseDir: "docs"
    }
  });
})

gulp.task("deleteDocs", function(){
  return del("./docs");
});

gulp.task("copyGeneralFiles", ["deleteDocs"], function(){
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
    .pipe(gulp.dest("./docs"));
});

gulp.task("optimizeImages", ["deleteDocs"], function(){
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
    .pipe(gulp.dest("./docs/assets/images"));
});

gulp.task("htmlTrigger", ["styles", "scripts"], function(){
  gulp.start(["index", "kanafany", "menu", "croissant", "desserts", "coldbev", "fondue", "icecream", "hotbev"]);
});

gulp.task("index", ["htmlTrigger"], function(){
  return gulp.src('./app/index.html')
    .pipe(usemin({
      css: [function(){ return rev() }, function(){ return cssnano() }],
      js: [function(){ return rev() }, function(){ return uglify() }],
      html: [htmlmin({ collapseWhitespace: true})]
    }))
    .pipe(gulp.dest("./docs"));
});

gulp.task("kanafany", ["htmlTrigger"], function(){
  return gulp.src('./app/kanafany-two.html')
    .pipe(usemin({
      css: [function(){ return rev() }, function(){ return cssnano() }],
      js: [function(){ return rev() }, function(){ return uglify() }],
      html: [htmlmin({ collapseWhitespace: true})]
    }))
    .pipe(gulp.dest("./docs"));
});

gulp.task("menu", ["htmlTrigger"], function(){
  return gulp.src('./app/menu.html')
    .pipe(usemin({
      css: [function(){ return rev() }, function(){ return cssnano() }],
      js: [function(){ return rev() }, function(){ return uglify() }],
      html: [htmlmin({ collapseWhitespace: true})]
    }))
    .pipe(gulp.dest("./docs"));
});

gulp.task("croissant", ["htmlTrigger"], function(){
  return gulp.src('./app/croissantmuffin.html')
    .pipe(usemin({
      css: [function(){ return rev() }, function(){ return cssnano() }],
      js: [function(){ return rev() }, function(){ return uglify() }],
      html: [htmlmin({ collapseWhitespace: true})]
    }))
    .pipe(gulp.dest("./docs"));
});

gulp.task("desserts", ["htmlTrigger"], function(){
  return gulp.src('./app/desserts.html')
    .pipe(usemin({
      css: [function(){ return rev() }, function(){ return cssnano() }],
      js: [function(){ return rev() }, function(){ return uglify() }],
      html: [htmlmin({ collapseWhitespace: true})]
    }))
    .pipe(gulp.dest("./docs"));
});

gulp.task("coldbev", ["htmlTrigger"], function(){
  return gulp.src('./app/coldbev.html')
    .pipe(usemin({
      css: [function(){ return rev() }, function(){ return cssnano() }],
      js: [function(){ return rev() }, function(){ return uglify() }],
      html: [htmlmin({ collapseWhitespace: true})]
    }))
    .pipe(gulp.dest("./docs"));
});

gulp.task("fondue", ["htmlTrigger"], function(){
  return gulp.src('./app/fondue.html')
    .pipe(usemin({
      css: [function(){ return rev() }, function(){ return cssnano() }],
      js: [function(){ return rev() }, function(){ return uglify() }],
      html: [htmlmin({ collapseWhitespace: true})]
    }))
    .pipe(gulp.dest("./docs"));
});

gulp.task("icecream", ["htmlTrigger"], function(){
  return gulp.src('./app/ice_cream.html')
    .pipe(usemin({
      css: [function(){ return rev() }, function(){ return cssnano() }],
      js: [function(){ return rev() }, function(){ return uglify() }],
      html: [htmlmin({ collapseWhitespace: true})]
    }))
    .pipe(gulp.dest("./docs"));
});

gulp.task("hotbev", ["htmlTrigger"], function(){
  return gulp.src('./app/hotbev.html')
    .pipe(usemin({
      css: [function(){ return rev() }, function(){ return cssnano() }],
      js: [function(){ return rev() }, function(){ return uglify() }],
      html: [htmlmin({ collapseWhitespace: true})]
    }))
    .pipe(gulp.dest("./docs"));
});

gulp.task("slickLoader", ["deleteDocs", "htmlTrigger"], function(){
  return gulp.src("./app/temp/styles/ajax-loader.gif")
    .pipe(gulp.dest("./docs/assets/styles"));
});

gulp.task("slickFonts", ["slickLoader"], function(){
  return gulp.src(["./app/temp/styles/fonts", "./app/temp/styles/fonts/**/*"])
    .pipe(gulp.dest("./docs/assets/styles/fonts"));
});

gulp.task("docs", ["deleteDocs", "copyGeneralFiles", "optimizeImages", "htmlTrigger", "slickLoader", "slickFonts"]);
