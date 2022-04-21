/*

**Consegna**
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

*/

document.getElementById("start-btn").addEventListener("click", initFunction);
const container = document.getElementById("square-container");
const reload = document.getElementById("play-again");

const options = document.getElementById("level");
const easy = options[0].value;
const medium = options[1].value;
const hard = options[2].value;

function initFunction(){
    let num;
    if(options.value === hard){
        num = 49;
    }else if(options.value === medium){
        num = 81;
    }else if(options.value === easy){
        num = 100;
    }

    for(let i = 1; i <= num; i++){
        const cell = squareGenerator(container);
        cell.innerHTML = i;
        cell.addEventListener("click", function(){
            cell.classList.add("clicked", "white");
        })
    }

    reload.classList.add("visible");
    reload.classList.remove("hidden");

    reload.addEventListener("click", function(){
        window.location.reload();
    })
}

function squareGenerator(target){
    const cell = document.createElement("div");
    if(options.value === hard){
        cell.classList.add("cell", "x7");
    }else if(options.value === medium){
        cell.classList.add("cell", "x9");
    }else if(options.value === easy){
        cell.classList.add("cell", "x10");
    }
    target.append(cell);
    return cell;
}


