/**
Pixity - The responsive image replacement utility
Written by Phil (dutsonpa) / ICON Health & Fitness
Version 1.131105

https://github.com/dutsonpa/pixity
**/

function pixity(imgClass, limitSm, limitMd) {
	// set defaults
	if (imgClass === undefined) imgClass = "pixity";
	if (limitSm === undefined) limitSm = 479;
	if (limitMd === undefined) limitMd = 767;

	var cw = document.documentElement.clientWidth;
	var domNode = $("."+imgClass);

	if (cw <= limitSm) {
		imgSm(domNode);
	} else if (cw <= limitMd) {
		imgMd(domNode);
	} else {
		imgLg(domNode);
	}

	function imgSm(domNode) {
		$(".pixity").each(function() {
			var $this = $(this);
			$this.attr('src',$this.data('path') +'/'+$this.data('sm'));
		});
	}

	function imgMd(domNode) {
		$(".pixity").each(function() {
			var $this = $(this);
			$this.attr('src',$this.data('path') +'/'+ $this.data('md'));
		});
	}

	function imgLg(domNode) {
		$(".pixity").each(function() {
			var $this = $(this);
			$this.attr('src',$this.data('path') +'/'+$this.data('lg'));
		});
	}
}