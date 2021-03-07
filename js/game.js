// our game's configuration
// note the width and height are just the viewport sizes. 
// they don't have to be the "world" sizes.  See setBounds..
let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    
    // transparent: true,

    //autoCenter: true,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },

    scene: [ 
        Clue1,
        Scene1,
        EndGame,
        GamePlay,
    ]
};


let game = new Phaser.Game(config);
let platforms;