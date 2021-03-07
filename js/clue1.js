class Clue1 extends Phaser.Scene {

    constructor() {
        super({ key: "clue1" });

    }
    preload(){
      
        this.load.image("skyBackground", "assets/sky.png");
        this.load.text("clue1Text", "text/clue1.txt");

    }
    create(){
        this.add.image(200,200,"skyBackground" ).setScale(1);

        let clue1Text = (this.cache.text.get("clue1Text"));
        let stringText = new String(clue1Text);
        stringText =clue1Text.split('\n');
        let clueStyle = {wordWrap: { width: 600, useAdvancedWrap: true }};

        let clueText = this.add.text(100,100,stringText[0], clueStyle);
        this.add.text(100,270,stringText[1],clueStyle);


    }
    update(){
        
    }

    
}