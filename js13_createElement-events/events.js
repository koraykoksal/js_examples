console.log('*****------EVENTS------*****');




const h1 = document.querySelector('header h1')

h1.onmouseover = function (){
    h1.style.color="red"
}

const test=()=>{
    document.write('Hello')
}

//! onload event * html ve css kodlarının yüklenmesini bekler

window.onload=test()

//! sayfa yüklendikten belirilen elemente focuslanma işlemi yap
window.addEventListener("load",(e)=>{

    document.getElementById("input").focus()

})


window.addEventListener("click",(e)=>{

    document.getElementById("input").focus()

    console.log(e.target);


})


const addBtn = document.querySelector("#btn")
const ul = document.createElement("ul")
document.querySelector(".item-list").before(ul)

addBtn.addEventListener("click", (e) => {
  //   console.log("Btn Clicked")
  //   console.log(e)
  //   console.log(e.target)
  //   console.log(e.target.value)

  if (!input.value) {
    alert("Please enter a comment")
  } else {
    const input = document.querySelector("#input")
    const li = document.createElement("li")
    ul.appendChild(li)
    const textLi = document.createTextNode(input.value)
    li.appendChild(textLi)
    input.value = ""
    input.focus()
  }
})

//? input'un üzerinde iken bir klavye tusuna basilirsa calis
document.querySelector("#input").addEventListener("keydown", (e) => {
  //   console.log(e.code)
  //   console.log(e.keyCode)
  //? Basilan tus Enter ise
  if (e.code === "Enter") {
    addBtn.click() //? add butonun tiklanma fonksiyonu calistir.
  }
})



























