
//*************GİRİLEN SAYININ SESLİLERİNİ BULMA */

const str=document.getElementById('text')

const btn=document.getElementById('btnfind')

const wolwesWord = document.getElementById('wolwes')

const sesliler = 'aeoöuüiAEOÖUÜIı';

const same=[]

let sum=0




btn.addEventListener('click',(e)=>{



    for (let c of str.value) {
        
       
        for(let j of sesliler){

            
            if(c == j){

                same.push(j)
                sum++
            }
            
        }
        

    }

    wolwesWord.innerHTML=`Cevap : ${sum}, Sesli olan harfler : ${same}`

    wolwesWord.style='color:red;font-size:22px'


})




//**************************************** */

















