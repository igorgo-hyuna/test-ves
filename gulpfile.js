var gulp 			= require('gulp'), 
	sass 			= require('gulp-sass'),
	browserSync 	= require('browser-sync'),
	concat			= require('gulp-concat'),
	uglify			= require('gulp-uglifyjs'),
	cssnano			= require('gulp-cssnano'),
	rename			= require('gulp-rename'),
	del				= require('del'),
	imagemin		= require('gulp-imagemin'),
	pngquant		= require('imagemin-pngquant'),
	cache			= require('gulp-cache'),
	autoprefixer 	= require('gulp-autoprefixer');

/* Таск компиляции для scss и sass -файлов. Формат выборки разных форматов файлов ".+(scss|sass)" */
gulp.task('scss', function(){
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass())
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
		.pipe(gulp.dest('app/css/'))
		.pipe(browserSync.reload({stream: true}))
});

/**************************** Таск, для подготовки к сжатию css ***************************/
gulp.task('scripts', function(){
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
		'app/libs/bootstrap/bootstrap.min.js',
		// 'app/libs/parallax.js-1.5.0/parallax.min.js',
		// 'app/libs/pageScrool2/PageScroll2id.min.js',
		// 'app/libs/owlCarousel2-2.3.4/dist/owl.carousel.min.js',
		// 'app/libs/jqueryCounter/counter.lib.js',
		// 'app/libs/jqueryCounter/jquery.counterup.min.js',
		// 'app/libs/backgroundvideo/jquery.backgroundvideo.min.js',
	])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'));
});

/****************************** Таск, для сжатия всех библиотек *********************************/
gulp.task('css-libs', ['scss'], function(){
	return gulp.src('app/css/libs.css')
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/css'));
});

/***************************** Таск, который обновляет окно браузера ****************************/
gulp.task('browser-sync', function(){
	browserSync({
		server:{
			baseDir: 'app'
		},
		notify: false
	});
});

/***************************** Таск, который удаляет папку продакшена ****************************/
gulp.task('clean', function(){
	return del.sync('dist');
});

/***************************** Таск для очистки кэша, нужно чистить если закэшировались картинки ****************************/
gulp.task('clear', function(){
	return cache.clearAll();
});

/***************************** Таск, для сжатия изображений ****************************/
gulp.task('img', function(){
	return gulp.src('app/img/**/*')
	.pipe(cache(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()]
	})))
	.pipe(gulp.dest('dist/img'));
});

/************************** Таск, который следит за изминениями в файлаъ *************************/
gulp.task('watch', ['css-libs', 'browser-sync', 'scripts'], function(){
	gulp.watch('app/scss/**/*.scss', ['scss']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

/***************************** Таск для продакшена ****************************/
gulp.task('build', ['clean', 'img', 'scss', 'scripts'], function(){

	var buildCss = gulp.src([
		'app/css/main.css',
		'app/css/libs.min.css',
	])
	.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src(['app/fonts/**/*'])
		.pipe(gulp.dest('dist/fonts'));

	var buildJs = gulp.src('app/js/**/*')
		.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('app/*.html')
		.pipe(gulp.dest('dist'));
});
	