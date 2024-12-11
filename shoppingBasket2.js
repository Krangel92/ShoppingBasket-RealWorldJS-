// Exercise - debugging
// We added a method applyDiscount to the class ShoppingBasket to apply a discount of a certain amount to the
// total price of the basket. However, something doesn't work — can you find the bug?

class ShoppingBasket2 {
	constructor() {
		this.basket = [];
		this.discount = 0;
	}

	addItem(candy) {
		this.basket.push(candy);
	}

	applyDiscount(discount) {
		this.discount = discount; // the bug was that this line was discount = this.discount; & it neede to be inverted.
	}

	getTotalPrice() {
		let totalPrice = 0;
		this.basket.forEach((candy) => {
			totalPrice += candy.getPrice();
		});

		return totalPrice - this.discount;
	}
}

module.exports = ShoppingBasket2;
