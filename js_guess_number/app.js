

let hak = 0;

let pcSayi = Math.floor(Math.random()*100) +1

let uretilenSayiler = []
let girilenSayiler = []

while(1){

    uretilenSayiler.push(pcSayi)

    let tahmin = +prompt(`Lütfen bir sayı giriniz: `)

    girilenSayiler.push(tahmin)

    if(tahmin>pcSayi){
        alert("Daha küçük bir sayı giriniz")
    }
    else if(tahmin<pcSayi){
        alert("Daha büyük bir sayısı giriniz")
    }
    else if(tahmin == pcSayi){
        alert("Tebikler Bidiniz")
    }
    

    hak++;

    if(hak==3){
        alert(`Deneme hakkınız bitti : ${hak}`)

        console.log("Üretilen sayılar: ",uretilenSayiler)
        console.log("Girilen sayılar : ",girilenSayiler)

        break

        
    }
    

    
}

