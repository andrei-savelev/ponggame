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

		this.reset();
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

	collide(player, ball) {
		const LEN = ball.vel.len;

		if (player.left < ball.right && player.right > ball.left &&
			player.top < ball.bottom && player.bottom > ball.top) {
			ball.vel.x = -ball.vel.x;
			ball.vel.y += 300 * (Math.random() - 0.5 );
			ball.vel.len = LEN * 1.05;
		}
	}

	reset() {
		this.BALL.pos.x = this._CANVAS.width / 2;
		this.BALL.pos.y = this._CANVAS.height / 2;

		this.BALL.vel.x = 0;
		this.BALL.vel.y = 0;
	}

	start() {
		if (this.BALL.vel.x === 0 && this.BALL.vel.y === 0) {
			this.BALL.vel.x = 300 * (Math.random() > 0.5 ? 1: -1);
			this.BALL.vel.y = 300 * (Math.random() * 2 -1);
			this.BALL.vel.len = 200;
		}
	}

	/**
	* @public
	* @param {number} dt - date time
	*/
	update(dt) {
		let playerId = null;

		this.BALL.pos.x += this.BALL.vel.x * dt;
		this.BALL.pos.y += this.BALL.vel.y * dt;

		if (this.BALL.left < 0 || this.BALL.right > this._CANVAS.width) {
			playerId = this.BALL.vel.x > 0 | 0;

			this.players[playerId].score++;

			this.reset();
		}

		if (this.BALL.top < 0 || this.BALL.bottom > this._CANVAS.height) {
			this.BALL.vel.y = -this.BALL.vel.y;
		}

		this.players[1].pos.y = this.BALL.pos.y;

		this.players.forEach(player => this.collide(player, this.BALL));

		this.drow();

	}
}