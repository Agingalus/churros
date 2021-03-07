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

        text.setInteractive().on('pointerdown', () => {
            this.scene.scene.start('gamePlay');
            console.log('hello!!');
            audio1 = game.add.audio('audio1');
            game.sound.setDecodedCallback([ audio1 ], start, this);
    })}

     start() {

        text.text = 'Press 1';
    
        var style = { font: "48px Arial", fill: "#cdba52", align: "center" };
    
        text1 = game.add.text(game.world.centerX, 245, "Audio1: Stopped", style);
        text1.anchor.set(0.5);
    
    
        
        
    
        keys = game.input.keyboard.addKeys({ audio1: Phaser.Keyboard.ONE });
    
        keys.audio1.onDown.add(play1, this);
        
    
        
        game.input.onDown.add(onT, this);
    
    }
     onT(pointer) {

        var g = game.height;
    
       
            play1(keys.audio1);
        
    
    }
    
     play1(key) {
    
        switch (key.keyCode)
        {
            case Phaser.Keyboard.ONE:
                text1.text = "audio1: Playing";
                audio1.play();
                break;
    
            
        }
    
    }
    
    
    


    update(){

    }


}; 