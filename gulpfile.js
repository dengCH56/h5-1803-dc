var gulp = require("gulp"),
	minifyCss = require("gulp-clran-css");
	
gulp.task("css",function(){
	gulp.src("src/css/*.css")
		.pipe(minifyCss())
		.pipe(glup.dest("dist/css/"));
});
