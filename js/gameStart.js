class GameStart extends Phaser.Scene {

    constructor() {
        super({ key: "GameStart" });

    }
    preload(){
        this.load.image("sugerField", "assets/sugerFields.jpg")
    }

    create(){
        this.add.image(50,50,"sugerField")
    }
    update(){
        let thisShouldFail = true;

    }


}; 