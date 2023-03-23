
function number(num){

    if (num % 2 === 0) {
        return (`${num} adalah bilangan Genap`)
    } if (num % 2 === 1) {
        return (`${num} adalah bilangan Ganjil`)
    } else {
        return ("Invalid Data")
    }
}

console.log(number(2));
console.log(number(3));
console.log(number(20));
console.log(number(21));
console.log(number("a"));


