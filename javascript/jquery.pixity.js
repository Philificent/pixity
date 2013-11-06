/**
Pixity - The responsive image replacement utility
Written by Phil (dutsonpa) / ICON Health & Fitness
Version 1.131105

https://github.com/dutsonpa/pixity
**/

;(function($){
	$.pixity = function(options) {
		var settings = $.extend(
			{
				imgClass: 'pixity',
				limitSm: 479,
				limitMd: 767
			},
			options
		);
		var domNode = $('.'+settings.imgClass);
		var cw = document.documentElement.clientWidth;

		var imgSm = function() {
			domNode.each(function() {
				var $this = $(this);
				$this.attr('src',$this.data('path') +'/'+$this.data('sm'));
			});
		};
		var imgMd = function() {
			domNode.each(function() {
				var $this = $(this);
				$this.attr('src',$this.data('path') +'/'+$this.data('md'));
			});
		};
		var imgLg = function() {
			domNode.each(function() {
				var $this = $(this);
				$this.attr('src',$this.data('path') +'/'+$this.data('lg'));
			});
		};

		if (cw <= settings.limitSm) {
			imgSm(domNode);
		} else if (cw <= settings.limitMd) {
			imgMd(domNode);
		} else {
			imgLg(domNode);
		}
	}
})(jQuery);