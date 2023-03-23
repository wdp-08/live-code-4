let angka = 9;

function checkAngka(number) {
    if (number % 2 === 0) {
        return `${number} adalah angka genap`;
    } else {
        return `${number} adalah angka ganjil`;
    }
}

console.log(checkAngka(angka))