//* ------ Selectors ------- */

const rockImg=document.getElementById('rock')
const paperImg=document.getElementById('paper')
const scissorImg=document.getElementById('scissor')

const selectionAricle=document.querySelector('.selection')

const yourChoiceDiv=document.getElementById("your-choice")
const pcChoiceDiv=document.getElementById("pc-choice")

//* ------- Variables ------- */

const userSelectImg=document.createElement("img")
const pcSelectImg=document.createElement("img")

const pcScoreSpan = document.getElementById('pc-score')
const yourScoreSpan = document.getElementById('your-score')

//? message
const messagePar = document.querySelector(".message")

//? Score
const scoreCardSection = document.querySelector(".score-card")


//? Modal
const modalCardSection = document.querySelector(".modal-card")
const finalMessagePar = document.getElementById("final-message")
const playAgainBtn = document.getElementById("play-again")

//? Colors
const YELLOW = "#ffc538"
const RED = "#fb778b"
const GREEN = "#5ab7ac"


//* ------- Event Listeners ------- */


selectionAricle.addEventListener('click',(e)=>{

    if(e.target.id){
        userSelectImg.src=`./assets/${e.target.id}.png`
        userSelectImg.alt=e.target.id
        yourChoiceDiv.appendChild(userSelectImg)

        createPcSelection()
    }

    
})


//* ------- Functions ------- */


const createPcSelection = ()=>{

    const pcArr = ["rock","paper","scissor"]
    const pcRandom = pcArr[Math.floor(Math.random()*3)]

    pcSelectImg.src=`./assets/${pcRandom}.png`
    pcSelectImg.alt=pcRandom

    pcChoiceDiv.appendChild(pcSelectImg)

    calculateResult()
}



const calculateResult =()=>{

    //? eşitlik durumunda

    if(userSelectImg.alt === pcSelectImg.alt){
        draw()
    }
    else{

        if(userSelectImg.alt === "rock"){
            pcSelectImg.alt === "paper" ? youLost() : youWin()
        }
        else if(userSelectImg.alt === "scissor"){
            pcSelectImg.alt==="rock" ? youLost() : youWin()
        }
        else if(userSelectImg.alt === "paper"){
            pcSelectImg.alt === "scissor" ? youLost() : youWin()
        }
    }


    if(pcScoreSpan.textContent === "10" || yourScoreSpan.textContent === "10"){

        openModal()
    }

}

const draw = () => {
    messagePar.textContent = "Its a draw"
    scoreCardSection.style.color = YELLOW
    messagePar.style.backgroundColor = YELLOW

}


const youLost = () => {
    messagePar.textContent = "You Lost"
    scoreCardSection.style.color = RED
    messagePar.style.backgroundColor = RED
    pcScoreSpan.textContent++
}
  
const youWin = () => {
    messagePar.textContent = "You Win"
    scoreCardSection.style.color = GREEN
    messagePar.style.backgroundColor = GREEN
    yourScoreSpan.textContent++
}




const openModal = ()=>{

    modalCardSection.classList.add("show")

    if(yourScoreSpan.textContent === "10"){
        //kullanıcı 10 puana ulaştı ise
        finalMessagePar.textContent="👏 You Win 👍"
        document.querySelector('.modal').style.backgroundColor=GREEN
        playAgainBtn.style.color=GREEN
    }
    else{
        
        //? eger pc 10 puana ulasti ise pc kazanmistir.
        finalMessagePar.textContent = "☹️ You Lost ☹️"
        document.querySelector(".modal").style.backgroundColor = RED
        playAgainBtn.style.color = RED
    }
}

//oyunu yeniden oynamak isterse
playAgainBtn.addEventListener('click',()=>{

    window.location='index.html'
})

