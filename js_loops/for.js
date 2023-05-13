// * =======================================================
// *             FOR LOOP
// * =======================================================

console.log(" **** FOR ****")

let name = "koray"

//i değerini çarp 3 veya 2er olarak saydırır
// for(let i=2;i<1000;i*=3){

//     console.log(i,name)
    
// }


//kullanıcıdan alınan değer ile dönüden çıkılması
// const deger = +prompt("rakam giriniz")
// let sum = 0;

// for(let j=0;j<deger;j++){

//     sum = sum+j;
//     if(j == deger)
//     break
//     console.log(j,deger)
    
// }
// console.log(`Total: ${sum}`)


//kulalnıcıdan alınan iki adet rakamın döngü içinde continue olarak aktraılması
//const num1 = prompt("Birinci rakamı giriniz : ")
//const num2 = prompt("İkinci rakamı giriniz : ")

// for(let m=0;m<100;m++){

//     if(m==num1 || m==num2)
//     continue
//     console.log(m,num1,num2)
// }





//asal sayı bulma formülü

// let num = prompt("Bir sayı giriniz : ");
// let asalMi = true;

// for (i = 2; i < num; i++) {

//   if (num % i == 0) {
//     asalMi = false;
//     break;
//   }
// }

// if (asalMi == true) {
//   console.log(` ${num} sayısı asaldır.`);
// } else {
//   console.log(` ${num} sayısı asal değildir.`);
// }



//asal sayi kontrolü
// const val1 =+prompt("0-100 arasında değer giriniz : ")

// let control = true;


// if(val1 <0 || val1 >100){
//     alert(`0-100 arasında değer giriniz. Girilen değer: ${val1}`)
// }
// else
// {

//     for(let i = 2;i<val1;i++){
    
//         if(val1%i == 0){
//             control = false
//             break
//         }
    
//     }
    
//     if(control==true){
//         console.log(`${val1} sayisi asaldir.`)
//     }
//     else{
//         console.log(`${val1} sayisi asal değildir.`)
//     }

// }


let girilenNum = +prompt('Bir Sayı giriniz: ')
let üretilen = Math.trunc(Math.random()*10)+1

let hak = 3

for(let i=1;i<üretilen;i++){

    
    if(girilenNum == üretilen){
        console.log("Tebrikler**")
    }
    else{
        hak = hak-1
        if(hak==0){
            console.log("Hakkınız bitti")
        }
    }

}

console.log(`Girilen değer : ${girilenNum} , Üretilen değer : ${üretilen}`)




