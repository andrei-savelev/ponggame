export default class Vec {
	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}

	get len() {
		return Math.sqrt(this.x * this.x + this.y * this.y)
	}

	set len(iValue) {
		const FACT = iValue / this.len;

		this.x *= FACT;
		this.y *= FACT;
	}
}