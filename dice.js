
               //Dice-1
var randomNumber1 = Math.floor(Math.random() * 6) + 1

var randomDiceImage1 = "dice" + randomNumber1 + ".png"; 

var randomImageSource1 = "images/" + randomDiceImage1;

var image1 = document.querySelectorAll("img")[0];

 images1 = image1.setAttribute("src", randomImageSource1);
                  
             //Dice-2
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png"

var randomImageSource2 = "images" + "/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

  images2 = image2.setAttribute("src" , randomImageSource2)


         //Winner or Draw

    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
    }
    else if(randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    }
    else{
        document.querySelector("h1").innerHTML = "Draw!";
        }