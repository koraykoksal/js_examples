



const firstl = [1,2,3,4,5,6,7]


const result = firstl.reduce((toplam,deger)=> toplam*deger,1)

//console.log(result);








//! OBJECT LİTERAL YÖNTEM
//en yaygın kullanılan ve en çok tercih edilen


const car = {

    brand:'BMW',
    model:'2023',
    engine:'2000',
    color:['pink','red']

}

car.color.forEach(f=>console.log(f))





//! SUARE BRACKET YONTEMİ
//dinamik olarak kullanılabien ve onjec içinde değişken kullanılabilen bir yapısı var


console.log('Engine : ', car['engine']);

//const myKey = prompt('Araba ile ilgili ne öğrenmek istiyorsun : ')

//alert(car[myKey])






//! OBJECT CLASINDAN OLUŞTURULAN BİR YÖNTEM


const obj = new Object()

obj.name = 'koray';
obj.surname = 'koksal';

//console.log(obj)





//! object constructor'i kullanarak (OOP ile ayrintilandirilacak)

function Personel(id, name, age, salary) {
    this.id = id
    this.name = name
    this.age = age
    this.salary = salary
  }
  
  const person1 = new Personel("1234567890", "Ahmet Can", 33, 30000)
  const person2 = new Personel("123456745454", "Mehmet Veli", 23, 10000)
  
  //console.log(person1)



//* ======================================================
//*              Object Metotlari
//* ======================================================

const personel = {
    name: "Ahmet",
    surname: "Canan",
    dob: 1990,
    salary: 30000,
    drivingLicense: true,
    calculateAge: function () {
      console.log(this) //? personel objesini refere eder.
      return new Date().getFullYear() - this.dob
    },
    // summary: () => {
    //   console.log(this) //? window objesini refere eder.
    //   return `${this.name} is ${this.calculateAge()} years old`
    // },
  }
  
  //! NOT: arrow fonksiyonlari ozellikle callback fonksiyonu olarak
  //! kullanilmak ve bu fonksiyonlarda this keyword kullanim
  //! gereksinimini kaldirmak icin gelistirilmistir.
  //! Lexical context'e sahiptirler.Dolayisiyla, bir obje fonksiyonu
  //! olarak kullanilirsa, this kelimesi global scope'u (window nesnesini)
  //! gösterir. Bunu engellemek için object fonksiyonlarini tanimlarken
  //! diger (func. expression veya declaration) yontemlerini kullanabilir.
  
  console.log(personel.name + " " + personel.surname)
  
  console.log("AGE:", personel.calculateAge())
  
  //console.log(personel.summary())




//********************************************************
//* JSON => Javascript Object Notation
//********************************************************

const team = [
    { name: "Ahmet", surname: "Can", job: "Developer", age: 30 },
    { name: "Mary", surname: "Bary", job: "tester", age: 22 },
    { name: "Hazel", surname: "Nut", job: "developer", age: 20 },
  ]
  
  console.log(team)
  console.log(team[1])
  console.log(team[1].name) //? Mary
  console.log(team[2].age) //? 20
  
  console.log("************")
  
  //* Ornek1: team dizisindeki job'lari tek tek yazdiriniz.
  team.forEach((p) => console.log(p.job))
  
  //* Ornek2: age'leri bir artirarak yeni bir diziye saklayiniz.
  const personelAges = team.map((person) => person.age + 1)
  console.log(personelAges)
  
  //* Ornek3: name ve surname'leri birlestirip buyuk harfe ceviren ve
  //* bunu fullName key'i olarak saklayan, ayni zamanda age degerlerini 5
  //* arttirarak age key'ine saklayan ve olusan diziyi donduren kodu yazınız.
  
  const teamFullName = team.map((p) => {
    return {
      fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
      age: p.age + 5,
    }
  })
  
  //? Alternative way
  const teamFullName1 = team.map((p) => ({
    fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
    age: p.age + 5,
  }))
  
  console.log(teamFullName1)
  




  //? SORULARRRRRRR 


  //* Ornek4: Yasi(age) 22 'den kucuk esit olan kisilerin adlarini (name) listeyiniz.
  
  //* Ornek5: 22 yasindan kucuk ve esit olanlarin isimlerini diziye saklayiniz.
  
  //* Ornek6: ortalama yasi hesaplayiniz.