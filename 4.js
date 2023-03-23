function cek(angka) {
	var hasil = '';
	if (angka % 2) {
		hasil = angka + " Merupakan Ganjil";
	} else {
		hasil = angka + " Merupakan Genap;";
	}
	return hasil;
}

console.log(cek(2));
console.log(cek(3));
console.log(cek(20));
console.log(cek(21));