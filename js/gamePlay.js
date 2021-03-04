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

/**  sprint1AL
        var button = this.add.image(50,50,"sugerField").setInteractive()
        this.gameOverText = this.add.text(400,300,'Game Over', {fontSize: '64px', fill: '#FFF'}).setInteractive()
        this.gameOverText.setOrigin(0.5)
        this.gameOverText.visible = false
        button.on('pointerdown', () => {
            if (!this.gameOverText.visible)
                this.cameras.main.flash(2500);
            this.gameOverText.visible = !this.gameOverText.visible
            this.tweens.add({
                targets: this.gameOverText,
                alpha: {
                    getStart: () => 0,
                    getEnd: () => 1
                },
                duration: 2000,
                ease: 'Power2'
              }, this);
        });
        */

    }
    update(){

    }

}; 