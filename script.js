function cekGanjilGenap(inputNumber) {
    if (typeof inputNumber !== "number" || isNaN(inputNumber)) {
      return "Invalid Data";
    } else if (inputNumber % 2 === 0) {
      return "genap";
    } else {
      return "ganjil";
    }
  }
  
  console.log("angka adalah " + cekGanjilGenap(2));
  console.log("angka adalah " + cekGanjilGenap(3));
  console.log("angka adalah " + cekGanjilGenap(20));
  console.log("angka adalah " + cekGanjilGenap(21));
  console.log("angka adalah " + cekGanjilGenap("a"));
  console.log("angka adalah " + cekGanjilGenap(NaN));
  