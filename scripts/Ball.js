import Vec from './Vec';
import Rect from './Rect';

export default class Ball extends Rect {
	constructor() {
		super(10, 10);
		this.vel = new Vec();
	}
}