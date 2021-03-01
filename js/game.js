// our game's configuration
// note the width and height are just the viewport sizes. 
// they don't have to be the "world" sizes.  See setBounds..
let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    
    // transparent: true,
    // title: 'We love Churros!',
    // banner: {
    //     text: 'black',
    //     background: [
    //         '#fff200',
    //         '#38f0e8',
    //         '#00bff3',
    //         '#ec008c'
    //     ],
    //     hidePhaser: true
    // },

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

    scene: [ GamePlay
    ]
};


let game = new Phaser.Game(config);