var loadstate = {

     preload: function(){


    var loadingLabel = game.add.text(80, 150, 'loading...', { fontSize: '32px', fill:'#ffffff'});

    game.load.image('star', '/assets/star.png');
    game.load.image('sky', '/assets/sky.png');
    game.load.image('ground', '/assets/ground.png');
    game.load.spritesheet('dude', '/assets/dude.png', 32, 48);
    game.load.spritesheet('spike', '/assets/spike.png');

    },

    create: function(){

        game.state.start('menu')


    }


};
