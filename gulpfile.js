/* eslint-disable */
'use strict';

var paths = {
    assetsFolder: '_assets',
    templates: '_templates',
    siteFolder: 'tgdh.Web',
    assetsBuildFolder: 'tgdh.Web/assets'
};

/* ===========================================================
	# vars
=========================================================== */

var gulp = require('gulp'),
    merge = require('merge-stream'),
    del = require('del'),
    postcss = require('gulp-postcss'),
    rollup = require('rollup'),
    babel = require('rollup-plugin-babel'),
    fileinclude = require('gulp-file-include'),
	commonjs = require('rollup-plugin-commonjs'),
	nodeResolve = require('rollup-plugin-node-resolve'),
    svgSprite = require('gulp-svg-sprite'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /\bgulp[\-.]/
    });

var CacheBuster = require('gulp-cachebust');
var cachebust = new CacheBuster();

var isProduction = false;

var AUTOPREFIXER_BROWSERS = [
    'last 2 versions',
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
];

/* ===========================================================
	# Tasks
=========================================================== */

// CSS
gulp.task( 'css', function() {
    return gulp.src( paths.assetsFolder + '/sass/*.scss' )
        .pipe( $.newer('.tmp/styles') )
        .pipe( $.sourcemaps.init() )
        .pipe( $.sass({
            precision: 10
        }).on('error', $.sass.logError))
        .pipe( $.autoprefixer( AUTOPREFIXER_BROWSERS ) )
        .pipe( gulp.dest('.tmp/styles') )
        .pipe( $.if( isProduction, $.combineMq({ beautify: false }) ) )
        .pipe( $.if( isProduction, $.cssnano() ) )
//        .pipe( $.size({ title: '[CSS]' }) )
        .pipe( $.sourcemaps.write( './' ) )
        .pipe( $.if( isProduction, cachebust.resources() ) )
        .pipe( gulp.dest( paths.assetsBuildFolder + '/css' ) );
//        .pipe( $.notify({ message: 'CSS: <%= file.relative %>' }) );
});


/*
// JS
gulp.task('js-legacy', function() {
    var main = gulp.src( legacyScripts )
//        .pipe( $.newer('.tmp/scripts') )
        .pipe( $.sourcemaps.init() )
        .pipe( $.sourcemaps.write() )
//        .pipe( gulp.dest('.tmp/scripts') )
        .pipe( $.concat('legacy.js') )
        .pipe( $.if( isProduction, $.uglify({preserveComments: 'some'}) ) )
//        .pipe( $.size({title: '[Main JS]'}) )
        .pipe( $.sourcemaps.write('.') )
        .pipe( $.if( isProduction, cachebust.resources() ) )
        .pipe( gulp.dest( paths.assetsBuildFolder + '/js' ) );
//        .pipe( $.notify({ message: 'JS: <%= file.relative %>' }) );

    return merge( main );
});
*/


// js
gulp.task('js', function () {
	return rollup.rollup({
		entry: paths.assetsFolder + '/js/main.js',
		plugins: [
			nodeResolve({
				jsnext: true,
				main: true
			}),
			commonjs({
				// non-CommonJS modules will be ignored, but you can also
				// specifically include/exclude files
				include: 'node_modules/**',
				//exclude: [ 'node_modules/foo/**', 'node_modules/bar/**' ],  // Default: undefined
				extensions: ['.js'],
				ignoreGlobal: false,
				sourceMap: true,
				// explicitly specify unresolvable named exports
//				namedExports: {
//                    'node_modules/swiper/dist/js/swiper.js': ['Swiper']
//                }
			}),
			babel({
                exclude: 'node_modules/**/!(image-comparison/ImageComparison.js)'
            })
		],
	})
	.then(function (bundle) {
		bundle.write({
			format: "es",
			moduleName: "tgdh",
			dest: paths.assetsBuildFolder + '/js/main.js',
			sourceMap: true
		});
	});
});

/*
// JS
gulp.task('js', function() {
    var head = gulp.src( headScripts )
        .pipe( $.newer('.tmp/scripts') )
        .pipe( gulp.dest('.tmp/scripts') )
        .pipe( $.concat('head.js') )
        .pipe( $.if( isProduction, $.uglify({preserveComments: 'some'}) ) )
//        .pipe( $.size({title: '[Head JS]'}) )
        .pipe( $.if( isProduction, cachebust.resources() ) )
        .pipe( gulp.dest( paths.assetsBuildFolder + '/js') );
//        .pipe( $.notify({ message: 'JS: <%= file.relative %>' }) );

    var main = gulp.src( mainScripts )
//        .pipe( $.newer('.tmp/scripts') )
        .pipe( $.sourcemaps.init() )
        .pipe( $.sourcemaps.write() )
        .pipe( $.jshint('.jshintrc') )
        .pipe( $.jshint.reporter('default') )
//        .pipe( gulp.dest('.tmp/scripts') )
        .pipe( $.concat('main.js') )
        .pipe( $.if( isProduction, $.uglify({preserveComments: 'some'}) ) )
//        .pipe( $.size({title: '[Main JS]'}) )
        .pipe( $.sourcemaps.write('.') )
        .pipe( $.if( isProduction, cachebust.resources() ) )
        .pipe( gulp.dest( paths.assetsBuildFolder + '/js' ) );
//        .pipe( $.notify({ message: 'JS: <%= file.relative %>' }) );

    return merge( head, main );
});
*/

