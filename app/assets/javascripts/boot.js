var platforms;
var player;
var scoreText;
var spikes;

var bootState = {

    create: function(){

    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.state.start('load');



    }



};