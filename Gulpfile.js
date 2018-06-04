const gulp = require('gulp')
const rename = require('gulp-rename')
const babel = require('babelify')
const browserify = require('browserify')
const source = require('vinyl-source-stream')

gulp.task('styles', () => {
  gulp
  .src('index.css')
  .pipe(rename('app.css'))
  .pipe(gulp.dest('public'))
})

gulp.task('assets', () => {
  gulp
  .src('assets/*')
  .pipe(gulp.dest('public'))
})

gulp.task('build', () => {
  return compile()
})

function compile() {
 let bundle = browserify('./src/index.js', {debug:true})

  bundle
  .transform(babel, { presets: [ 'es2015' ], plugins: [ 'syntax-async-functions', 'transform-regenerator' ] })
  .bundle()
  .on('error', function (err) { console.log(err); this.emit('end') })
  .pipe(source('index.js'))
  .pipe(rename('app.js'))
  .pipe(gulp.dest('public'))
}

gulp.task('default', ['styles', 'assets', 'build'])
