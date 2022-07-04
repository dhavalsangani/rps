// Left image

var randomNumber1 = Math.floor(Math.random()*3)+1;

if(randomNumber1===1){
    var randomImage1 = "images/rock.png";
}
else if(randomNumber1===2){
    var randomImage1 = "images/paper.png";
}
else if(randomNumber1===3){
    var randomImage1 = "images/scissor.png";
}

document.querySelector(".limage").setAttribute("src",randomImage1);


// Right image

var randomNumber2 = Math.floor(Math.random()*3)+1;

if(randomNumber2===1){
    var randomImage2 = "images/rock.png";
}
else if(randomNumber2===2){
    var randomImage2 = "images/paper.png";
}
else if(randomNumber2===3){
    var randomImage2 = "images/scissor.png"
}

document.querySelector(".rimage").setAttribute("src",randomImage2);

// Winning Text

if(randomImage1 === randomImage2){
    document.querySelector("h3").innerHTML = "It's a Draw";
}
else if(randomNumber1===1 && randomNumber2===2){
    document.querySelector("h3").innerHTML = "Player 2 Wins";
}
else if(randomNumber1===1 && randomNumber2===3){
    document.querySelector("h3").innerHTML = "Player 1 Wins";
}
else if(randomNumber1===2 && randomNumber2===1){
    document.querySelector("h3").innerHTML = "Player 1 Wins";
}
else if(randomNumber1===2 && randomNumber2===3){
    document.querySelector("h3").innerHTML = "Player 2 Wins";
}
else if(randomNumber1===3 && randomNumber2===1){
    document.querySelector("h3").innerHTML = "Player 2 Wins";
}
else if(randomNumber1===3 && randomNumber2===2){
    document.querySelector("h3").innerHTML = "Player 1 Wins";
}



// detect mouse click and add animation
// document.querySelector("button").addEventListener("click",function(){
//     var btnAnimation = document.querySelector("button").classList.add("btn-animation");
//     setTimeout(function(){
//         btnAnimation.classList.remove("btn-animation");
//     },100);
// })
