const Candy = require("./candy.js");

describe("candy", () => {
	it("takes a candy name & its price and the getName method returns the name", () => {
		// Create an instance of the Candy class:
		let candy1 = new Candy("Twix", 3.5);

		// Test the getName method on the instance created:
		expect(candy1.getName()).toBe("Twix");
	});
	it("takes a candy name & its price and the getPrice method returns the price", () => {
		let candy2 = new Candy("Twix", 3.5);

		expect(candy2.getPrice()).toBe(3.5);
	});
});
