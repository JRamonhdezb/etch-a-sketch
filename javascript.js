console.log("Hello World");


const container = document.querySelector("#container");

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

let number = 16; 
getGridSquare(number);

