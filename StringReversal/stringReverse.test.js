const reverseString = require("./stringReverse")

test("Reverses a string", () => {
    expect(reverseString('Hello')).toBe('olleH');
})