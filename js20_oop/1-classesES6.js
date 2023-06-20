//* ==============================================
//*      OOP - Classes and Inheritance (ES6)
//* ===============================================
//! Object literals yontemi ile fazla sayida yeni objeler olusturmak oldukca zahmetlidir.
//! Ayrica programcilik yaklasimi acisindan da cok tekrar icerdigi icin uygun degildir (DRY - Dont Repeat Yourself)
//! Cozum: Object Oriented Programming (ES5 and ES6)

//* Object Literals
console.log("**** Object Literals ****")


class Book{

  //bir kalıp çağırıldığında kullanılan kalıptır.
  //ba kalıp çağırıldığında ilk çalışan yer constructor'dır.
  constructor(title,author,year){

    this.title = title
    this.author = author
    this.year = year

  }

  //obje içidne yazılan function Prototype olarak isimlendirilir ve console log tarafında prototype olarak görünür.
  getSummary(){

    return `${this.title} was written by ${this.author} in ${this.year}`
  }

}


const result1 = new Book("My Book","koray",1993)
console.log(result1);



//? Book clas üzerinden Sub-Class ı oluşturma

class maganize extends Book{

  constructor(title,author,year,month){

    // clasın parentını çağırmış oluyorsun ve parent clasının contructoruna bilgi göndermiş oluyor.
    
    super(title,author,year)
    
    this.month = month
  }

  //? Overridding (Polymorphism)
  getSummary(){

    return `${this.title} was written by ${this.author} in ${this.year}`
  }

}


const result2 = new maganize("new book","koksal",1990,"June")

console.log(result2);









