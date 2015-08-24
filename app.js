// OOP Racing Game example boilerplate code

function Game() {
  //Create a new instance of player 1
  //this.player1 = ...
  //var player1 = window.prompt("What username would you like to use?");
  //this.player1 = player1;

  //Do the same for a player 2
  //this.player2 = ...
  //var player2 = window.prompt("What username would you like to use?");
  //this.player2 = player2;

  //Create the track
  //this.track = ...
};

// `Game.prototype.init` kicks off a new game with a board and two players
Game.prototype.init = function() {
  //
};

// A starter Player constructor.
function Player(team) {
  //this.name = ...
  //this.position = ...
};

// Remember: prototypes are shared functions between all game instances
Player.prototype.move = function() {
  //update player's position
};


// A starter Track constructor.
function Track() {
  //Tracks the cells of the board instance
  //this.$cells = ...

  //Store any other properties that board may have below, such as a reset option
};

// Start the game!
var game = new Game();
game;


function playGame(){
    var counter1 = 0;
    var counter2 = 0;
  $(window).keypress(function(event) {
    if (event.which === 8) {
      counter1++;
      $('td:nth-child(' + counter1 + ')').append('hello');
    }
    if (event.which === 9) {
      counter2++;
      $('td:nth-child(' + counter2 + ')').append("yo");
    }
  })
}


$(document).ready(function() {
  playGame();
})