

// const value = ['A','B','C','D']

// const free_value=[]

// for(let i in value){

//     free_value.push(value[i])

// }


//console.log(free_value);


// let free = []

// const cc = [{name:'koray',surname:'koksal',age:39},
//             {name:'mehmet', surname:'tanrivermis',age:25},
//             {name:'mustafa', surname:'ceceli',age:38},
//             {name:'emanuel', surname:'icardi',age:40},
//             {name:'fernando', surname:'muslera',age:42},
//             {name:'ali', surname:'veli',age:20},
//             {name:'cumhuriyet varsa', surname:'demokrasi var',age:1000}];




// for(let i =0;i<cc.length;i++){

//     if(cc[i].age >= 40){
//         free.push(cc[i])
//     }
// }


// console.log(free);


let yenideger =[]

const values = [{name:'koray',surname:'koksal',age:19,maas:5000},
                {name:'mehmet',surname:'tanrivermis',age:20,maas:5500},
                {name:'ali',surname:'ozkan',age:21,maas:6000}]

// for(let i =0;i<values.length;i++){

//     //console.log(values[i].name.concat(' ',values[i].surname))

//     if(values[i].age <=20 && values[i].name == 'koray'){

//         yenideger = values[i].name.concat(' ',values[i].surname)

//         console.log(`bulunan değer : ${yenideger}`)
//     }
// }


//values.forEach(v => console.log(v.name == 'koray' || v.name == 'mehmet')) //


const arr = values.filter(v => v.maas <= 5500).map(z => z.maas *1.50)


//console.log(arr);




const height=+prompt("Please enter your height : ")
const weight=+prompt("Please enter your weight : ")

const wh = [weight,height]

const wh2 = wh.filter(r => r < 100)


console.log(wh2);















































