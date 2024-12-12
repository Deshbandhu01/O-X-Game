let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true; //playerX,playerO)

//2D Array
// arr[0]
// it gives back the individual array

let winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]


boxes.forEach((box) =>{
    box.addEventListener("click",() => {        //this is made for button to react accodring to click. 
        if(turn0){                  //playerO
            box.innerText="O";
            turn0=false;
            box.style.color="white";
        }
        else{                       //playerX
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;

        checkWinner();
    })
})

//for diabling buttons after win
const disableBoxes =() =>{
    for (let box of boxes){
        box.disabled=true;   
    }
}

//for enabling boxes after reset of game
const enableBoxes =() =>{
    for (let box of boxes){
        box.disabled=false;   
        box.innerText= "";
    }
}

//for displaywinner function
const showWinner=(winner)=>{
    msg.innerText = `Congratualation,winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

//used to check winner
let checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}

//for resetting game
const resetGame = () => {       //used to enable reset button
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
