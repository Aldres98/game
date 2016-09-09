//= require phaser

var game = new Phaser.Game(800, 512, Phaser.AUTO, 'gameDiv');

game.state.add('boot', bootState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('win', winState);
game.state.add('load', loadState);

game.state.start('boot');