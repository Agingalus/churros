class Scene1 extends Phaser.Scene {

    constructor() {
        super({ key: "Scene1" });

    }
    preload(){
      
        this.load.image("grass", "assets/grass.jpg");
        this.load.audio("audio1", "audio/Recording.m4a");

    }

    

    create(){
        
        //this.add.image(50,50,"sugerField");
        platforms = this.physics.add.staticGroup();
        //this.add.image(50,50,"grass");
        platforms.create(400, 568, 'grass').setScale(2).refreshBody();
        const text = this.add.text(350, 350, 'Click to see the next image');

        audio1 = game.add.audio('audio1');
        game.sound.setDecodedCallback([ audio1 ], start, this);

    }

        text.setInteractive().on('pointerdown', () => {
            this.scene.start('gamePlay');
            console.log('hello!!');

    })}
    update(){

    }


}; 