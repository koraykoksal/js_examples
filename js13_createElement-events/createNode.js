console.log("**** CREATE NODE ****")



//? oluştur
const newP=document.createElement('p')

//? atama yap
const text = document.createTextNode('yeni p elementi')

//? oluşturulan p elementini bağla
newP.appendChild(text)

//? yeni elementin DOM tree ye bağlanması
const body = document.querySelector('body').appendChild(newP)

console.log(body);

//! before after metodu ile oluşturulan elemenet farklı belementlerin önüne veya arkasına eklenebilir. before ve after appendChild metodu yerine geçiyor.örnek aşağıdaki gibidir

const sect = document.querySelector('.item-list')

sect.before(newP)


//***------------- ID,CLASS ATAMA -----------------***** */


//? 1. yöntem

newP.id='paragraf'
newP.className='paragraf paragrafSecond'


const deneme=document.getElementById('paragraf')

console.log('ID',deneme);

newP.style='color:red'


//? 2. yöntem atrribute atama
//element inline içine id ve class bilgilerini buradan girebliliyorsun
newP.setAttribute("id","new-id")
newP.setAttribute("class","new-class")


//? classList
//varolan classın üzerine ekleme yapar

newP.classList.add("cl1","cl2","cl3") //yeni clas ekler
newP.classList.contains("cl1")  //class var mı diye bakar
newP.classList.remove("cl3") //classı siler
newP.classList.toggle("cl4")    //class varsa siler yoksa ekler


//**********------------ID,CLASS VERİLERİNİ OKUMA---------------********** */

//elementa atanmış olan bilgiler .nokta bilgisi ile erişilerek okuma yapılır
console.log(newP.id,newP.className);

console.log(newP.getAttribute('type'));



const newEE=`<ul><li>Go</li><li>C#</li><li>Sql</li></ul>`

const mainn=document.querySelector('main')

mainn.after(newEE)

mainn.innerHTML=`
<ul>
<li>Go</li>
<li>C#</li>
<li>Sql
</li>
</ul>`




























