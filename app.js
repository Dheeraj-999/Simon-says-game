let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let highScore=0;

let btns=["red","yellow","green","purple"];

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if (started==false){
        console.log("game started");
        started=true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")},
    400);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")},
    300);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);

    gameFlash(randbtn);
    console.log(randColor);
    // console.log(randIdx);
    //   console.log(randbtn);
      gameSeq.push(randColor);
      console.log(gameSeq);

    
}

function checkAns(Idx){

if(gameSeq[Idx]===userSeq[Idx]){
    console.log("same value");
    if(gameSeq.length==userSeq.length){
        setTimeout(levelUp,1000);
    }
} else {
   h2.innerHTML=`Game Over! Your score is ${level-1} <br>Press any key to start again`;
//    document.querySelector("body").style.backgroundColor="red";
//    setTimeout(function(){
//    document.querySelector("body").style.backgroundColor="white";
//    },700);
   reset();
}
}

function reset(){  

    if(level-1>highScore){
        highScore=level-1;
    }

    h2.innerHTML = `Game Over! Your score is ${level - 1} <br>High Score: ${highScore}<br>Press any key to start again`;

    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}


function btnPress() {
    console.log(this); // logs the actual button element
    let btn=this;
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}



