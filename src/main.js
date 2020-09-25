let ch=Math.floor(Math.random() *3);
let us=0;
let cs=0;
let won='You won';
let lose='You lose';
let draw='Draw';

function click1(){
  ch=Math.floor(Math.random() *3);
  if(ch==0){
    document.getElementById("result").innerHTML= draw;
  }
  else if(ch==2){
    document.getElementById("result").innerHTML= 'Stone broke scissor '+won;
    us=us+1;
    document.getElementById("score").innerHTML=us;
  }
  else{
    document.getElementById("result").innerHTML= 'Paper wrap Stone '+lose;
    cs = cs + 1;
    document.getElementById("score2").innerHTML = cs;
  }
}
function click2() {
  ch=Math.floor(Math.random() *3);
  if (ch == 0) {
    document.getElementById("result").innerHTML ='Paper wrap Stone '+ won;
    us = us + 1;
    document.getElementById("score").innerHTML = us;
  }
  else if (ch == 1) {
    document.getElementById("result").innerHTML = draw;
  }
  else {
    document.getElementById("result").innerHTML ='Scissor cuts Paper '+ lose;
    cs=cs+1;
    document.getElementById("score2").innerHTML = cs;
  }
}

function click3() {
  ch=Math.floor(Math.random() *3);
  if (ch == 0) {
    document.getElementById("result").innerHTML ='Stone break Scissor'+ lose;
    cs = cs + 1;
    document.getElementById("score2").innerHTML = cs;
  }
  else if (ch == 1) {
    document.getElementById("result").innerHTML ='Scissor cuts Paper '+ won;
    us = us + 1;
    document.getElementById("score").innerHTML = us;
  }
  else {
    document.getElementById("result").innerHTML = draw;
  }
}
