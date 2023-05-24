



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




