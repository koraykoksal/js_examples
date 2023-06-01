//* ============================================
//*                FOR LOOP
//* ============================================

console.log("******* LOOPS IN ARRAYS ******")





const notlar = [34,56,77,33]


// let toplam =0
// for(let i =0;i<notlar.length;i++){

//     toplam += notlar[i] / notlar.length


// }


// console.log(toplam);



//! FOR IN DONGUSU

const notlar2 = [34,56,77,33]

let lesshtan50 = []

for(let i in notlar){

    if(notlar[i] < 50){
        lesshtan50.push(notlar[i])
    }
    
}

//console.log(lesshtan50);


//! FOR OF DONGÜSÜ

const isimler = ['koray','mehmet','saffet','ahmet','mustafa','tahir','koray']

let sonuc = ""

const findNames = (name) => {

    let counter = 0

    for(let student of isimler){

        student === name && counter++
    }

    return counter === 0 ? `${name} can not found` : `${name} found ${counter} times` 
}


//console.log(findNames('koray'));



//! FOREACH METODU (bir dizi içine girip değere bakmak ve yazdırmak gibi işlemler için uygundur)

const names = ['koray','mehmet','saffet','ahmet','mustafa','tahir','koray']

names.forEach((d) => console.log("dizi : ",d)) // dizi

names.forEach((d,i) => console.log("dizi : ",d,"indis : ",i)) // dizi


//! FOREACH METODU 2
const price = [100,455,234]

let sum = 0

// price.forEach((p) => (sum+=p))
price.forEach(price => sum+=price)

console.log(sum);




//! MAP FONKSİYONU


const sides=['koray','hakan','mustafa','harun']
let total  = 0

const sides2 = sides.map(sides => sides.toLocaleUpperCase())

//console.log(sides2);


const usd = 19.8
const euro = 22.4
const tlPrice = [100,200,300,400,500]


const resultUsd = tlPrice.map( tl => (tl/usd).toFixed(2))

console.log(` ${resultUsd}`);


for(let i in tlPrice){

    const resultUsd = tlPrice.map( tl => (tl/usd).toFixed(2))

    console.log(tlPrice[i],resultUsd[i]);
}




//! FİLTER FONKSİYONU

const salary = [8000,15000,12450,9000,6000,7500]

const slr=[]

//maaşı onbinden büyük olanları bir diziye saklar
//const moreThan10 = salary.filter(salary => salary>10000 )

// const moreThan10 = salary.filter(salary => {

//     if(salary < 10000){

//         slr.push(salary * 1.10)


//     }
// })

const moreThan10 = salary.filter(salary => salary < 9000).map(zamli => (zamli * 1.30).toFixed(2))

console.log(moreThan10);




let scores = [];
scores.push(1, 2);
scores.pop(scores);
// scores.push(3, 4);
// scores.pop();
// const score = scores.reduce((a, b) => a + b);
console.log(scores);








