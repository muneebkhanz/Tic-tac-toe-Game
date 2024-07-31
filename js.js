let boxes = document.querySelectorAll(".box");
let restbtn = document.querySelector("#rest-btn");
let trunO = true;
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame = () => {
    trunO = true;
    enabledboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was click ");
        if (trunO) {
            box.innerText = "O";
            trunO = false;
        }
        else {
            box.innerText = "X";
            trunO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disabledboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enabledboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();//this import function for disabling btn//
}

const checkWinner = () => {
    for (let pattern of winpatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // )
        let post1Val = boxes[pattern[0]].innerText;
        let post2Val = boxes[pattern[1]].innerText;
        let post3Val = boxes[pattern[2]].innerText;

        if (post1Val != "" && post2Val != "" && post3Val != "") {
            if (post1Val === post2Val && post2Val === post3Val) {
                console.log("Winner", post1Val);
                showWinner(post1Val);
            }
        }

    }
};

newgamebtn.addEventListener("click", resetgame);
restbtn.addEventListener("click", resetgame);
