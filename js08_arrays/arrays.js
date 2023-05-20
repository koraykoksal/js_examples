
// const arr = [100, 'CW', false]
// console.log(arr)

// const dizi = new Array(100, 'CW', true);

// console.log(dizi)


// const dizi2 = new Array(10)

// console.log(dizi2)

// const colors = ['Red','Green','Blue']

// console.log(colors[0])
// console.log(colors[colors.length - 1]) //son elaman
// console.log(colors[colors.length - 2]) //sondan ikinciye ulaşım.
// console.log(colors[-1]) //undefined
// console.log(colors[56]) //undefined


//Array is Array
// const colors = ['Red','Green','Blue'];
// console.log(typeof colors);

// console.log(Array.isArray(colors)) //true 
// console.log(colors instanceof Array) //true 


// const variables = '1';
// console.log(Array.isArray(variables)) //false 
// console.log(variables instanceof Array) //false 


//Strings immutable değiştirilemez
// let str = 'Brown';
// console.log(str[0])
// str[0]='b';
// console.log(str)

// str = 'brown'

//Arrayle mutable yani değiştirilebilir
// const colors = ['Red','Green','Blue'];

// colors[1] = 'yellow' //mevcudu değiştirir

// console.log(colors)


// //ekleme yapar
// colors[3]= 5

// console.log(colors)

// let c = 'Pink'

// colors[4] = c

// console.log(colors)

// const colors = ['Red','Green','Blue'];

// colors[6] = 2
// console.log(colors)
// console.log(colors.length)
// console.log(colors[3])

// colors[100] = 'Pink';

// console.log(colors)


//primitiveler
/* let a = 5;
let b = a;
console.log(a)
console.log(b)

a= 6;
console.log(b)

b=a
console.log(b) */

//non-primitiveler

let arr1 = [1,2,'Three',false];

const arr2 = arr1;

console.log(arr1)
console.log(arr2)

arr1[0]=0

console.log(arr1)
console.log(arr2)