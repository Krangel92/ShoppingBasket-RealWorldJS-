class ShoppingBasket {
	constructor() {
		this.basket = [];
	}

	addItem(candy) {
		this.basket.push(candy);
	}

	getTotalPrice() {
		let total = 0;
		for (let i = 0; i < this.basket.length; i++) {
			total += this.basket[i].getPrice();
		}
		return total;
	}
}

module.exports = ShoppingBasket;
