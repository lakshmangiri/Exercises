const arrayChunks = require('./arrayChunk')

test("Array Chunk", () => {
    expect(arrayChunks([1, 2, 3, 4], 2));
});