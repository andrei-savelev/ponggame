import Rect from './Rect';
import Ball from './Ball';

// Constants
const CANVAS = document.getElementById('pong');
const CONTEXT = CANVAS.getContext('2d');
const BALL = new Ball();

let lastTime = 0;


BALL.pos.x = 100;
BALL.pos.y = 50;

BALL.vel.x = 100;
BALL.vel.y = 100;

function callBack(ms) {
	if (lastTime) {
		update((ms - lastTime) / 1000);
	}

	lastTime = ms;

	requestAnimationFrame(callBack)
}

function update(dt) {
	BALL.pos.x += BALL.vel.x * dt;
	BALL.pos.y += BALL.vel.y * dt;

	if (BALL.left < 0 || BALL.right > CANVAS.width) {
		BALL.vel.x = -BALL.vel.x;
	}

	if (BALL.top < 0 || BALL.bottom > CANVAS.height) {
		BALL.vel.y = -BALL.vel.y;
	}

	CONTEXT.fillStyle = '#000';
	CONTEXT.fillRect(0, 0, CANVAS.width, CANVAS.height);

	CONTEXT.fillStyle = '#fff';
	CONTEXT.fillRect(BALL.pos.x, BALL.pos.y, BALL.size.x, BALL.size.y);
}

callBack();
