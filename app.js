let gameseq=[];
let userseq=[];

let btns =["yellow","red","purple","green"];
let started=false;
let level=0;
let h2 =document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started");
        started = true;
        levelup();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}

function levelup() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
   
    let randidx = Math.floor(Math.random() * btns.length); 
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameFlash(randbtn);
}

function checkans(idx) { 
    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelup, 1000); // Move to the next level after 1 second
        }
    } else {
        h2.innerHTML = `Game Over! Your Score Was <b>${level}</b><br> Press Any Key To Start.`;
        reset(); 
    }
}

function btnPress(){
    let btn =this;
    userFlash(btn);

    usercolor =btn.getAttribute("id");
    userseq.push(usercolor);
console.log(userseq);
    checkans(userseq.length-1);
}
    
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns) {
btn.addEventListener("click",btnPress);

}


function reset(){
    started = false;
    gameseq = [];
    userseq =[];
    level = 0;
}