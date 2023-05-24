

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



// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [4, 5, 6, 7, 8];

// let same=[]

// for(let i=0;i<arr1.length;i++){

//     for(let j=0;j<arr2.length;j++){

//         if(arr1[i] == arr2[j]){

//             same.push(arr1[i])
//         }
//     }

// }

// console.log(same);

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [4, 5, 6, 7, 8];

// const result= arr1.filter((num,i)=>{

//     if(arr1.includes(arr2[i])){
//      console.log(arr2[i]);

//     }
// })

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];

const samelist = []

const same = arr1.filter((num,i) => {

    if(arr1.includes(arr2[i])){

        samelist.push(arr2[i])

    }
})

//console.log(samelist);




// İşlev: Bir dizideki kelime uzunluğu 5'ten büyük olan kelimeleri filtrelerip yazdırın

const words = ['apple', 'banana', 'grapefruit', 'kiwi', 'orange'];

const morethan5 = words.filter((w5) =>{

    return w5.length > 5
})

//console.log(morethan5);





// İşlev: Bir dizideki sayıları tersine çevirerek yeni bir dizi oluştururunuz yani her sayıyı tersten yazdırmamız isteniyor

const numbers = [123, 456, 789];

const newnumbers=[]


// newnumbers.push(numbers.reverse())

// console.log(newnumbers);


for(let i = 0;i<numbers.length;i++){


    // newnumbers.push(reverse(numbers[i]))
    newnumbers.push(numbers[i])

}


//console.log(newnumbers);




const deger = [1,2,3,4,5]

let sonuc = []

deger.forEach(myfunk)

function myfunk(value,index,array){

    sonuc.push(value+" "+index+" "+array)

    
}

//console.log(sonuc);



//const value1 = +prompt("Please enter value1 : ")
//const value2 = +prompt("Please enter value2 : ")


// const total = [value1,value2]


// const result= total.map((v) => Number(v*value1)/Number(v*value2) )

//console.log(result);



const mydizi=[20,5,4,6]

const newdizi=[]

let sum = 0

mydizi.forEach((d,i) => {

    newdizi.push((5*d))
})

console.log(newdizi);



const mm=[[1,2,3]]

console.log(typeof(mm));


const tlPrice = [200,100,600,300,1400,60]


const pp=[]


const result = tlPrice.map((c,z)=> pp.push(tlPrice[z]*5))

console.log(pp.sort((a,b) => a-b))

console.log(typeof(result));


// const id=+prompt("User ID : ")
// const ad = prompt("Ad : ")
// const soyad = prompt("Soyad : ")
// const salary = +prompt("Ücret : ")
const byear = +prompt("Doğum yılı : ")
const myobj={

    // id:id,
    // name:ad,
    // surname:soyad,
    // salary:salary,
    byear:byear,
    age:function(){
        // age=(new Date().getFullYear() - byear)

        let dd = new Date().getFullYear()
        return this.age= (dd - this.byear)
    }
    

}


// myobj.salary=6500


// if(myobj.salary >= 6500){

//     myobj.salary*=1.5
// }
// else{

//     myobj.salary*=1.7
// }

console.log(myobj);
























