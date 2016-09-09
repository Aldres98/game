var game = new Phaser.Game(800, 512, Phaser.AUTO, 'gameDiv');

game.state.add('boot', bootState);
game.state.add('load', loadstate);
game.state.add('menu', menuState);
game.state.add('play', playstate);

game.state.start('boot');