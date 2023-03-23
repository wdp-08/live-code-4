
function checkNumber(number){
    if(typeof(number) !== 'number'){
        return `${number} is Invalid Data`
    }
    if(number % 2 == 0){
        return `${number} is Genap`
    }else{
        return `${number} is Ganjil`
    }
}
console.log(checkNumber(2))
console.log(checkNumber(3))
console.log(checkNumber(20))
console.log(checkNumber(21))
console.log(checkNumber("Hai"))