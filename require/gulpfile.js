//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    uglify = require('gulp-uglify'),//压缩文件
	concat = require('gulp-concat'),//文件合并
	rename = require('gulp-rename'),//重命名
	sass = require('gulp-sass');//重命名
    amdOptimize = require("amd-optimize");           //require优化
    watch = require('gulp-watch');

//require合并
gulp.task('rjs', function () {
    gulp.src('js/js/*.js')
        .pipe(amdOptimize("main"/*, {
           //require config
            paths: {
                "jquery.alpha": "../js/jquery.alpha.js",
                "jquery.beta": "../js/jquery.beta.js",
                "jquery.c": "../js/jquery.c.js"
            },
            shim: {
                "jquery.serializeJSON": ['jquery']
            }
        }*/))
        .pipe(concat("index.js"))           //合并
        .pipe(gulp.dest("dist"))          //输出保存
       // .pipe(rename("index.min.js"))          //重命名
       // .pipe(uglify())                        //压缩
      //  .pipe(gulp.dest("dist"));         //输出保存
});

gulp.task('default', function () {
    //监听js变化
    gulp.watch('/js/**/*.js', function () {       //当js文件变化后，自动检验 压缩
        //gulp.run('lint', 'scripts');
        gulp.run('lint', 'rjs');
    });


});