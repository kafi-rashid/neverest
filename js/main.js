jQuery(document).ready(function() {
	
	var lFollowX = 0, lFollowY = 0, x = 0, y = 0,
	friction = 1 / 30;
	function moveBackground() {
		x += (lFollowX - x) * friction;
		y += (lFollowY - y) * friction;
		$('.parallax').not('.static').each(function() {
			var that = $(this);
			that.css({
				'-webit-transform': 'translate(' + (x * that.data('eh')) + 'px, ' + (y * that.data('eh') / 5) + 'px) scale(1.1)',
				'-moz-transform': 'translate(' + (x * that.data('eh')) + 'px, ' + (y * that.data('eh') / 5) + 'px) scale(1.1)',
				'transform': 'translate(' + (x * that.data('eh')) + 'px, ' + (y * that.data('eh') / 5) + 'px) scale(1.1)'
			});
		});
		window.requestAnimationFrame(moveBackground);
	}
	$(window).on('mousemove click', function(e) {
		var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
		var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
		lFollowX = (20 * lMouseX) / 100;
		lFollowY = (10 * lMouseY) / 100;
	});
	moveBackground();

});