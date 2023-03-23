//Buatlah sebuah function yang menerima sebuah angka.
//Gunakanlah kondisional untuk memeriksa angka tersebut ganjil atau genap.
//Gunakan return untuk mengembalikan hasil pemeriksaan angka ganjil atau genap tersebut dalam formatstring “ganjil” atau “genap”.
//Tes dengan console log hasil function tersebut dengan angka:2, 3, 20, 21
//Tambahkan pengecekan tipe data di function tersebut.
//Jika data yang diberikan bukan angka yang valid, bukan bertipe data number atau NaN, maka langsungreturn “Invalid Data”.
        
       function CekAngka (value) {
        if (typeof value !== 'number') {
          return 'Invalid Data'
        }
      }
      
      const resultCheck = CekAngka(5)
      console.log(resultCheck)