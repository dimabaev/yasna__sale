'use strict';

/*==============================
ПОДКЛЮЧАЕМ РАСШИРЕНИЯ
===============================*/

const path              = require('path');
const del               = require('del');
const gulp              = require('gulp');
const gulplog           = require('gulplog');
const combine           = require('stream-combiner2').obj;
const throttle          = require('lodash.throttle');
const debug             = require('gulp-debug');
const sourcemaps        = require('gulp-sourcemaps');
const browserSync       = require('browser-sync').create();
const gulpIf            = require('gulp-if');
const cssnano           = require('gulp-cssnano');
const rev               = require('gulp-rev');
const revReplace        = require('gulp-rev-replace');
const plumber           = require('gulp-plumber');
const notify            = require('gulp-notify');
const uglify            = require('gulp-uglify');
const AssetsPlugin      = require('assets-webpack-plugin');
const pug               = require('gulp-pug');
 
/*================================
ПОДКЛЮЧАЕМ расширения для POSTCSS
=================================*/

const postcss           = require('gulp-postcss');
const assets            = require('postcss-assets');
const fontMagician      = require('postcss-font-magician');
const cssImport         = require('postcss-import');
const nested            = require('postcss-nested');
const short             = require('postcss-short');
const cssnext           = require('cssnext');
const lost              = require('lost');
const autoprefixer      = require('autoprefixer')

/*================================
GULP + WEBPACK
=================================*/

const webpackStream     = require('webpack-stream');
const webpack           = webpackStream.webpack;
const named             = require('vinyl-named');

/*==============================
ПУТИ К ПАПКАМ И ФАЙЛАМ
===============================*/

let
    paths = {
              pug : {
                location    : 'app/markups/**/*.pug',
                compiled    : 'app/markups/pages/*.pug',
                destination : 'public'
              },

              postcss : {
                location    : 'app/styles/**/*.css',
                entryPoint  : 'app/styles/main.css'
              },

              js : {
                location : 'app/js/main.js',
                plugins  : 'app/js/_plugins/*.js'
              },

              browserSync : {
                baseDir : 'app',
                watchPaths : ['public/*.html', 'public/styles/*.css', 'public/js/*.js']
              }
    }

/*==============================
РАЗДЕЛЯЕМ DEV ОТ ПРОДАКШЕНА
===============================*/

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

/*==============================
ПОДКЛЮЧАЕМ POSTCSS
===============================*/

gulp.task('styles', function() {

  let processors = [ assets, fontMagician, cssImport, nested, short, lost, autoprefixer];

  return gulp.src(paths.postcss.entryPoint)

      .pipe(plumber({
        errorHandler: notify.onError(err => ({
          title:   'Styles',
          message: err.message
        }))
      }))

      .pipe(gulpIf(isDevelopment, sourcemaps.init()))
      .pipe(postcss(processors))
      .pipe(gulpIf(isDevelopment, sourcemaps.write()))
      .pipe(gulpIf(!isDevelopment, combine(cssnano(), rev())))
      .pipe(gulp.dest('public/styles'))
      .pipe(gulpIf(!isDevelopment, combine(rev.manifest('css.json'), gulp.dest('manifest'))));

});

/*==============================
PUG
===============================*/

gulp.task('pug', function() {
  return gulp.src(paths.pug.compiled)
		.pipe(plumber())
		.pipe(pug({
			pretty: '\t'
		}))
		.pipe(gulp.dest(paths.pug.destination));
});

/*==============================
ASSETS
===============================*/

gulp.task('assets', function() {
  return gulp.src('app/assets/**/*.*', {since: gulp.lastRun('assets')})
      .pipe(gulpIf(!isDevelopment, revReplace({
        manifest: gulp.src('manifest/css.json', {allowEmpty: true})
      })))
      .pipe(gulpIf(!isDevelopment, revReplace({
        manifest: gulp.src('manifest/webpack.json', {allowEmpty: true})
      })))
      .pipe(gulp.dest('public'));
});

/*==============================
STYLES:ASSETS
===============================*/

gulp.task('styles:assets', function() {
  return gulp.src('app/styles/**/*.{svg,png}', {since: gulp.lastRun('styles:assets')})
      .pipe(gulp.dest('public/styles'));
});

/*==============================
WEBPACK (ИНТЕГРАЦИЯ В GULP)
===============================*/

gulp.task('webpack', function(callback) {
  let firstBuildReady = false;

  function done(err, stats) {
    firstBuildReady = true;

    if (err) { // hard error, see https://webpack.github.io/docs/node.js-api.html#error-handling
      return;  // emit('error', err) in webpack-stream
    }

    gulplog[stats.hasErrors() ? 'error' : 'info'](stats.toString({
      colors: true
    }));

  }

  let options = {
      output: {
        publicPath: './app/js/',
        filename: isDevelopment ? '[name].js' : '[name]-[chunkhash:10].js'
      },
      watch:   isDevelopment,
      devtool: isDevelopment ? 'cheap-module-inline-source-map' : null,
      module:  {
        loaders: [{
          test:    /\.js$/,
          include: path.join(__dirname, "app"),
          loader:  'babel?presets[]=es2015'
        }]
      },
      plugins: [
        new webpack.NoErrorsPlugin()
      ]
  };

  if (!isDevelopment) {
    options.plugins.push(new AssetsPlugin({
      filename: 'webpack.json',
      path:     __dirname + '/manifest',
      processOutput(assets) {
        for (let key in assets) {
          assets[key + '.js'] = assets[key].js.slice(options.output.publicPath.length);
          delete assets[key];
        }
        return JSON.stringify(assets);
      }
    }));
  }

  return gulp.src('app/js/*.js')
      .pipe(plumber({
        errorHandler: notify.onError(err => ({
          title:   'Webpack',
          message: err.message
        }))
      }))
      .pipe(named())
      .pipe(webpackStream(options, null, done))
      .pipe(gulpIf(!isDevelopment, uglify()))
      .pipe(gulp.dest('public/js'))
      .on('data', function() {
        if (firstBuildReady) {
          callback();
        }
      });

});

/*==============================
CLEAN
===============================*/

gulp.task('clean', function() {
  return del(['public', 'manifest']);
});


/*==============================
СБОРКА build
===============================*/

gulp.task('build', gulp.series('clean', gulp.parallel('styles:assets', 'pug', 'styles', 'webpack'), 'assets'));

gulp.task('serve', function() {
  browserSync.init({
    server: 'public'
  });

  browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});

/*==============================
СБОРКА DEV
===============================*/

gulp.task('dev',
    gulp.series(
        'build',
        gulp.parallel(
            'serve',
            function() {
              gulp.watch('app/markups/**/*.pug', gulp.series('pug'));
              gulp.watch('app/styles/**/*.css', gulp.series('styles'));
              gulp.watch('app/assets/**/*.*', gulp.series('assets'));
              gulp.watch('app/styles/**/*.{svg,png}', gulp.series('styles:assets'));
            }
        )
    )
);
