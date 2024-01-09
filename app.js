let gameseq =[];
let userseq =[];

let started = false;
let level = 0;

let h2 =document.querySelector('h2');

let btns=["yellow","red","purple","green"]

document.addEventListener("keypress",function(){

    if(started == false){
        console.log("game is started");
        started = true;
        }

        levelup();

})

function levelup(){
    userseq=[];

    level++;
    h2.innerText=`Level ${level}`;

    let randidx = Math.floor(Math.random()*4);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);

    // console.log(randidx);
    // console.log(randcolor);
    // console.log(randbtn);
    gameseq.push(randcolor);
    console.log(gameseq);

    gameflash(randbtn);
}

function gameflash(btn){

    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);

}

function userflash(btn){

    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);

}


function btnpress(btn){

console.log("btn pressed");
// console.log(this);
// let btn=this;
userflash(this);

  usercolor = this.getAttribute("id");
//  console.log(usercolor);
userseq.push(usercolor);
console.log(userseq);

checkans(userseq.length-1);


}

function checkans(index){

    console.log("curr level : ",level);
    // let index = level-1;

    if(userseq[index] ===  gameseq[index]){
        // console.log("same value");
        if(userseq.length == gameseq.length){
            setTimeout(levelup, 1000);
        }
    }
    else{
        h2.innerHTML = `Game  Over! Your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector( "body").style.backgroundColor="red";
        document.querySelector( "body").style.backgroundColor="red"
        setTimeout(function(){
            document.querySelector( "body").style.backgroundColor="white"
        },1500);
        reset();
    }


}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnpress)
}


function reset(){
    started =false;
    gameseq =[];
    userseq =[];
    level =0;
    

}