let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#bttn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".newcontainer");
let msg=document.querySelector("#msg");

let turn0=true;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetbttn =()=>{
    turn0= true;
    enablebtn();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        console.log("click");

        if(turn0){
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        };
        box.disabled="true";

        checkWinner();
    });
});
const disablebtn=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
const enablebtn=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showwinner=(winner)=>{
    msg.innerText=`Congratulation, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebtn();
}


const checkWinner=()=>{
    for(let pattern of winpatterns){
           let pos1val= boxes[pattern[0]].innerText;
           let pos2val= boxes[pattern[1]].innerText;
           let pos3val= boxes[pattern[2]].innerText;


if(pos1val!="" && pos2val!="" && pos3val!=""){
    if(pos1val===pos2val && pos2val===pos3val){
        console.log("winner", pos1val);
        showwinner(pos1val);

    }
   }
  }
 };

 newgamebtn.addEventListener("click",resetbttn);
 resetbtn.addEventListener("click",resetbttn);

