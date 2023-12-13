const { add, subtract, multiply, divide } = require("./calc");

describe("Calculator", () => {
	const testSuite = process.env.TEST_SUITE;

	if (testSuite === "Suite1") {
		test("Adding two numbers", () => {
			expect(add(7, 3)).toBe(10);
			expect(add(150, 150)).toBe(300);
		});
	} else if (testSuite === "Suite2") {
		test("Subtracting two numbers", () => {
			expect(subtract(15, 5)).toBe(10);
			expect(subtract(250, 150)).toBe(100);
		});

		test("Multiplying two numbers", () => {
			expect(multiply(5, 20)).toBe(100);
			expect(multiply(100, 200)).toBe(20000);
		});

		test("Dividing two numbers", () => {
			expect(() => divide(12, 0)).toThrow("Cannot divide by zero");
			expect(divide(120, 12)).toBe(10);
		});
	} else {
		throw new Error(`Invalid test suite provided: ${testSuite}`);
	}
});
