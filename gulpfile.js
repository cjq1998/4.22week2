const gulp=require("gulp");
const gulpSass=require("gulp-sass");
const webserver=require("gulp-webserver");

gulp.task("devSass",()=>{
	return gulp.src("./src/css/*.scss")
	.pipe(gulpSass())
	.pipe(gulp.dest("./src/scss"))
})

gulp.task("watch",()=>{
	return gulp.watch("./src/css/*.scss",gulp.series("devSass"));
})


gulp.task("server",()=>{
	return gulp.src("./src")
	.pipe(webserver({
		port:8000,
		livereload:true,
		proxies:[
			{
				"source":"/api/find",
				target:"http://localhost:8000/api/find"
			}
			{
				"source":"/api/add",
				target:"http://localhost:8000/api/add"
			}
		]
	}))
})


gulp.task("default",gulp.series("devSass","server","watch"))