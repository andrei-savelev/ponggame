import Vec from './Vec';

export default class Rect {
	constructor(w, h) {
		this.pos = new Vec();
		this.sixe = new Vec(w, h);
	}
}