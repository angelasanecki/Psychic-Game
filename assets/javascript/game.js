



 // Wins (# of times the user has guess the letter correctly)
    var wins = 0;


//Losses (# of times the user has failed to guess the letter correctly after exhausting all guesses )
 
    var losses = 0;

   //Guesses Left (#of guesses left. This will update)
   var guessesLeft = 9;

   //Array that holds the guesses so far 


   var guessSoFar = []


    var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 

      "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Your guess so far: The specific letters that the user typed Display these until the user either wins or loses 

  function genSecretLetter() {

    var secretLetter = alpha[Math.floor(Math.random()*alpha.length)];

    console.log("secret letter is " + secretLetter);

    return secretLetter;

  }


var secretLetter2 = genSecretLetter()

  document.onkeyup = function(event) {



    var userguess= String.fromCharCode(event.keyCode).toLowerCase();


    console.log("user guess is " + userguess);

  


    if (userguess === secretLetter2) {

        wins ++;
        guessesLeft == 9;

    } else {

        guessesLeft--;
        guessSoFar.push(userguess);
            if(guessesLeft === 0){
                losses++;
                guessSoFar = [];
                guessesLeft = 9;


            }
        



    }


    var html = "<p> Wins " + wins + "</p>" +
        
            "<p> Losses " + losses + "</p>" +

            "<p> Guesses Left " + guessesLeft + "</p>"

            "<p> Your guesses so far: " + guessSoFar + "</p>";

           
            console.log("user guess a second time is " + userguess);
            console.log("guesses so far " + guessSoFar);


    document.getElementById("psychicGame").innerHTML = html;



  }


    




     // When the player wins, increas the wins counter and start the game ver again(without refreshing the page)

     // When the player loses, increas the Losses counter and restart the game without a page refresh (just like when the user wins)





