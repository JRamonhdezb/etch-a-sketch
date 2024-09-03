console.log("Hello World");

const body = document.querySelector("body");
const container = document.querySelector("#container");

const button = document.createElement("button");
button.textContent = "Start a new grid square";
body.insertBefore(button, container);

const getGridSquare = function(n) {
    for (let i = 0; i < n; i++){
        let column = document.createElement("div");
        column.classList.add("column");
        for (let i = 0; i < n; i++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            addEventListener(cell);
            column.appendChild(cell);
        }
        container.appendChild(column);
    }
}

const addEventListener = function(element) {
    element.addEventListener("mouseover", () => {
        element.classList.add("cellHover")
    })
}

const clearFunction = function() {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
} 

// let number = 16; 
// getGridSquare(number);

button.addEventListener("click", () => {
    let number;
    do {
        number = +prompt("New grid square size: ", 16);
        if (number > 100) alert ("MAX number is 100. Try again.")
    } while (number > 100);
    
    clearFunction(); 
    getGridSquare(number);
})