const angka = 21;

function checkNumber(number){
    if(typeof(number) !== 'number'){
        return "Invalid Data"
    }
    if(number % 2 == 0){
        return "Genap"
    }else{
        return "Ganjil"
    }
}
console.log(checkNumber(angka))