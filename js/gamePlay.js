class GamePlay extends Phaser.Scene {

    constructor() {
        super({ key: "gamePlay" });

    }
    preload(){
        console.log("in gamePlay.js");
        this.load.image("sugarField", "assets/sugarFields.jpg")
        this.load.image("clickme", "assets/buttonclick.png")
        //this.scene.get('EndGame')
    }

    
    create(){
        console.log("in gamePlay.js");
        this.add.image(50,50,"sugarField")
        var button = this.add.image(200,100,"clickme").setInteractive();
        button.on('pointerdown', function(pointer){
            //replace line 18 with an updated line 17
            this.scene.scene.start('EndGame');
            //alert("Clicked to next page");
        });
    //     button.on('pointerout', function (pointer) {

    //    });
    }
    update(){

    }

}; 