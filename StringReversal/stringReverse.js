function reverseString(str)
{
    let reversed = '';
    for (let character of str)
    {
        reversed = character + reversed;
    }
    return reversed;
}

module.exports = reverseString;

// function reverseString(str)
// {
//     return str.split('').reverse().join();
// }