/*require.config({
	baseUrl:
	paths: {
		jquery: 'http://www.qbaobei.com/Public/Home/qbaobei2/js/jquery.js'
	}
});*/
require(["jquery","a", "b", "c"], function($,a,b,c) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
		console.log($)
        $('body').alpha().beta().CC();
    });
});
