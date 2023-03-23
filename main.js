function cekAngka(number) {
    if (typeof number === "number" && number >0) {
        if (number % 2 === 0){
            return number + " " + "adalah bilangan genap"
        }else{
            return number + " " + "adalah bilangan ganjil"
        }
    }else{
        return "Invalid Data"
    }
}

console.log(cekAngka(2));
console.log(cekAngka(3));
console.log(cekAngka(20));
console.log(cekAngka(21));
console.log(cekAngka("error"));