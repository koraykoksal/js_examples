// ? =====================================
// ?           FUNCTIONS
// ? ======================================

console.log("** FUNC DECLARATION **")


//* ÖRNEK 1
//*##########################################

//! Declaration fonksiyonun tanımlanması
function yazdirMerhaba(){

    console.log("this is first test");
}

yazdirMerhaba() //! fonksiyonun çağırılması (invoke, call)





//* ÖRNEK 2
//*##########################################





//! Declaration fonksiyonun tanımlanması
function yazdirParametre(message,name){

    console.log(message,name);    //! fonksiyon parametre alıyor
}

yazdirParametre("FS14","Merhaba") //! fonksiyonun çağırılması (invoke, call)
yazdirParametre("merhaba","FS15") //! fonksiyonun çağırılması (invoke, call)

yazdirParametre("merhaba") //! fonksiyon çağırıldığında parametre eksik olursa undifiend hatası verir.



//! Default parametre ataması
function defaultParametre(message,name=" ! Değer bulunamadı ! "){

    console.log(message,name);    //! fonksiyon parametre alıyor
}

defaultParametre("Merhaba") //! fonksiyon içerisinde default parametre atandığı için veri olmazsa parametreye default değer atanabilir.



//* ÖRNEK 2
//*##########################################



function informationUsers(name,yob){

    const age = new Date().getFullYear() - yob  //! kişinin yaşı

    console.log(`${name} is ${age} years old.`);

    return age


}

console.log(new Date());    //! sistem tarhinini ve saaatini verir.

console.log("Koray's age",informationUsers("Koray",1993));


const korayAge = informationUsers("Koray",1993)
console.log("Koray's age: ",korayAge);





//? tek-çift sayıyı bulan fonksiyon

function tekCift(number) {

    let sonuc

    if (number % 2 == 0) {
      sonuc = "Çift";
    } else {
      sonuc = "Tek";
    }

    return sonuc
  }

const deger = prompt();
console.log(`${deger} sayısı : ${tekCift(deger)}`);



//? tek-çift sayıyı bulan fonksiyon

function evenOdd(number) {

    return number %2 ===0 ? "Even" : "Odd"

    
  }

const girilenDeger = prompt();
console.log(`${girilenDeger} sayısı : ${evenOdd(girilenDeger)}`);


