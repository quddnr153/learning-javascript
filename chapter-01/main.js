$(document).ready(function() {
	'use strict';
	paper.install(window);
	paper.setup(document.getElementById('mainCanvas'));

	var circle;
	for (var x = 25; x < 400; x += 50) {
		for (var y = 25; y < 400; y += 50) {
			circle = Shape.Circle(x, y, 20)
			circle.fillColor = 'green';
		}
	}

	paper.view.draw();
});
