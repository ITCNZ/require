define('index/a', [
    'require',
    'exports',
    'module'
], function (require, exports, module) {
    function fn() {
        console.log('hello module a');
    }
    exports.fn = fn;
});
define('script/b', [
    'require',
    'exports',
    'module',
    'index/a'
], function (require, exports, module) {
    var a = require('../index/a');
    a.fn();
    console.log('hello module b');
    console.log('b finished');
});
define('c', ['script/b'], function (require, exports, module) {
    console.log('hello module c');
    console.log('c finished');
});