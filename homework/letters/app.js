

const text=document.getElementById('text')
const btnConvert=document.getElementById('convert')
const result = document.getElementById('result')

let upper=""


btnConvert.addEventListener('click',()=>{

    upper=text.value
    const arr = upper.split(' ')

    for(let i=0;i<arr.length;i++){

        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        
    }

    const str2 = arr.join(" ");
 
    result.textContent=str2

})




