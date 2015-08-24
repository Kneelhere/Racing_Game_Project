// OOP Racing Game example boilerplate code

function Game() {
  //Create a new instance of player 1
  //this.player1 = ...
  //var player1 = window.prompt("What username would you like to use?");
  //this.player1 = player1;
  if ($('#hero').val() === "0") {
    $('#box').click(function() {
      $(this).html('<img src="http://i105.photobucket.com/albums/m219/trexrell/flash_zps15f35f5c.gif" width="auto" height= "50px" margin="auto">');
    })
  }
  if ($('#hero').val() === "1") {
    $('#box').click(function() {
      $(this).html('<img src= "http://www.puppstheories.com/spriterips/BatmanReturns6fWalk.gif" width="auto" height="50px" margin="auto">');
    })
  }

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

//$('#hero').val();

function playGame(){
    var counter1 = 0;
    var counter2 = 0;
  $(window).keypress(function(event) {
    if (event.which === 97) {
      counter1++;
      $('.first:nth-child(' + counter1 + ')').html('<img src="http://i105.photobucket.com/albums/m219/trexrell/flash_zps15f35f5c.gif" width="auto" height= "50px" margin:"auto">');
      if (counter1 === 8) {
        alert("Player 1 won!")
      }
    }
    if (event.which === 108) {
      counter2++;
      $('.second:nth-child(' + counter2 + ')').html('<img src="http://i.imgur.com/LDWD1.gif" width="auto" height="50px" margin:"auto">');
      if (counter2 === 8) {
        alert("player 2 won!")
      }
    }
  })
}


$(document).ready(function() {
  playGame();
})