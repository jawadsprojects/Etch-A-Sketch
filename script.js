initializeEtchASketch(16);


function initializeEtchASketch(rowsAndCols=10) {

    if(isNaN(rowsAndCols) || rowsAndCols < 2 || rowsAndCols>100){
        alert("please enter a valid number!");
        return;
    }

    let container = document.querySelector('#container');

    container.innerHTML = "";
  
    // let userInput = document.getElementById("sizeInput");
    // let rowsAndCols = parseInt(userInput.value);
  
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
      child.addEventListener("mouseover", function () {
        this.style.backgroundColor = "black";
      });
    }
  }
  
  // Call the function to initialize the Etch a Sketch
//   initializeEtchASketch();