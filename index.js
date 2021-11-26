
     var randomnumber1 = Math.floor(Math.random()*6 + 1);
     var randomnumber2 = Math.floor(Math.random()*6 + 1);

     if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").textContent= "🚩Player 1 Wins!";


  }else if(randomnumber2 > randomnumber1) {
     document.querySelector("h1").textContent = "Player 2 Wins!🚩";

  }else if(randomnumber1 === randomnumber2) {
     document.querySelector("h1").textContent = "Draw!";

  }

  var randomimage = "images/dice"+randomnumber1+".png";
  var randomimage2 = "images/dice"+randomnumber2+".png";
  document.querySelector(".img1").setAttribute("src",randomimage);
  document.querySelector(".img2").setAttribute("src",randomimage2);
