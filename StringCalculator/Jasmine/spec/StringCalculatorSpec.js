describe("Add", function(){
	it("should return 0 when there are is a string of length 0/no arguments.", function(){
		expect(add("")).toBe(0);
	});
	it("should return a single number as it is.", function(){
		expect(add("309")).toBe(309);
	});
	it("should return the sum of two numbers.", function(){
		expect(add("309,21")).toBe(330);
	});
	it("should handle an unknown amount of numbers.", function(){
		expect(add("5,5,5,5,5,5,5")).toBe(35);
	});
});
