const promptUser = () => {
    let gridSize = [0, 0];

    while(true) {

        gridSize[0] = prompt("Set width: ");
        gridSize[1] = prompt("Set height: ");

        if (gridSize[0] > 100 || gridSize[1] > 100) {
            alert("Cannot have a value more than 100, please type a value that is 100 or lower");
            continue;
        }
        break;
    }

    return gridSize;
}


const createGrid = (gridInfo) => {
    const body = document.querySelector('body');
    const canvas = document.createElement('div');
    canvas.classList.add("container");
    canvas.style.width = window.innerWidth;
    canvas.style.cssText = `grid-template-columns: repeat(${gridInfo[0]}, 1fr); grid-template-rows: repeat(${gridInfo[1]}, 1fr)`;
    console.log(window.innerWidth);
    canvas.style.height = window.innerHeight;
    console.log(window.innerHeight);
    
    for (let row = 1; row < gridInfo[0] + 1; row++) {
        for (let col = 1; col < gridInfo[1]; col++) {
            const sketchBox = document.createElement('div');
            sketchBox.classList.add("box", row);
            sketchBox.setAttribute('id', col)
            sketchBox.addEventListener("mouseover", (e) => {
                e.target.style.cssText = "background-color: black";
            })
            canvas.appendChild(sketchBox);
        }
    }

    body.appendChild(canvas);
}

createGrid(promptUser());