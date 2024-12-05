class ShoppingBasket {
	constructor() {
		this.basket = [];
	}

	addItem(candy) {
		this.basket.push(candy);
	}

	getTotalPrice() {
		let total = 0;
		for (i = 0; i < this.basket.length; i++) {
			total += this.basket[i];
		}
		return total;
	}
}
