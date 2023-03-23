function ganjilGenap() {
    let bilangan = 2;
    if(bilangan % 2 != 0) {
        console.log("Bilangan Ganjil")
        return 'Ganjil'
    }
    else {
        console.log("Bilangan Genap")
        return 'Genap'
    }
};

ganjilGenap()

function typeData() {
    let a = 2;
    if (typeof a == "number"){
        console.log(a + " is a number");
    } else {
        console.log(a + " is not a number");
      }
}

typeData()