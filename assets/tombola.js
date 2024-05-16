// Devo creare prima di tutto una funzione che mi crei 76 div

const cellsNumber = []
const randomNumbers = []

const createCells = () => {
    const cellsCont = document.getElementById("container")
    for(let i = 0; i < 76; i++) {
        const cell = document.createElement("div")
        const numCell = document.createElement("h3")
        numCell.innerText = i + 1
        cell.appendChild(numCell)
        cell.classList.add("numCell")
        cellsCont.appendChild(cell)
        cellsNumber.push(numCell.innerText)
    }
}




    createCells()
  
    // Seleziono il form e ci aggancio all'evento 'submit' la funzione 'saveMeeting' che si occuperà di creare i nuovi meeting
    const button = document.querySelector("button")
   button.addEventListener('click', function(){
        // mi creo un numero causale tra 1 e 76
        let getNumber 
        const spanNum = document.getElementById("randomNum")
        spanNum.innerText = getNumber
        do {
            getNumber = Math.floor(Math.random() * 76) + 1
            spanNum.innerText = getNumber
            if (randomNumbers.length > 76) break 
        } while(randomNumbers.includes(getNumber))
        const allCells = document.querySelectorAll(".numCell")
        allCells[getNumber -1].classList.add("selectedCell")
    })



