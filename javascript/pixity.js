/**
Pixity - The responsive image replacement utility
Written by Phil (dutsonpa)
Version 1.140204

https://github.com/dutsonpa/pixity
**/

function pixity(imgClass, limitSm, limitMd, limitLg) {
	// set defaults
	if (imgClass === undefined) { imgClass = "pixity"; }
	if (limitSm === undefined) { limitSm = 480; }
	if (limitMd === undefined) { limitMd = 768; }
    if (limitLg === undefined) { limitLg = 960; }

	var cw = document.documentElement.clientWidth, domNode = $("." + imgClass);

	if (cw <= limitSm) {
		imgSm(domNode);
	} else if (cw <= limitMd) {
		imgMd(domNode);
	} else if (cw <= limitLg) {
		imgLg(domNode);
	} else {
		imgXl(domNode);
	}

	function imgSm(domNode) {
		$(".pixity").each(function () {
			var $this = $(this);
			$this.attr('src', $this.data('path') + '/' + $this.data('sm'));
		});
	}

	function imgMd(domNode) {
		$(".pixity").each(function () {
			var $this = $(this);
			$this.attr('src', $this.data('path') + '/' + $this.data('md'));
		});
	}

	function imgLg(domNode) {
		$(".pixity").each(function () {
			var $this = $(this);
			$this.attr('src', $this.data('path') + '/' + $this.data('lg'));
		});
	}
    function imgXl(domNode) {
		$(".pixity").each(function () {
			var $this = $(this);
			$this.attr('src', $this.data('path') + '/' + $this.data('xl'));
		});
	}
}