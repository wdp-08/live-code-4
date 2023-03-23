function checkOddEven(number) {
  if (typeof number !== "number" || isNaN(number)) {
    return "Invalid Data";
  }
  if (number % 2 === 0) {
    return "genap";
  } else {
    return "ganjil";
  }
}
console.log(checkOddEven(2));
console.log(checkOddEven(3));
console.log(checkOddEven(20));
console.log(checkOddEven(21));
console.log(checkOddEven("2"));
console.log(checkOddEven(true));
console.log(checkOddEven(NaN));
