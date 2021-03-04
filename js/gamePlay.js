class GamePlay extends Phaser.Scene {

    constructor() {
        super({ key: "gamePlay" });

    }
    preload(){
<<<<<<< HEAD
        this.load.image("sugerField", "assets/sugerFields.jpg");
      

=======
        this.load.image("sugarField", "assets/sugarFields.jpg")
        this.load.image("clickme", "assets/buttonclick.png")
        this.scene.get('EndGame')
>>>>>>> sprint1ES
    }

    
    create(){
<<<<<<< HEAD
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

        this.add.image(50,50,"sugerField");
       // platforms = this.physics.add.staticGroup();
        //this.add.image(50,50,"grass");
       // platforms.create(400, 568, 'grass').setScale(2).refreshBody();
=======
        this.add.image(50,50,"sugarField")
        var button = this.add.image(200,100,"clickme").setInteractive();
        button.on('pointerdown', function(pointer){
            //replace line 18 with an updated line 17
            this.scene.scene.start('EndGame');
            //alert("Clicked to next page");
        });
        button.on('pointerout', function (pointer) {

       });
>>>>>>> sprint1ES
    }
    update(){

    }

}; 