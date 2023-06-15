//* =================================================
//*                2- Promises
//* =================================================

//? Promise, asenkron bir islemin basariyla ve basarisizlikla bittigini gosteren
//? ve ayni zamanda basariyla bittiginde sonuc verilerini temsil eden bir nesne yapisidir.

//? SYTNAX
//?----------
//* 1- Ilk olarak new Promise() constructor'i ile yeni bir promise nesnesi olusturulur,
//* 2- constructor'a asil islemin yapilmasini saglayan bir executor fonksiyion verilir.
//* 3- Executor fonksiyona ise 2 argument gecirilir: resolve ve reject fonksiyonlari
//* 4- resolve fonksiyonu promise'in basariyla bittiginda, reject ise
//*    basarisizlikla bittiginde isletilirler.

//? new Promise (
//?    /* executor */
//?    function(resolve,reject){
//?       .......
//?    }
//? )

//? Bir Promise asagidaki state(durumlari) icerebilir:
//* pending: ilk state, fulfilled veya rejected olmayan
//* fulfilled:islem basariyla tamamlandini gosteren state.
//* rejected: islemin basarisizlikla tamamlandigini gosteren state

//! Bir promise bir degerler tamamlanabilir yada bir sebeple (hata) iptal edilebilir.
//! Bu durumlar then() ve catch() metotlari ile yakalanabilir.
//? then() ve catch() metotlari promise dondururler.
//? Zincirleme olarak kullanilabilirler.

console.log("Promise")


//! PROMİSE YAPISI

// const networkReq = new Promise((resolve,reject)=>{

//     const data={a:1,b:2}
//     const success = Math.floor(Math.random()*5) //0-4 arası sayı üret

//     if(success){
//         console.log("data fethed");
//         resolve(data)
//     }
//     else{
//         reject(new Error("network err."))
//     }

// })

//işlem başarılısı ise .then ile yakalanır
//işlem hatalı ise .catch ile yakalanır
// networkReq
// .then((res) => console.log(res))
// .catch((err)=>console.log(err))


//? try-catch-finally yapısı

// try{
//     networkReq
//     .then((res) => console.log(res))
// }
// catch(err){
//     document.write(err)
// }
// finally{
//     console.log("her zaman çalışır");
// }



//! FETCH  API YAPISI
//promise yapısından sonra geliştirilmiş ve basitleştirilmiş halidir.


//istek atmak isteriyorsan öcne fetch metodunu çağır
//istek atıldıktan sonra .then içinde convert json yap
// süslü parentez açıldığı zaman return yapılması gerekiyor


// fetch("https://api.github.com/users")
// .then((response)=>{

//     console.log(response.ok);
//     return response.json()
// })
// .then((res)=>console.log(res[1]))

const img = document.querySelector('.img')


let size="150x150"
let adress = "www.youtube.com"

let src=""

fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${adress}`)
.then((response)=>{

    src = response.url
    
    domaYaz()

    return response

    
})


const domaYaz=()=>{

    img.innerHTML +=`
    <img src="${src}" alt="">
    
    `
}





