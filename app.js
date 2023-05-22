


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


let free = []

const cc = [{name:'koray',surname:'koksal',age:39},
            {name:'mehmet', surname:'tanrivermis',age:25},
            {name:'mustafa', surname:'ceceli',age:38},
            {name:'emanuel', surname:'icardi',age:40},
            {name:'fernando', surname:'muslera',age:42},
            {name:'ali', surname:'veli',age:20},
            {name:'cumhuriyet varsa', surname:'demokrasi var',age:1000}];


// const result = cc.map((values)=>{

//     //free.push(values.name.concat(" "+values.surname))

//     //free.push(values.name.concat(" "+values.surname," "+values.age))
//     free.push(values.name)
//     free.push(values.surname)
//     free.push(values.age)

// })


for(let i = 0;i<cc.length;i++){

    if(cc[i].age >=40 && cc[i].age <50){
        free.push(cc[i])
    }


    
}

console.log(free);








