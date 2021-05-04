function palindrome(str)
{
    const reversedString = str.split('').reverse().join('')
    return str === reversedString;
}

module.exports = palindrome;


// Alternate solution

// function palindrome(str)
// {
//    return str.split('').every((char, i) => {
//        return char === str[str.length - i - 1];
//    });
// }

