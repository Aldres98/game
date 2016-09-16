var winState = {

create: function() {


var nameLabel = game.add.text(80,80, 'You have won!!!', {font: '50px Arial'
, fill:'#ffffff'});

var startLabel = game.add.text(80, game.world.height - 80, 'Press W to continue...', {font: '25px Arial'
, fill:'#ffffff'});


var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

wkey.onDown.addOnce(this.start, this);

},

start: function(){

    // game.state.start('level2')
}

};