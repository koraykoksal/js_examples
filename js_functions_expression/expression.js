// ? =====================================
// ?           FUNCTIONS
// ? ======================================

console.log("*** 2-EXPRESSION ****")

//* ORNEK1:
//***********************************************/



//! Expression mantığı ile yapılmış bir function çalışması ve turnary ile çıktı alınmıştır

let oddEven = function(num){

    return num %2 === 0 ? "Even" : "Odd"
}

console.log(oddEven(8))



//* ORNEK1:
//***********************************************/
yazdirMerhaba() //? hoisting oluyor (var değişkenleri)

function yazdirMerhaba() {
  console.log("Merhaba FS14")
}
yazdirMerhaba()

//* ----------------------------
//? Declarasyon (Function Expression)

// yazdir("Hallo FS14") //? invoke
//! ReferenceError: Cannot access 'yazdir' before initialization
//     at expression.js:19:1

const yazdir = function (message) {
  console.log(message)
}

yazdir("Hallo FS14") //? invoke



//* ORNEK3: 3 sayinin en buyugunu bulan fonks.
//***********************************************/

//? Arrow

const kareAl = (num) => num * num
const topla = (s1, s2) => s1 + s2
const ciktiVer = () => console.log("Merhaba")

console.log("KARE:", kareAl(4))
console.log("TOPLA:", topla(4, 5))
ciktiVer()

//* ORNEK4: 3 sayinin en buyugunu bulan fonks.
//***********************************************/
//! Süslü parantez kullanıldığnda otomatik returning ozelligi kaybolur
const findBiggest = (n1, n2, n3) => {
  let biggest = n1

  if (n2 >= biggest) {
    biggest = n2
  }
  if (n3 >= biggest) {
    biggest = n3
  }
  return biggest
}

console.log("BIGGEST:", findBiggest(1, 3, 2))

//? Alternatif olarak
const findBiggestShort = (num1, num2, num3) => Math.max(num1, num2, num3)
console.log("BIGGEST:", findBiggestShort(1, 3, 2))
















