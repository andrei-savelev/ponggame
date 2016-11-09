import Ball from './Ball';
import Player from './Player';

/**
* @class
* @params {Element} canvas - canvas element
*/
export default class Pong {
	constructor(canvas) {
		let lastTime = 0;

		const CALLBACK = (ms) => {
			if (lastTime) {
				this.update((ms - lastTime) / 1000);
			}

			lastTime = ms;

			requestAnimationFrame(CALLBACK)
		}

		this._CANVAS = canvas;
		
		this._CONTEXT = this._CANVAS.getContext('2d');
		
		this.BALL = new Ball();
		
		this.BALL.pos.x = 100;
		this.BALL.pos.y = 50;

		this.BALL.vel.x = 100;
		this.BALL.vel.y = 100;

		this.players = [
			new Player(),
			new Player()
		];

		this.players[0].pos.x = 40;
		this.players[1].pos.x = this._CANVAS.width - this.players[0].pos.x;
		this.players.forEach(player => {
			player.pos.y = this._CANVAS.height / 2;
		});

		CALLBACK();
	}

	/**
	* @publuc
	* @param {object} rect
	*/
	drowRect(rect) {
		this._CONTEXT.fillStyle = '#fff';
		this._CONTEXT.fillRect(
			rect.left, 
			rect.top, 
			rect.size.x, 
			rect.size.y
		);
	}

	/**
	* @public
	*/

	drow() {
		this._CONTEXT.fillStyle = '#000';
		this._CONTEXT.fillRect(0, 0, this._CANVAS.width, this._CANVAS.height);

		this.drowRect(this.BALL);

		this.players.forEach(player => this.drowRect(player));
	}

	/**
	* @public
	* @param {number} dt - date time
	*/
	update(dt) {
		this.BALL.pos.x += this.BALL.vel.x * dt;
		this.BALL.pos.y += this.BALL.vel.y * dt;

		if (this.BALL.left < 0 || this.BALL.right > this._CANVAS.width) {
			this.BALL.vel.x = -this.BALL.vel.x;
		}

		if (this.BALL.top < 0 || this.BALL.bottom > this._CANVAS.height) {
			this.BALL.vel.y = -this.BALL.vel.y;
		}

		this.drow();

	}
}