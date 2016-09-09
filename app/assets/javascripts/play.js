var score = 0;
var playstate = {


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

},
collectStar: function(player, star) {

    star.kill();
    score += 10;
    scoreText.text = 'Score: ' + score;



},

dieBySpike: function(player, spikes) {

    player.kill();
    game.state.start(game.state.current);
    score = 0;
}




};
