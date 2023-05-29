let container = document.querySelector('#container');

let rowsAndCols = prompt("Enter the number of rows and columns:");


for (let i = 0; i < rowsAndCols; i++) {
    for (let j = 0; j < rowsAndCols; j++) {
        const div = document.createElement('div');
        div.classList.add("child");
        container.append(div);
    }
}

container.style.gridTemplateColumns = `repeat(${rowsAndCols}, 1fr)`;
container.style.gridTemplateRows = `repeat(${rowsAndCols}, 1fr)`;

let childrenDivs = document.querySelectorAll(".child"); 

for (let child of childrenDivs) {
    child.addEventListener("mouseover", function() {
        this.style.backgroundColor = "black"; 
    });
}
