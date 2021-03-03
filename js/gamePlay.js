class GamePlay extends Phaser.Scene {

    constructor() {
        super({ key: "GamePlay" });

    }
    preload(){
        this.load.image("sugerField", "assets/sugerFields.jpg");
      

    }

    

    create(){
        this.add.image(50,50,"sugerField");
       // platforms = this.physics.add.staticGroup();
        //this.add.image(50,50,"grass");
       // platforms.create(400, 568, 'grass').setScale(2).refreshBody();
    }
    update(){

    }


}; 