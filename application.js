$(document).ready(function() {

  //create container to hold dice

  var dice = [];


  // create die constructor and prototype methods

  function die() {
    this.state = 1;
  }

  die.prototype.roll = function() {
    this.state = Math.floor((Math.random() * 6) + 1);
  };


  // create DOMRenderer constructor and prototype methods

  function DOMRenderer() {}

  DOMRenderer.prototype = {
    renderDie: function(die) {
      html = '<div class="die">' + die.state + '</div>';
      $('.dice').append(html);
    },
    clearDice: function() {
      $('.die').remove();
    },
    rerenderDice: function() {
      this.clearDice();
    }
  };

  var renderer = new DOMRenderer();


  // rename buttons for ease of reading

  var addDieButton = $('#roller button.add');
  var rollDiceButton = $('#roller button.roll');


  // set event handlers

  addDieButton.on('click', function() { addDie(); });

  rollDiceButton.on('click', function() { rollDice(); });


  // define callback functions

  function addDie() {
    var new_die = new die();
    dice.push(new_die);
    renderer.renderDie(new_die);
  }

  function rollDice() {
    renderer.clearDice();
    for (var i in dice) {
      dice[i].roll();
      renderer.renderDie(dice[i]);
    }
  }

});

