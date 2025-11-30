const { readFileSync, writeFileSync, createReadStream } = require('node:fs')

// Create a very large file
for(let i = 0; i < 1e3; i++) {
    writeFileSync('./Exercises/Stream/myBigFile.txt', 'This is line number' + i + "\n", {flag: 'a'})
}

// Read with readFileSync()
const f = readFileSync('./Exercises/Stream/myBigFile.txt');
console.log(f)
console.log(">>>Finished reading with readFileSync(). Program is blocked until this operation is completed.")

// Read with createReadStream()
const stream = createReadStream('./Exercises/Stream/myBigFile.txt');

stream.on('data', (result) => {
    console.log(result);
    console.log("Callback generated and completed.")
})
console.log(">>>Started reading with createReadStram(). A callback will be generated once completed.")

/* OUTPUT

<Buffer 54 68 69 73 20 69 73 20 6c 69 6e 65 20 6e 75 6d 62 65 72 30 0a 54 68 69 73 20 69 73 20 6c 69 6e 65 20 6e 75 6d 62 65 72 31 0a 54 68 69 73 20 69 73 20 ... 205960 more bytes>
>>>Finished reading with readFileSync(). Program is blocked until this operation is completed.

>>>Started reading with createReadStram(). A callback will be generated once completed.

<Buffer 54 68 69 73 20 69 73 20 6c 69 6e 65 20 6e 75 6d 62 65 72 30 0a 54 68 69 73 20 69 73 20 6c 69 6e 65 20 6e 75 6d 62 65 72 31 0a 54 68 69 73 20 69 73 20 ... 65486 more bytes>
Callback generated and completed.

<Buffer 65 72 38 36 33 0a 54 68 69 73 20 69 73 20 6c 69 6e 65 20 6e 75 6d 62 65 72 38 36 34 0a 54 68 69 73 20 69 73 20 6c 69 6e 65 20 6e 75 6d 62 65 72 38 36 ... 65486 more bytes>
Callback generated and completed.

<Buffer 65 20 6e 75 6d 62 65 72 37 32 37 0a 54 68 69 73 20 69 73 20 6c 69 6e 65 20 6e 75 6d 62 65 72 37 32 38 0a 54 68 69 73 20 69 73 20 6c 69 6e 65 20 6e 75 ... 65486 more bytes>
Callback generated and completed.

<Buffer 69 73 20 6c 69 6e 65 20 6e 75 6d 62 65 72 35 39 31 0a 54 68 69 73 20 69 73 20 6c 69 6e 65 20 6e 75 6d 62 65 72 35 39 32 0a 54 68 69 73 20 69 73 20 6c ... 9352 more bytes>
Callback generated and completed.

*/