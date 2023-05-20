// let str1 = "This is a string"
// let str2 = 'This is a string'
// let str3 = `This is a string`
// let str4 = new String("This is a string")

// // console.log(typeof str1) // string
// // console.log(typeof str2) // string
// console.log( str3) // string
// console.log( str4) // object

// console.log(str3[0])

// const str = 'Hello World';

// console.log(str.length)
// console.log(str[6])
// console.log(str[11])

// for (let i=0; i<str.length; i++){
//     console.log(str[i]);
// }

//tersten itere
// for(let i = str.length -1   ; i>=0; i--){
//     console.log(str[i])
//   }


// for(let i = str.length ; i>0; i--){
//     console.log(str[i-1])
//   }

// let str1 = 'I\'m a string'
// let str2 = "I'm a\0string\""
// console.log(str2)


// alert('1- ders \n2-Kayıt\n 3-pre-class')
// alert(`1- ders 
// 2-Kayıt 
// 3-pre-class`)


//slice

// let str1 = "Clarusway";
// let str2 = str1.slice(-3);
// console.log(str1)
// console.log(str2)
// console.log(str1.slice(-9,-3))



// let value1 = prompt("enter text : ");

// let value2 = prompt("search letter : ");

// console.log(value1.indexOf(value2));


// const indexOfAll = () => {
//     let word = prompt("Please enter your centense");    //index değeri i
//     let letter = prompt("Which letter do you want to search");  koray[i]    //aradığın değerler
//     let indexAll = "";
//     let count = 0;
//     for (let i=0; i<word.length; i++){
//         if (word[i] == letter) {
//             indexAll += i + " ";
//             count++;
//         }
//     }   
//     if (count>0){
//         console.log(indexAll);
//     }else{
//         console.log(-1);
//     }
// }
// indexOfAll();


// const x = 6 % 2;
// const y = x ? "One" : "Two";

// console.log(y);


// function reverseWord(x){
//     //return x.split(" ") //boşluklara ayırarak print yapıyor
//     return x.split(" ").reverse().join(" ")
// }
// console.log(reverseWord("? doing you are how hi"));





let word = "Clarusway Rocks !";

function reverse(words){

    let result ="";

    for(let i = word.length-1; i>=0;i--){

        result +=word[i]

    }
    return result;
}

console.log(reverse(word));