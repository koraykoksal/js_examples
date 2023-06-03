


//! array oluşturma


const myArr = '1111'


const arr = [1, true, [6, 7, 8], [3, 'Red', 5]]

//arr.sort()
// arr[2].splice(1,1,'yellow')


//console.log(arr[arr.length-2]); //! lenght değeri -1 den başlar

//console.log(typeof arr); //! tipini gösterir


//console.log(Array.isArray(myArr));  //! array olup olmadığına bakar ve true-false döner
//console.log(arr instanceof Array);    //! array olup olmadığına bakar ve true-false döner


const numbers = [2,5,1,6,45,23,33,11,20,99]

// numbers.sort((a,b) => a-b)  //! küçükten büyüğe göre sıralam yapar
// numbers.sort((a,b) => b-a)  //! küçükten büyüğe göre sıralama yapar

// numbers[5] = 680    //! numbers dizisinin 5. indexine 680 bilgisini gönderir

// console.log(numbers);
// console.log(typeof(numbers[5].toString())); //! dizinin tipini stringe dönüştürür


//console.log(numbers.includes(323)); //! dizi içinde belirtilen değerin kontrolünü yapar true-false döner



const colors = ['Red','Green', 'Blue','Green','Brown','yellow']

//colors.reverse() //orjinal array i değiştirir ve tersden yazdırır

//console.log(colors.indexOf('yellow'));  //! array tersden yazdırıldığı zaman yellow index numarası değişir

//console.log(colors.lastIndexOf('Green'))


const newColors= colors.slice(1,4) //! orjinal içeriği kopyalar 1-4 arasında işlem yaparken 1 den başlar ama 4 dahil olmas


const car = ['Audi', 'BMW']

const car2 = ['Ford', 'Tesla', 'Mercedes']

//car.push(car2) //['Audi', 'BMW', ['Ford', 'Tesla','Mercedes']] array in tamamını tek bir eleman olarak gönderir

car.push(...car2) //['Audi', 'BMW', 'Ford', 'Tesla','Mercedes'] diğer arrayin her elemanını ayrı ayrı dahil eder.


car.splice(1,2,'WW','WV','WD','WF')    //! 1.indexe git 4 eleman sil ve yeni elemanı ekle

//console.log(car);

// const letters = ['A', 'B', 'C', ,'E'];

// for (let i = 0; i < letters.length; i++) {

//   console.log(letters[i]);
// }



// function printElements(element, index) {
//     console.log(`Item ${index}: ${element}`);
// }
// const prices = [900, 1200, 650, , 2000, 500, 1700];
// prices.forEach(printElements);




// function myFunction(element,index){

//     console.log(`Item ${index} : ${element}`);
// }

// const myarray = [123,345,223,789,234]

// myarray.forEach(myFunction);



//const arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; console.log(arr2.reduce((accumulator, item) => accumulator + item));


// let sum = 0

// const arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// for(let i=1;i<arr2.length;i++){

//     sum = sum+arr2[i]

    
// }
//console.log(`arr2 sonucu : ${sum}`);



const sides=[2,3,4,5,6]

// const sides2 = []

// for(let i =0;i<sides.length;i++){

//     sides2.push(sides[i]**2)
// }

let total =0
let x = 0

for(let i=0;i<sides.length;i++){

    total = total+sides[i]

}

//console.log( `Sides total : ${total}`);

//console.log( `Sides lenght : ${sides.length}`);



// const sides2 = sides.map((sides) => {
//     return sides.sum()
// })

// console.log(sides2);

const teams = [{name:'koray',surname:'koksal',age:39},
            {name:'mehmet', surname:'tanrivermis',age:25},
            {name:'mustafa', surname:'ceceli',age:38},
            {name:'emanuel', surname:'icardi',age:40},
            {name:'fernando', surname:'muslera',age:42},
            {name:'ali', surname:'veli',age:20},
            {name:'cumhuriyet varsa', surname:'demokrasi var',age:78}
        
];


