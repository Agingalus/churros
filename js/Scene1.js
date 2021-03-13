class Scene1 extends Phaser.Scene {

    constructor() {
        super({ key: "Scene1" });

    }
    preload(){
      
        this.load.image("grass", "assets/grass.jpg");
        this.load.image("road", "assets/road.png");
        this.load.audio("audio1", "audio/Recording.mp3");

    }
    create(){
        
        //this.add.image(50,50,"sugerField");
        platforms = this.physics.add.staticGroup();
        //this.add.image(50,50,"grass");
        platforms.create(400, 568, 'grass').setScale(2).refreshBody();
        platforms.create(500, 568, 'road').setScale(2).refreshBody();
        const text = this.add.text(350, 350, 'Welcome to ...');

        let sound = this.sound.add('audio1')

        text.setInteractive().on('pointerdown', () => {
            
            this.scene.start('gamePlay');
            console.log('hello!!');
           // let audio1 = Scene1.audio1.add('audio1');
            sound.play();
           // audio1 = game.add.audio('audio1');
           
          //  game.audio1.setDecodedCallback([ audio1 ], start, this);
        //    game.sound.setDecodedCallback([ audio1 ], start, this);
    }
    )}

     start() {

        text.text = 'Press 1';
    
        var style = { font: "48px Arial", fill: "#cdba52", align: "center" };
    
        text1 = game.add.text(game.world.centerX, 245, "Audio1: Stopped", style);
        text1.anchor.set(0.5);
    
    
        
    
    }
    
    
    
    
    


    update(){

    }


}; 