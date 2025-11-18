const div = document.querySelector("#container1");
div.classList.add("container");

let numOfSquares = 16

function drawSquares(numOfSquares) { 

    for (let i=0; i<numOfSquares*numOfSquares; i++) {
    const squares = document.createElement("div")
    squares.classList.add("squares");
    let width = (1/numOfSquares)*100;
    console.log(width)
    squares.style.width = width + "%";
    div.appendChild(squares);

}
}

function removeSquares(style) {
    
    const squares = document.querySelectorAll(style);
    squares.forEach(square => square.remove());

}

// drawSquares(numOfSquares);


// const squares = document.querySelectorAll(".squares")


// squares.forEach(square => {
// square.addEventListener('mouseover', () => {
// square.classList.add("changeColor");
// })

// });


const inp = document.querySelector("input");
const btn = document.querySelector("button");


function respToBtn(e) {
    if (e) {
        e.preventDefault();
        numOfSquares = inp.value;
        inp.value = 0;}
    
    console.log(numOfSquares);
    removeSquares(".squares");
    drawSquares(numOfSquares);
    const squares = document.querySelectorAll(".squares")

    

    squares.forEach(square => {
    
    square.dataset.opacity = 0;
    
    square.addEventListener('mouseover', () => {
    let current = Number(square.dataset.opacity);
    current = current >= 1 ? 1 : current + 0.1
    square.classList.add("changeColor");
    
    square.dataset.opacity = current;
    square.style.opacity = current;
                                            })

        });

}


respToBtn();
btn.addEventListener("click", respToBtn)