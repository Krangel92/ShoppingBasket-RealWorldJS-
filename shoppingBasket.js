class ShoppingBasket {
	constructor() {
		this.basket = [];
	}

	addItem(candy) {
		this.basket.push(candy.price);
	}

	getTotalPrice() {
		let total = 0;
		for (let i = 0; i < this.basket.length; i++) {
			total += this.basket[i];
		}
		return total;
	}
}

module.exports = ShoppingBasket;
