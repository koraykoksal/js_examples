



let istenenFibonacciSayisi = prompt("Kaçıncı fibonacci sayısını öğrenmek istiyorsunuz?");
let sayi1 = 0;
let sayi2 = 1;
let toplam;
let fibonacciSayilari = [];
 
for(let i = 1; i < istenenFibonacciSayisi; i++){
    
    toplam = sayi1 + sayi2;
    sayi1 = sayi2;
    sayi2 = toplam;
    fibonacciSayilari.push(toplam);
}        
 
// Birinci Yöntem
console.log("Fibonacci (" + istenenFibonacciSayisi + ") : " + toplam);
// İkinci Yöntem
console.log(`Fibonacci (${istenenFibonacciSayisi}) : ${toplam}`);
// Fibonacci Sayıları
console.log("Fibonacci Sayıları : " + fibonacciSayilari);





