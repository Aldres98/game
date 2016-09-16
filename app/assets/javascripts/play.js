var score = 0;
var platforms;
var player;
var scoreText;
var spikes;


var playState = {

    create: function(){

    game.add.sprite(0, 0, 'sky');

    player = game.add.sprite(32, game.world.height - 150, 'dude');
    game.physics.arcade.enable(player);
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);

    platforms = game.add.group();
    platforms.enableBody = true;
    var ground = platforms.create(0, game.world.height - 64, 'ground');
    ground.scale.setTo(2, 2);
    ground.body.immovable = true;
    var ledge = platforms.create(400, 400, 'ground');
    ledge.body.immovable = true
    ledge = platforms.create(-150, 200, 'ground');
    ledge.body.immovable = true;
    ledge = platforms.create(750, 300, 'ground');
    ledge.body.immovable = true;
    ledge = platforms.create(500, 300, 'ground');
    ledge.scale.setTo(0.2, 0.2);
    ledge.body.immovable = true;

    spikes = game.add.group();
    spikes.enableBody = true;
    var danger = spikes.create(300, 440, 'spike')
    danger.enableBody = true;
    danger.body.immovable = true;

    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    stars = game.add.group();
    stars.enableBody = true;

    for (var i = 0; i < 12; i++)
    {
        var star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 6;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
    }
},


update: function()
{

    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(player, spikes);

    cursors = game.input.keyboard.createCursorKeys();
    player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -150;
        player.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 150;
        player.animations.play('right');
    }
    else
    {
        player.animations.stop();
        player.frame = 4;
    }
    if (cursors.up.isDown && player.body.touching.down)
    {
        player.body.velocity.y = -300;
    }

    game.physics.arcade.collide(stars, platforms);
    game.physics.arcade.overlap(player, spikes, dieBySpike, null, this);
    game.physics.arcade.overlap(player, stars, collectStar, null, this);

        if(score == 120)
    {
     game.state.start('win')
    }


},


};

function collectStar(player, star) {

    star.kill();
    score += 10;
    scoreText.text = 'Score: ' + score;

}

function dieBySpike(player, spikes) {

    player.kill();
    game.state.start(game.state.current);
    score = 0;
}


