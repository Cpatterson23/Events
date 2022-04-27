

function setToggle(mySquare, toggle) {
    if (toggle == true) {
        mySquare.style.width = "60px";
        mySquare.style.height = "60px";
    } else {
        mySquare.style.width = "50px";
        mySquare.style.height = "50px";
    }
}



function onHover(ev) {
    setToggle(ev.target, true);
}


function onLeave(ev) {
    setToggle(ev.target, false);
}


function main() {
    const squares = document.getElementsByClassName("square");

    for (let i = 0; i < squares.length; i += 1) {
        const square = squares[i];
        square.addEventListener('mouseenter', onHover);
        square.addEventListener('mouseleave', onLeave);
    }
}

main();