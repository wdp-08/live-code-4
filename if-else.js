const angka = 3;

function checkNumber(number){
    if(number % 2 == 0){
        return "Genap"
    }else{
        return "Ganjil"
    }
}

console.log(checkNumber(angka))