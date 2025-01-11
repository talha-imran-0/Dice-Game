let randomNum1Gen = Math.floor(Math.random() * 6)+1;

let newSrc = "images/dice"+randomNum1Gen+".png";

let img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src",newSrc);

let randomNum2Gen = Math.floor(Math.random() * 6)+1;

let newSrc2 = "images/dice"+randomNum2Gen+".png";

let img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src",newSrc2);



if(randomNum1Gen > randomNum2Gen){
    document.querySelector("h1").innerHTML = "Player 1 Wins !"
} else if (randomNum2Gen > randomNum1Gen) {
    document.querySelector("h1").innerHTML = "Player 2 Wins !"
} else {
    document.querySelector("h1").innerHTML = "Draw"
}
