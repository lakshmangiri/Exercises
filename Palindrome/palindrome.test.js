const palindrome = require("./palindrome")

test("Palindrome a string", () => {
    expect(palindrome('anna')).toStrictEqual(true);
});