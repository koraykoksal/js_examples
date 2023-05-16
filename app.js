
let num1 = 345



//! named function
function name1(){

    console.log("ali KÖKSAL");
}



//! declaretion function

function name2(param1="",param2="",param3=""){

    console.log(param1,param2,param3);

}

let sonuc=0;

function hesaplama(num1,num2){

    sonuc = num1*num2

    return sonuc

}




function tekCift(sayi1){


    let result

    if(sayi1%2==0){
        result="Çift"
    }
    else{
        result="Tek"
    }

    return result
}


let num=+prompt("Bir sayi giriniz : ")

console.log(`Girilen sayı ${num}: ${tekCift(num)}`);











































