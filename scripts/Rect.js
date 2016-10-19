import Vec from './Vec';

export default class Rect {
	constructor(w, h) {
		this.pos = new Vec();
		this.size = new Vec(w, h);
	}
}