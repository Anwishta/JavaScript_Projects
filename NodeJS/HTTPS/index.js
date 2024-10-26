import * as fs from 'fs';

fs.writeFileSync('testfile.txt', 'Hello World!');
const read = fs.readFileSync("testfile.txt");
console.log(read.toString())

try {
    await fs.write('testfile.txt', {recursive : true})
} catch (error) {
    throw error;
}