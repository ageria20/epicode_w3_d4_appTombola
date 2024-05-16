// Devo creare prima di tutto una funzione che mi crei 76 div

const selectedCell = []

const rondomNumber = (event) =>{
    event.preventDefault()
    const randomNumbers = []
    // mi creo un numero causale tra 1 e 76
    const getNumber = Math.floor(Math.random() * 77)
    const spanNum = document.getElementById("randomNum")
    spanNum.innerText = getNumber

    return getNumber
}
const createCells = () => {
    const cellsCont = document.getElementById("container")
    for(let i = 0; i < 76; i++) {
        const cell = document.createElement("div")
        const numCell = document.createElement("h3")
        numCell.innerText = i + 1
        cell.appendChild(numCell)
        cell.classList.add("numCell")
        cellsCont.appendChild(cell)
        selectedCell.push(i+1)
    }
}



window.addEventListener("DOMContentLoaded", () => {
    // Tutto ciò che metto qua dentro verrà eseguito solo ed esclusivamente una volta che il DOM iniziale verrà caricato completamente
    createCells()
  
    // Seleziono il form e ci aggancio all'evento 'submit' la funzione 'saveMeeting' che si occuperà di creare i nuovi meeting
    const form = document.querySelector("form")
    form.onsubmit = rondomNumber()
  })



