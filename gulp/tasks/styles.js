const gulp         = require("gulp"),
      postcss      = require("gulp-postcss"),
      autoprefixes = require("autoprefixer"),
      cssvars      = require("postcss-simple-vars"),
      cssimport    = require("postcss-import"),
      cssnested    = require("postcss-nested");

gulp.task("styles", function(){
  return gulp.src("./app/assets/styles/*.css")
      .pipe(postcss([cssimport, cssvars, autoprefixes, cssnested]))
      .on("error", function(errorInfo){
        console.log(errorInfo.toString());
        this.emit("end");
      })
      .pipe(gulp.dest("./app/temp/styles"));
});
