let board = $(".board");
let color = "black";
let click = true;

function setBoard(size) {
    board.css("grid-template-rows", `repeat(${size}, 1fr)`);
    board.css("grid-template-columns", `repeat(${size}, 1fr)`);

    board_size = size * size;

    for (let i = 0; i < board_size; i++) {
        let board_element = $("<div></div>");
        board_element.css("background-color", "white");
        board_element.on("mouseover", colorDiv);
        board.append(board_element);
    }
}

setBoard(16);

function setBoardSize(input) {
    if (input >= 4 && input <= 100) {
        setBoard(input);
    } else {
        alert("Size of board is inappropriate! Try again.");
    }
}

function colorDiv() {
    if (click) {
        if (color === 'random') {
            $(this).css("background-color", "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0"));
        } else {
            $(this).css("background-color", color);
        }
    }
}

function changeColor(choice) {
    color = choice;
}

function reset() {
    $("div").css("background-color", "white");
}

$("body").on("click", () => {
    click = !click;
    if (click) {
        $(".mode").text("Mode: Coloring");
    } else {
        $(".mode").text("Mode: Not coloring");
    }
});
