const Candy = require("./candy.js");

describe("candy", () => {
	it("takes a candy name & its price and returns the name", () => {
		// Create an instance of the Candy class:
		let candy1 = new Candy("Twix", 3.5);

		// Test the getName method on the instance created:
		expect(candy1.getName()).toBe("Twix");
	});
});
