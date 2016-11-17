(function(){
	"use strict";
	console.log('script.js loaded...');

	// Generate the Nav
	function createNav(){
		$.get('partials/_nav.mustache', function(template) {
			var rendered = Mustache.render(template, {
				items: [
					{
						path : 'index.html',
						link : 'home'
					},
					{
						path : 'nextpage.html',
						link : 'next page'
					}
				]
			});
			$('#main-nav').html(rendered);
		});
	};

	$(function() {
		createNav();
	});

})();
