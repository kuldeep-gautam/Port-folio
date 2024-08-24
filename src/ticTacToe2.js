let result =document.getElementById("result");
let resultContainer = document.querySelector(".result-container");
let newGame = document.querySelector(".newGame");
let resetGame= document.querySelector(".resetGame");
let rootContainer = document.querySelector(".rootContainer");
let decision = document.querySelector(".decision");
let msgX=document.querySelector("#countX");
let msgO=document.querySelector("#countO");

let countX=0;
let countO=0;

msgX.innerHTML=countX;
msgO.innerHTML=countO;


let winMoves= [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
let boxes = document.querySelectorAll(".box");
function CheckWinner(){
   for (const pattern of winMoves) {
    
     let pos1 = boxes[pattern[0]].textContent;
     let pos2 = boxes[pattern[1]].textContent;
     let pos3 = boxes[pattern[2]].textContent;
     if( pos1 != "" && pos2 != "" && pos3 != ""){
      if(pos1 === pos2 && pos2 === pos3){
          result.innerHTML= `Winner ${pos1}`;
          resultContainer.classList.remove("hide");
          rootContainer.classList.add("hide");
          if(pos1==="X"){
            countX++;
            msgX.innerHTML=countX;
          }
          if(pos1==="O"){
            countO++;
            msgO.innerHTML=countO;
          }
          disabledBtn();
      }
     }
      
    }
   }

   function disabledBtn(){
    for (const box of boxes) {
      box.disabled=true;
    }
   }

   function enableBtn(){
    for (const box of boxes) {
      box.disabled=false;
      box.innerHTML='';
    }
   }

   let boxValue="X";
   
  function btnClick(e){
    let button = document.querySelector(`#${e.target.id}`);
    // console.log(button);
    button.textContent=boxValue;
    button.disabled=true;
    if(boxValue==='X'){
      boxValue='O';
      decision.innerHTML="O turn";
    }else{
      boxValue='X';
      decision.innerHTML="X turn";
    }
    CheckWinner();
}

newGame.addEventListener("click",()=>{
  enableBtn();
  resultContainer.classList.add("hide");
  rootContainer.classList.remove("hide");
  boxValue="X"
  decision.innerHTML="X turn";

})

resetGame.addEventListener("click",()=>{
  enableBtn();
  boxValue="X"
  decision.innerHTML="X turn";
})

