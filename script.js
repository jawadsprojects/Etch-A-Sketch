let container = document.querySelector('#container');

let rowsAndCols = 16;

for (let i = 0; i < rowsAndCols; i++) {
    for (let j = 0; j < rowsAndCols; j++) {
        const div = document.createElement('div');
        div.classList.add("child");
        container.append(div);
    }
}

let childrenDivs = document.querySelectorAll(".child"); 

for(children of childrenDivs){
    children.addEventListener("click", function() {
        this.style.backgroundColor = "black"; 
    });
}