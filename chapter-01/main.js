$(document).ready(function() {
	'use strict';
	paper.install(window);
	paper.setup(document.getElementById('mainCanvas'));

	var tool = new Tool();

	var c = Shape.Circle(200, 200, 80);
	c.fillColor = 'black';

	var text = new PointText(200, 200);
	text.jstification = 'center';
	text.fillColor = 'white';
	text.fontSize = 20;
	text.content = 'hello world';

	tool.onMouseDown = function(event) {
		var circle = Shape.Circle(event.point.x, event.point.y, 20);
		circle.fillColor = 'green';
	}

	paper.view.draw();
});
