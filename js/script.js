/*

**Consegna**
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

*/

// document.getElementById("start-btn").addEventListener("click", initFunction);
const container = document.getElementById("square-container");



initFunction();

function initFunction(){
    for(let i = 0; i < 49; i++){
        const cell = squareGenerator(container);
    }
}


function squareGenerator(target){
    const cell = document.createElement("div");
    cell.classList.add("cell", "x7", "clicked"); 
    target.append(cell);
}

