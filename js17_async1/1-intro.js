//*==================================================
//*        1- Senkron-Asenkron Programlama
//*==================================================

//! Javascript, single-threaded ve Asenkron Programlama dilidir.
//! singke-threaded tek tek çalışan kod yapısı

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ------------------------------------------------

console.log("ASYNC INTRO")


//* Asenkron (SetInterval , clearInterval)

let count = 1

//! setInterval bir number döndürür ve periyodik zaman araliği oluşturmak için kullanılır.

//! clearInterval yardımıyla sürekli devam eden Interval pasif hale getirilir. clearInterval kullanmak için setInterval dan bir ID bilgisi alınması gerekir. (setInterval number değer döndürdüğü için bir değişkene bağlayarak alınan değer ID olarak kullanılır.)

const deger = setInterval(()=>{

//conut değerini bir bir artırır
console.log(count++);

if(count > 10){
    clearInterval(deger)
}

},1000)



//! Callback Hell (nested ve birbirine bagli callback'ler)
//!-----------------------------------------------------
//* Eger birbirine bagimli asenkron kodlarin yazilmasi gerekirse,nested callback
//* yapisinin kullanilmasi gerekebilir. Fakat bu iyi bir programlama yaklasimi degildir.
// !callback hell olarak adlandirilan bu yapinin anlasilmasi ve surdurulebilirligi oldukca zordur.

setTimeout(() => {
    console.log("john:Hi")
    setTimeout(() => {
      console.log("Sarah: Hello")
      setTimeout(() => {
        console.log("John: How Are you?")
        setTimeout(() => {
          console.log("Sarah:Fine and you?")
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)



















