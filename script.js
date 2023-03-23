function testNumbers(num) {
    if (typeof num !== 'number') {
        return "Invalid data";
    } else if (num % 2 !== 0) {
        return "ganjil";
    } else {
        return "genap";
    }
}

console.log(testNumbers(2));
console.log(testNumbers(3));
console.log(testNumbers(20));
console.log(testNumbers(21));