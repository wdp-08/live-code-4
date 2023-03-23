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

console.log(cekAngka(1));