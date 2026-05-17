(function () {
	'use strict';

	var btn = document.getElementById('scrollTop');
	if (!btn) return;

	var threshold = 360;
	var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	function update() {
		var show = window.scrollY > threshold;
		btn.classList.toggle('is-visible', show);
		btn.setAttribute('aria-hidden', show ? 'false' : 'true');
		btn.tabIndex = show ? 0 : -1;
	}

	btn.addEventListener('click', function () {
		window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
	});

	window.addEventListener('scroll', update, { passive: true });
	update();
})();
