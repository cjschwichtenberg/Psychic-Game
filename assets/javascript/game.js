        //Input: Define GLOBAL variables for counters: wins, losses, guessesLeft, lettersGuessed (log to console)
        var wins = 0;
        var losses = 0;
        var guessesLeft = 10;
        var lettersGuessed = [];

        console.log("wins" + wins, "losses" + losses, "guessesLeft" + guessesLeft, lettersGuessed);

        // Start game function
        window.onload = function gamePsychic() {


            funtion runNum(); {
                var crystal1 = Math.floor(Math.random() * 10 + 2);
                var crystal2 = Math.floor(Math.random() * 10 + 2);
                var crystal3 = Math.floor(Math.random() * 10 + 2);
                var crystal4 = Math.floor(Math.random() * 10 + 2);
            }
            runNum();
            console.log(crystal1, crystal2, crystal3, crystal4);
            // Define alphabet array (log to console)
            var alphPsychic = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            console.log("alphPsychic" + alphPsychic);

            // Randomize computer output from alphabet into a variable (log in console)
            var compChoice = alphPsychic[Math.floor(Math.random() * alphPsychic.length)];
            console.log("compChoice" + compChoice);

            // Alert player to input letter ( Need help:***could not find an easy solution to ensure only A-Z char. were input by player-have ?, need help***)
            alert('Are you psychic? Choose a letter between A-Z')

            // Create variable when player input's alphabet guess on key release
            var playerGuess = document.addEventListener("keyup", playerInput);

            // Function that defines event, logs player input and pushes player guesses to array that holds all guesses until win/loss occurs (log to console both ind.player guess and player guesses string)
            function playerInput(event) {
                playerGuess = event.key;
                console.log("playerGuess" + playerGuess);
                lettersGuessed.push(playerGuess);
                console.log(lettersGuessed);

                // Statement for matching comp/player output/input (alert:WIN), updates global variable and displays correct html for wins, resets # guess left and guesses array. Prompts/logs new comp. output.
                // ***Had difficulty making compChoice variable into simple function and had to repeat code here- confused as to how you would create function that gives seperate variable EASILY***
                if (guessesLeft >= 0 && compChoice == playerGuess) {
                    wins++;
                    guessesLeft = 10;
                    lettersGuessed = [];
                    window.alert('Wow, you are psychic and guessed correctly. You win!');
                    document.getElementById('wins').innerHTML = "<p>Wins: " + wins + "</p>";
                    document.getElementById('guessesLeft').innerHTML = "<p>Guesses Left: " + 10 + "</p>";
                    document.getElementById('lettersGuessed').innerHTML = "<p>Guesses Thus Far: </p>";
                    // ***Would like to not have to repeat below code- have ?'s/need help****
                    compChoice = alphPsychic[Math.floor(Math.random() * alphPsychic.length)];
                    console.log("compChoiceNew" + compChoice);
                    // statement for unmatched comp/player output/input & no remaining guesses (alert:LOST), updates global variables and displays correct html for losses, resets # of guess left and guesses array. Promps/logs new comp. output.
                } else if (guessesLeft <= 0) {
                    losses++;
                    guessesLeft = 10;
                    lettersGuessed = [];
                    window.alert('Take some time to focus your mind and try again. You lost!');
                    document.getElementById('losses').innerHTML = "<p>Losses: " + losses + "</p>";
                    document.getElementById('guessesLeft').innerHTML = "<p>Guesses Left: " + 10 + "</p>";
                    document.getElementById('lettersGuessed').innerHTML = "<p>Guesses Thus Far: </p>";
                    // ***Would like to not have to repeat below code- have ?'s/need help****
                    compChoice = alphPsychic[Math.floor(Math.random() * alphPsychic.length)];
                    console.log("compChoiceNew" + compChoice);
                    // else statment for unmatched comp/player output/input with guesses still remaining (alert:keep guessing), updates html for # of guesses reamining and guessed letters.
                } else {
                    guessesLeft--;
                    window.alert('Focus a bit harder and try picking another letter A-Z again!');
                    document.getElementById('guessesLeft').innerHTML = "<p>Guesses Left: " + guessesLeft + "</p>";
                    document.getElementById('lettersGuessed').innerHTML = "<p>Guesses Thus Far: " + lettersGuessed + "</p>";
                }

            }

        }