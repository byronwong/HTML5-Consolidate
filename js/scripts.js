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
						link : '00-home'
					},
					{
						path : '01-TextMarkup.html',
						link : '01-Text Markup'
					},
					{
						path : '02-Images.html',
						link : '02-Images'
					},
					{
						path : '03-Hyperlinks.html',
						link : '03-Hyperlinks'
					},
					{
						path : '04-Layout.html',
						link : '04-Layout'
					},
					{
						path : '05-MediaElements.html',
						link : '05-Media Elements'
					},
					{
						path : '06-DataAttribute.html',
						link : '06-Data Attributes'
					},
					{
						path : '07-Tables.html',
						link : '07-Tables'
					},
					{
						path : '08-Forms-Basic.html',
						link : '08-Basic Forms'
					},
					{
						path : '08-Forms-Example.html',
						link : '08-1-Form Example'
					},
					{
						path : '09-CanvasExample.html',
						link : '09-Canvas Example'
					},
					{
						path : '10-Data-Storage.html',
						link : '10- Data Storage'
					},
				]
			});
			$('#main-nav').html(rendered);
		});
	};

	$(function() {
		createNav();
	});

})();