//const result = cc.map((values)=>{

//     //free.push(values.name.concat(" "+values.surname))

//     //free.push(values.name.concat(" "+values.surname," "+values.age))
//     free.push(values.name)
//     free.push(values.surname)
//     free.push(values.age)

// })


// for(let i = 0;i<cc.length;i++){

//     if(cc[i].age >=40 && cc[i].age <50){
//         free.push(cc[i])
//     }
    
// }




//Ornek4: Yasi(age) 22 'den kucuk esit olan kisilerin adlarini (name) listeyiniz.

let bos=[]
const lessThan22=teams.filter((v) => {

    return v.age<=22

})


//Ornek5: 22 yasindan kucuk ve esit olanlarin isimlerini diziye saklayiniz.


let vv=[]
//const lessThan22andEq=teams.filter((v) => v.age<=22).map(c => vv.push(c.name))


//console.log(vv);


//Ornek6: ortalama yasi hesaplayiniz.

let ageAvg=0
let totalAge=0
let indexSayisi=0
const ortalama=teams.forEach((v,i) => {


    ageAvg=(totalAge+=v.age) / (indexSayisi=i)
})


//console.log(ageAvg.toFixed(1));


const fullstack = [
    { name: "Ahmet", surname: "Can", job: "Developer", age: 30 },
    { name: "Mary", surname: "Bary", job: "tester", age: 22 },
    { name: "Hazel", surname: "Nut", job: "developer", age: 20 },
]



//* Ornek4: Yasi(age) 22 'den kucuk esit olan kisilerin adlarini (name) listeyiniz.


const resul2=fullstack.filter(g => g.age<=22)

console.log(resul2);


//* Ornek5: 22 yasindan kucuk ve esit olanlarin isimlerini diziye saklayiniz.

const boss=[]

const lessThann22 = fullstack.filter((v) => v.age <= 22).map(i=> boss.push(i.name))

console.log(boss);

//* Ornek6: ortalama yasi hesaplayiniz.


let ageTotal=0
let ageavg=0
let count=0


fullstack.forEach((v,f)=>{

   ageAvg= (ageTotal+=v.age) / (count+=f)
})

console.log(`yaş ortalaması : ${ageAvg}`);





//! DESTRUCTURİNG (ARRAY)
//sıra çok önemlidir

const names = ["ahmet","mehmet"]


const [aa,mm]=names

console.log(aa,mm);




//! REST OPERATOR
//bir dizi veya objedeki bazı değerleir ayırıp kullanabilir
//! bu işlem yapılıtken isim ve sıra çok önemlidir

const araclar =["bmw","vw","toyota","bugatti","rover"]

const [araba1,araba2,...gerikalan]=araclar

console.log(`araba 1 : ${araba1}`)
console.log(`geri kalan arabalar : ${gerikalan}`);;



const kişi={

    ad:'koray',
    soyad:'koksal',
    job:'developer',
    age:29
}

const {isim,...bilgi}=kişi

console.log(isim)
console.log(bilgi)


//! SPREAD METODU
//iki farklı diziyi tek bir dizi içinde birleştirme işlemi

const meyve=['elma','armut','portakal']
const sebze=['marul','maydonoz','havuç']

const vec=[...meyve,...sebze]

console.log(vec);



const meyve2={elma:'tatlı'}
const sebze2={kilo:1}

const vec2={...meyve2,...sebze2}

console.log(vec2);



//STRİNG BİR İFADEYİ DİZİ ŞEKLİNDE YAPMA
//! MÜLAKATLARDA ÇIKAN BİR SORU
const words="olmak ya da olmamak"

const words2=[...words]

console.log(words2);





//! ÖRNEK ÇALIŞMA

