const div = document.querySelector("#container1");
div.classList.add("container");

for (let i=0; i<16*16; i++) {
    const squares = document.createElement("div")
    squares.classList.add("squares");

    div.appendChild(squares);
}