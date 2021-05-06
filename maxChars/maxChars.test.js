const maxChars = require("./maxChars")

test("Max Character", () => {
    expect(maxChars('abccccabd')).toBe('c');
});