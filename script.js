const div = document.querySelector("#container1");
div.classList.add("container");


for (let i=0; i<16*16; i++) {
    const squares = document.createElement("div")
    squares.classList.add("squares");

    div.appendChild(squares);
}

const squares = document.querySelectorAll(".squares")

squares.forEach(square => {
    square.addEventListener('mouseover', () => {
    square.classList.add("changeColor");
})

});

const inp = document.querySelector("input");

function respToBtn(e) {
    e.preventDefault();
    numOfSquares = inp.value;
    inp.value = 0;

}