/*--------------------------------------------------------------------------
	load modules
--------------------------------------------------------------------------*/
const $ = {
	fs           : require('fs'),
	browserSync  : require("browser-sync"),
	gulp         : require("gulp"),
	plugins      : require("gulp-load-plugins")(),
	webpack      : require("webpack"),
	webpackStream: require("webpack-stream"),
	webpackConfig: require("./webpack.config")
};

const LICENCE = $.fs.readFileSync("LICENCE", "utf8");
const PACKAGE = require("./package.json");


/*--------------------------------------------------------------------------
	config
--------------------------------------------------------------------------*/
// フォルダパス設定
const PATH = {
	src : "src/", // 開発用ディレクトリ
	dist: "dist/", // 公開用ディレクトリ
	test: "test/" // テスト用ディレクトリ
};


/*--------------------------------------------------------------------------
	default
--------------------------------------------------------------------------*/
$.gulp.task("default", [
	"webpack",
	// "sass",
	"browserSync",
	"watch"
]);


/*--------------------------------------------------------------------------
	watch
--------------------------------------------------------------------------*/
$.gulp.task("watch", () => {
	$.gulp.watch([PATH.src + "**/*.js"], ["webpack"]);
	// $.gulp.watch([PATH.src + "assets/css/**/*.scss"], ["sass"]);

	// $.gulp.watch([])
	// .on("change", () => {
	// 	$.browserSync.reload();
	// });
});


/*--------------------------------------------------------------------------
	browserSync
--------------------------------------------------------------------------*/
$.gulp.task("browserSync", () => {
	$.browserSync.init({
		server: {
			baseDir: "./"
		}
	});
});


/*--------------------------------------------------------------------------
	css
--------------------------------------------------------------------------*/
$.gulp.task("sass", () => {
	$.plugins.rubySass(PATH.src + "**/*.scss", {
		style: "compressed"
	})
		.pipe($.plugins.plumber())
		.pipe($.plugins.pleeease({
			browsers: ["last 2 version", "Android 4.4"],
			minifier: false,
			sourcemaps: false,
			mqpacker: false
		}))
		.pipe($.gulp.dest(PATH.dist));
});


/*--------------------------------------------------------------------------
	webpack
--------------------------------------------------------------------------*/
$.gulp.task("webpack", () => {
	$.webpackStream($.webpackConfig, $.webpack)
		.pipe($.plugins.plumber())
		.pipe($.plugins.rename({ extname: `-${PACKAGE.version}.js`}))
		.pipe($.plugins.header(LICENCE, { VERSION: PACKAGE.version}))
		.pipe($.plugins.template({ VERSION: PACKAGE.version}))
		.pipe($.gulp.dest(PATH.dist))
		.pipe($.plugins.rename({extname: ".min.js"}))
		.pipe($.plugins.uglify())
		.pipe($.plugins.header(LICENCE, { VERSION: PACKAGE.version}))
		.pipe($.gulp.dest(PATH.dist));
});
