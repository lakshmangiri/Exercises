// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size.
// examples
// chunk([1, 2, 3, 4], 2) --> [[1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[1, 2], [3, 4], [5]]

function arrayChunks(array, size)
{
    const chunked = []
    let index = 0;
    while(index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    return chunked;
}

module.exports = arrayChunks;

// function arrayChunks(array, size)
// {
//     const chunked = [];

//     for (let element of array)
//     {
//         const last = chunked[chunked.length - 1];
//         if (!last || last.length === size)
//         {
//             chunked.push([element]);
//         }
//         else
//         {
//             last.push(element);
//         }
//     }
//     return chunked;
// }