//? nested
const people = {
    person1: {
      name: "Can",
      surname: "Canan",
      dob: "1990",
      job: "developer",
      salary: "140000",
      drivingLicense: true,
    },
    person2: {
      name: "John",
      surname: "Sweet",
      dob: "1990",
      job: "tester",
      salary: "110000",
      drivingLicense: false,
    },
    person3: {
      name: "Steve",
      surname: "Job",
      dob: "2000",
      job: "developer",
      salary: "90000",
      drivingLicense: true,
    },
  }

//? for in dönügüsü kullanımı

for(let i in people){

    console.log(people[i].salary);

}



//KULLANICI LOGİN ÇALIŞMASI


//const mail=prompt('Username : ')
//const pword=+prompt('Password : ')


//USER ONLİNE FUNCTİON
function User(uname,pass){

    this.uname=uname,
    this.pass=pass,
    this.online=false

}

//LOGİN
User.prototype.login=function(){

    if(this.uname == 'tkkoksall' && this.pass==12345){

        this.online=true;
        console.log(this.uname, 'has logged in');
    }
    else{
        console.log('Username or Password Wrong');
    }
    
}

//LOGOUT
// User.logout=function(){

//     this.online=false;
//     console.log(this.email, 'has logged out');
// }



//const userOne = new User(mail,pword)


//console.log(userOne);
//userOne.login()






// console.log(1 + '2' +'2');



// console.log(typeof typeof 1);



// const a = ['dog','lion','hen']

// a[100]='horse'


// console.log(a.length);


// const dessert = { type: 'pie' };
// dessert.type = 'pudding';


// const employee = {
//     name: "John",
//     surname: "Doe",
//     age: 33,
//     languages: ["C++", "Go", "Java", "Javascript"],
//     salary: 10000,
// }

// for (let i = 0; i < employee.languages.length; i++) {
//     console.log(employee.languages[i])
//    }



//    let arr1 = [1, 2, 3, 4, 5];
//    let arr2 = [4, 5, 6, 7, 8];
   
//    let same=[]

// for(let i=0;i<arr1.length;i++){
//     for(let j=0;j<arr2.length;j++){
//         if(arr1[i] == arr2[j]){
//             same.push(arr1[i])
//         }
//     }
// }



// const res=arr1.filter((num,i) => {

//     if(arr1.includes(arr2[i])){
//         console.log(arr2[i]);
//     }
// })

// console.log('****************************************');

// let newKisiler=[]

// const sayi = Math.floor(Math.random()*14)

// const kisiler=['koray','mehmet','ali','gokmen','goksal','fulya','şeyma','mehmet emin','sinan','zeki','hasan','sefa','ömer faruk','eda']

// const result = kisiler.forEach((v,i) => {

//     if(sayi == i){

//         newKisiler.push(v,i)
//         console.log('random sonuc :',sayi);
//         console.log('liste sonuc : ',v,i);
//         console.log(newKisiler);
//     }

// })



// Requiring modules
// const express = require('express');
// const app = express();
// const mssql = require("mysql");


// const sqlServer='KARCYNB031\SQLEXPRESS'

// // Get request
// app.get('/', function (req, res) {
 
//     // Config your database credential
//     const config = {
//         user: 'sa',
//         password: '4155Kk--',
//         server:sqlServer,
//         database: 'bonna_hr'
//     };
 
//     // Connect to your database
//     mssql.connect(config, function (err) {
 
//         // Create Request object to perform
//         // query operation
//         let request = new mssql.Request();
 
//         // Query to the database and get the records
//         request.query('select * from student',
//             function (err, records) {
 
//                 if (err) console.log(err)
 
//                 // Send records as a response
//                 // to browser
//                 res.send(records);
 
//             });

        
//     });
// });
 
// let server = app.listen(5000, function () {
//     console.log('Server is listening at port 5000...');
// });




function sum(num1, num2 = 2, num3 = 3) {
    return num1 + num2 + num3;
   }
let values = [1, 5];
let total3 = sum(4, ...values);


console.log('sonuc : ',total3);


