(function () {
	'use strict';

	var root = document.documentElement;
	root.classList.add('js-reveal-ready');

	function show(el) {
		el.classList.add('is-visible');
	}

	var targets = document.querySelectorAll('.reveal, .reveal-stagger');
	if (!targets.length) return;

	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		targets.forEach(show);
		return;
	}

	document.querySelectorAll('.reveal--instant').forEach(function (el) {
		requestAnimationFrame(function () {
			requestAnimationFrame(function () {
				show(el);
			});
		});
	});

	if (!('IntersectionObserver' in window)) {
		targets.forEach(show);
		return;
	}

	var observer = new IntersectionObserver(
		function (entries) {
			entries.forEach(function (entry) {
				if (!entry.isIntersecting) return;
				show(entry.target);
				observer.unobserve(entry.target);
			});
		},
		{ rootMargin: '0px 0px -6% 0px', threshold: 0.12 }
	);

	targets.forEach(function (el) {
		if (el.classList.contains('reveal--instant')) return;
		observer.observe(el);
	});
})();
