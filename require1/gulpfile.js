//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    uglify = require('gulp-uglify'),//压缩文件
	concat = require('gulp-concat'),//文件合并
	rename = require('gulp-rename'),//重命名
	sass = require('gulp-sass'),//重命名
    amdOptimize = require("amd-optimize");          //require优化

//require合并
   
gulp.task("default", function () {  
   
  return gulp.src("app/**/*.js")   //路径“**”表示"app/路径下以及所有子目录里的js文件
    // Traces all modules and outputs them in the correct order.   
    .pipe(amdOptimize("c"))   //主入口文件  
    .pipe(concat("c.js"))      //合并后的文件，如果合并后的文件和主入口名一样，构建后便只有一个文件
	//.pipe(rename({suffix: '.min'}))  
    .pipe(gulp.dest("dist"));  //输出目录  
   
});  