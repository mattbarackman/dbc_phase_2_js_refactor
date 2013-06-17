$(document).ready(function() {

  var dice = [];

  function die() {
    this.state = 1;
  }

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

  die.prototype.roll = function() {
    this.state = Math.floor((Math.random() * 6) + 1);
  };

  var addDieButton = $('#roller button.add');

  var rollDiceButton = $('#roller button.roll');

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

  addDieButton.on('click', function() { addDie(); });

  rollDiceButton.on('click', function() { rollDice(); });
});