// modernizr
gulp.task('modernizr', function(){
    return gulp.src([
        '!' + paths.assetsFolder + '/js/lib/modernizr.js',
        paths.assetsFolder + '/js/**/*.js',
        paths.assetsFolder + '/sass/**/*.scss'
    ])
	.pipe( $.newer('.tmp/scripts') )
	.pipe( gulp.dest('.tmp/scripts') )
    .pipe( $.modernizr({
        'options': ['setClasses']
    }))
	.pipe( $.if( isProduction, $.uglify({preserveComments: 'some'}) ) )
//	.pipe( $.if( isProduction, cachebust.resources() ) )
    .pipe( gulp.dest( paths.assetsBuildFolder + '/js') );
});

// icons
gulp.task('icons', function() {
    return gulp.src(paths.assetsFolder + '/img/icons/**/*.svg')
		.pipe($.svgmin())
        .pipe(svgSprite({
            mode: {
                symbol: { // symbol mode to build the SVG
                    dest: 'icons', // destination foldeer
                    sprite: 'icons.svg', //sprite name
                    example: true, // Build sample page
					prefix: "u-icon-"
                }
            },
            svg: {
                xmlDeclaration: false, // strip out the XML attribute
                doctypeDeclaration: false // don't include the !DOCTYPE declaration
            }
        }))
        .pipe(gulp.dest(paths.assetsBuildFolder));
});

/*
gulp.task('sprite-shortcut', function() {
  return gulp.src('sprite/sprite.svg')
    .pipe(gulp.dest('.'));
});
*/

// IE
gulp.task( 'ie', function() {
    return gulp.src( '.tmp/styles/ie.css' )
        .pipe(
            postcss([
                require('postcss-unmq')({
                    type: 'screen',
                    width: '62.5em'
                })
            ])
        )
        .pipe( $.pixrem({
            rootValue: '62.5%',
            replace: true
        }) )
        .pipe( gulp.dest( paths.assetsBuildFolder + '/css/' ) );
//        .pipe( $.notify({ message: 'CSS: <%= file.relative %>' }) );
});

// Optimize images
gulp.task('images', function() {
    return gulp.src( paths.assetsFolder + '/img/**/*')
        .pipe( $.cache( $.imagemin({
            progressive: true,
            interlaced: true
        })))
        .pipe( gulp.dest( paths.assetsBuildFolder + '/img') )
        .pipe( $.size({title: 'images'}) );
//        .pipe( $.notify({ message: 'images task complete' }) );
});

// Copy fonts
gulp.task('copyfonts', function() {
    gulp.src( paths.assetsFolder + '/fonts/**/*')
    .pipe( $.newer('.tmp/fonts') )
    .pipe( gulp.dest('.tmp/fonts') )
    .pipe( gulp.dest( paths.assetsBuildFolder + '/fonts') );
});

// Clear the image cache to force reoptims
gulp.task('clearCache', function (done) {
  return $.cache.clearAll(done);
});

// Clean directories
gulp.task('clean', function() {
    return del([
        '.tmp',
        paths.assetsBuildFolder + '/css',
        paths.assetsBuildFolder + '/js',
        paths.assetsBuildFolder + '/img',
        paths.assetsBuildFolder + '/fonts'
    ]);
});

// file includes
gulp.task('templates', function() {
	return gulp.src( paths.templates + '/**/*.html')
	    .pipe(fileinclude({
		prefix: '@',
		basepath: '@file'
	}))
    .pipe(gulp.dest('frontend'));
});

// Watch task
gulp.task( 'watch', function() {
    gulp.watch( paths.assetsFolder + '/sass/**/*.scss', [ 'css' ] );
    gulp.watch( paths.assetsFolder + '/js/**/*.js', [ 'js' ] );
    gulp.watch( paths.assetsFolder + '/img/**/*', ['images'] );
	gulp.watch( paths.assetsFolder + '/img/icons/**/*.svg', ['icons'] );
//	gulp.watch( paths.templates + '/**/*.html', ['templates'] );
} );


// Copy master template with correct asset references
gulp.task('refAssets', ['css','js'], function() {
    return gulp.src( paths.templates + '/Master.cshtml')
        .pipe( $.if( isProduction, cachebust.references() ) )
        .pipe( gulp.dest( paths.siteFolder + '/Views' ) );
});

// gulp dev
gulp.task('dev', ['clean'], function() {
    isProduction = false;
    gulp.start('refAssets', 'images', 'watch', 'copyfonts', 'modernizr');
});

// gulp build
gulp.task('build', ['clean'], function() {
    isProduction = true;
    gulp.start('refAssets', 'images', 'copyfonts', 'modernizr');
});
/* eslint-enable */
