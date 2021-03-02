class EndGame extends Phaser.Scene {

    constructor() {
        super({ key: "EndGame" });

    }
    preload(){
        this.load.image("cinnamon", "assets/cinnamon.jfif")
        this.load.image("clickme", "assets/buttonclick.png")
    }

    create(){
        this.add.image(50,50,"cinnamon")
        var button = this.add.image(200,100,"clickme").setInteractive();
        button.on('pointerdown', function(pointer){
            //replace line 18 with an updated line 17
            //this.Scene.launch('sceneName');
            alert("You Win");
        });
        button.on('pointerout', function (pointer) {

       });
    }
    update(){

    }


}; 