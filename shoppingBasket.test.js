// Exercise (instructions):
// write tests for the Shoppingbasket class using a JS object as a "double" or mock.

const ShoppingBasket = require("./shoppingBasket.js");

describe("shoppingBasket", () => {
	it("adds the candy to the initially empty basket", () => {
		// Create a fake candy object:
		let fakeCandy = { getName: () => "Twix", getPrice: () => 3.5 };

		// Create an instance of ShoppingBasket:
		let basket = new ShoppingBasket();

		// Add the fake candy to the basket:
		basket.addItem(fakeCandy);

		// Verify the total price:
		expect(basket.getTotalPrice()).toBe(3.5);
	});
});
