let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset-btn");
let newBtn=document.querySelector(".new-btn");
let msgContainer=document.querySelector(".pass-mes");
let msg=document.querySelector("#mes-g");

let turn=true;
let count=0;

const winPattern=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


const resetGame=()=>{
    turn=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn)
        {
            box.innerHTML="O";
            turn=false;
            box.classList.add("color");
        }
        else{
            box.innerHTML="X";
            turn=true;
            box.classList.remove("color");
        }
        box.disabled=true;
        count++;

        let isWinner=checkWinner();
        if(count===9&&!isWinner)
        {
            gameDrawn();
        }
    });
});
const gameDrawn=()=>{
    msg.innerHTML=`Game was a Draw`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};

const disabledBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerHTML="";
    }
};

const showWinner=(winner)=>{
    msg.innerHTML=`Congratulation winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};

const checkWinner=()=>{
    for(let pat of winPattern ){
        let pos1=boxes[pat[0]].innerHTML;
        let pos2=boxes[pat[1]].innerHTML;
        let pos3=boxes[pat[2]].innerHTML;
        if(pos1!=""&&pos2!=""&&pos3!="")
        {
            if(pos1===pos2&&pos2===pos3)
            {
                showWinner(pos1);
                return true;
            }
        }
    }

};

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);




   