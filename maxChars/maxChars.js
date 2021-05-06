function maxChars(str)
{
    let max = 0;
    let maxChar = '';
    const chars = {};
    for (let char of str){
        chars[char] = chars[char] + 1 || 1;
    }

    for (let char in chars)
    {
        if (chars[char] > max)
        {
            max = chars[char];
            maxChar = char;
        }
    }
    return maxChar;
}

module.exports = maxChars;