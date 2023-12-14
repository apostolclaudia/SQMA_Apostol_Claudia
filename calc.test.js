const { add, subtract, multiply, divide } = require("./calc");

describe("Addition Suite", () => {
	const testSuite = process.env.TEST_SUITE;

	if (testSuite === "AdditionSuite") {
		test("Adding two numbers", () => {
			expect(add(7, 3)).toBe(10);
			expect(add(150, 150)).toBe(300);
		});
	} else {
		test.skip("Addition Suite tests skipped");
	}
});

describe("Subtraction Suite", () => {
	const testSuite = process.env.TEST_SUITE;

	if (testSuite === "SubtractionSuite") {
		test("Subtracting two numbers", () => {
			expect(subtract(15, 5)).toBe(10);
			expect(subtract(250, 150)).toBe(100);
		});
	} else {
		test.skip("Subtraction Suite tests skipped");
	}
});

describe("Multiplication and Division Suite", () => {
	const testSuite = process.env.TEST_SUITE;

	if (testSuite === "MultiplyDivideSuite") {
		test("Multiplying two numbers", () => {
			expect(multiply(5, 20)).toBe(100);
			expect(multiply(100, 200)).toBe(20000);
		});

		test("Dividing two numbers", () => {
			expect(() => divide(12, 0)).toThrow("Cannot divide by zero");
			expect(divide(120, 12)).toBe(10);
		});
	} else {
		test.skip("Multiplication and Division Suite tests skipped");
	}
});
