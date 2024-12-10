// Exercise (instructions):
// write tests for the Candy class using a JS object as a "double" or mock.

const Candy = require("./candy.js");
// mocking a candy instance of the Candy class:
let candyDouble = { getName: () => "Twix", getPrice: () => 3.5 };

describe("candy", () => {
	it("takes a candy name & its price and the getName method returns the name", () => {
		// Test the getName method on the mocke instance created:
		expect(candyDouble.getName()).toBe("Twix");
	});
	it("takes a candy name & its price and the getPrice method returns the price", () => {
		expect(candyDouble.getPrice()).toBe(3.5);
	});
});
