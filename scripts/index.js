import Rect from './Rect';
import Pong from './Pong';

// Constants
const CANVAS = document.getElementById('pong');
const PONG = new Pong(CANVAS);

CANVAS.addEventListener('mousemove', oEvent => {
	PONG.players[0].pos.y = oEvent.offsetY;
});

CANVAS.addEventListener('click', oEvent => {
	PONG.start();
});
