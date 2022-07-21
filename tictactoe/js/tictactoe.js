//This variable keeps track of whos turn it is. 
let activePlayer = 'X';
//this array stores an array of moves. we use this to determin win conditions.
let selectedSquares = [];

//this funciton is for placing an x or o in a square
function placeXOrO(squareNumber) {
    //this condition ensures a square hasn't been selected already.
    //the .some() method is used to check each element of the selectsquare array
    //to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //this variable retrieves the html element id that was clicked. 
        let select = document.getElementById(squareNumber);
        //this condition checks who's turn it is. 
        if (activePlayer === 'X') {
            //If activePlayer is equal to 'X', the x.png is placed in HTML
            select.style.backgroundImage = 'url("images/x.png")';
           //active player may only be X or O so if not x it must be O
        } else {
            //if activeplayer is equal to O the o.png is placed in html
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array
        selectedSquares.push(squareNumber+ activePlayer);
        //this calls a function to check for any win conditions.
        checkWinConditions();
        //this conditon is for changing active player
        if (activePlayer==='X') {
            //if active player is anything other than 'X"
            activePlayer = 'O';
            //if active player is anything other than 'X'
        } else {
            //change the activePlayer to 'X"
            activePlayer = 'X';
        }
        //this function plays placement sound.
        audio('./media/place.mp3');
        //This condition check to see if it is the computer's turn.
        if (activePlayer==='O'){
            //this function disables clicking for computers turn.
            disableClick();
            //this function waits 1 second bfore the computer places an image and enables click
            setTimeout(function(){ computersTurn();}, 1000);
        }
        //returning true is needed for out computersTurn()function to work.
        return true;
    }
    //this function results in a random in a random square being selected by the computer.
    function computersTurn(){
        //this boolean is needed for out while loop.
        let success = false;
        //this variable stores a random number 0-8.
        let pickASquare;
        //this condition allow our while loop to keep trying if a square is selected already
        while (!success) {
            //a random number between 0 and 8 is selected.
            pickASquare = String(Math.floor(Math.random()*9));
            //if the random number evaluated returns true, the square hasn't been selected 
            if (placeXOrO(pickASquare)){
                //this line calls the function.
                placeXOrO(pickASquare);
                //this changes our boolean and ends the loop.
                success = true;
            };
        }
    }
} 