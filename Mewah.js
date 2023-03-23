function checkOddOrEven(value) {
  if (value % 2 == 0) {
    notif = "Bilangan " + bilangan + " Adalah Bilangan Genap";
  } else {
    notif = "Bilangan " + bilangan + " Adalah Bilangan Ganjil";
  }

  return value % 2 === 1 ? "ganjil" : "genap";
}

console.log(checkOddOrEven);
