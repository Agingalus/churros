class GamePlay extends Phaser.Scene {

    constructor() {
        super({ key: "GamePlay" });

    }
    preload(){
        this.load.image("sugerField", "assets/sugerFields.jpg");
    }

    create(){
        var suggerFile = this.add.image(0,0,"sugerField");
        suggerFile.setScale(2);

        var text = this.add.text(80, 550, '', { font: '16px Courier', fill: 'black' });
        text.setText([
            'Game Title: ' + game.config.gameTitle
        ]);
    }
    update(){

    }


}; 