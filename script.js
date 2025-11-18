const div = document.querySelector("#container1");
div.classList.add("container");

let numOfSquares = 16

function drawSquares(numOfSquares) { 

    for (let i=0; i<numOfSquares*numOfSquares; i++) {
    const squares = document.createElement("div")
    squares.classList.add("squares");

    div.appendChild(squares);


}
}

function removeSquares(style) {
    
    const squares = document.querySelectorAll(style);
    squares.forEach(square => square.remove());

}

drawSquares(numOfSquares);

const squares = document.querySelectorAll(".squares")


squares.forEach(square => {
square.addEventListener('mouseover', () => {
square.classList.add("changeColor");
})

});


const inp = document.querySelector("input");
const btn = document.querySelector("button");

function respToBtn(e) {
    e.preventDefault();
    numOfSquares = inp.value;
    inp.value = 0;
    console.log(numOfSquares);
    removeSquares(".squares");

}

btn.addEventListener("click", respToBtn)