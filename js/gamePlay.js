class GamePlay extends Phaser.Scene {

    constructor() {
        super({ key: "GamePlay" });

    }
    preload(){
        this.load.image("sugerField", "assets/sugerFields.jpg")
    }

    create(){
        this.add.image(50,50,"sugerField")
    }
    update(){

    }


}; 