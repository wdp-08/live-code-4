function cekGanjilGenap(number) {
    if(typeof(number) !== 'number'){
        return "Invalid Data" //jika tipe data tidak sesuai
    }
    if (number % 2 == 0) {
        return "genap" // maka genap
    } else {
        return "ganjil" // maka ganjil
    }
}

console.log(cekGanjilGenap(2));
console.log(cekGanjilGenap(3));
console.log(cekGanjilGenap(20));
console.log(cekGanjilGenap(21));


