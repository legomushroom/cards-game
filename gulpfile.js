var gulp          = require('gulp');
var livereload    = require('gulp-livereload');

gulp.task('default', function(){
  livereload.listen();
  gulp.watch('./app/build/guarantee-rate-game.js', function (e) {
    gulp
      .src(e.path)
      .pipe(livereload());
  });
});








