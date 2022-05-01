var randomnumber1=Math.floor(Math.random()*5+1);
var randomnumber2=Math.floor(Math.random()*5+1);
document.querySelectorAll('img')[0].setAttribute("src","./images/dice"+randomnumber1+".png");
document.querySelectorAll('img')[1].setAttribute("src","./images/dice"+randomnumber2+".png");
if (randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="⛳️ Player 1 wins";
}
else if (randomnumber1==randomnumber2){
    document.querySelector("h1").innerHTML="Draw";
}
else{
    document.querySelector("h1").innerHTML="Player 2 wins ⛳️ ";
}