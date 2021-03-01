class GamePlay extends Phaser.Scene {

    constructor() {
        super({ key: "GamePlay" });

    }
    preload(){
        this.load.image("sugerField", "assets/sugerFields.jpg");
        this.load.image("grass", "assets/grass.jpg")

    }

    create(){
        this.add.image(50,50,"sugerField");
        this.add.image(50,50,"grass")
    }
    update(){

    }


}; 