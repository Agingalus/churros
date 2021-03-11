
class Clue1 extends Phaser.Scene {
    constructor() {
        super({ key: "clue1" });
    }
    preload() {

        this.load.image("skyBackground", "assets/sky.png");
        //this.load.audio("themeSong","assets/theme.wav")
    }
    create() {

        // this.sys.install('rexuiplugin')
        //Allows me to find the center for text
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        this.add.image(200, 200, "skyBackground").setScale(1);

        //TODO sound stuff
        //let themeSong = this.sound.add('themeSong');
        //let soundplay = this.add.text(700,10,"Sound").setInteractive().on('pointerdown',()=>{themeSong.play(); themeSong.mute = false;})
        //themeSong.play();
        //let soundMute = this.add.text(700,30,"Mute").setInteractive().on('pointerdown',()=>{themeSong.mute = true})

        //Styles for all the texts  
        let clueStyle = { font: "18px Arial", wordWrap: { width: 600, useAdvancedWrap: false } };

        let clueText = this.add.text(100, 50, "", clueStyle)
        clueText.text = "\t\t\tHow to make Churros: \n1. For the coating whisk together 1/2 cup sugar and cinnamon in a shallow dish, set aside. " +
            "\n2. Heat about 1 1/2 inches vegetable oil in a large pot or deep skillet over medium-high heat to 360 degrees Fahrenheit. While oil is heating prepare batter." +
            "\n3. Add water, butter, sugar and salt to a large saucepan, bring to a boil over medium-high heat." +
            "\n4. Add flour reduce heat to medium-low and cook and stir constantly with a rubber spatula until mixture comes together and is smooth (a few lumps in it are fine). " +
            "\n5. Transfer mixture to a large mixing bowl, let cool 5 minutes. " +
            "\n6. Add vanilla and egg to flour mixture then blend immediately with an electric mixer. Blend until mixture comes together and is smooth (it will separate at first but keep mixing it will come together). " +
            "\n7. Transfer to a 16-inch piping bag fitted with a rounded star tip (no bigger than 1/2-inch). I recommend using the Ateco 845 or 846. " +
            "\n8. Carefully pipe mixture into preheated oil, into about 6-inch lengths, cut end with clean scissors. " +
            "\n9. Let fry until golden brown, about 2 minutes per side. Transfer to paper towels to dry briefly then transfer to cinnamon sugar mixture and roll to coat. " +
            "\n10. Repeat process with remaining dough (frying no more than 5 at once). Serve warm with chocolate ganache or caramel sauce for dipping if desired. "

        //the pixels offset for the x value for all buttons
        let plusXforButton = 25;

        //all the buttons creations
        let graphics = this.add.graphics({ fillStyle: { color: buttonColorReg } });
        let ellipse = new Phaser.Geom.Ellipse(screenCenterX + plusXforButton, screenCenterY / 2 + 50, 150, 40);
        graphics.fillEllipseShape(ellipse, 100, 100, 100);

        let graphics1 = this.add.graphics({ fillStyle: { color: buttonColorReg } });
        let ellipse1 = new Phaser.Geom.Ellipse(screenCenterX + plusXforButton, screenCenterY / 2 + 100, 150, 40);
        graphics1.fillEllipseShape(ellipse1, 100, 100, 100);


        let graphics2 = this.add.graphics({ fillStyle: { color: buttonColorReg } });
        let ellipse2 = new Phaser.Geom.Ellipse(screenCenterX + plusXforButton, screenCenterY / 2 + 150, 150, 40);
        graphics2.fillEllipseShape(ellipse2, 100, 100, 100);

        let graphics3 = this.add.graphics({ fillStyle: { color: buttonColorReg } });
        let ellipse3 = new Phaser.Geom.Ellipse(screenCenterX + plusXforButton, screenCenterY / 2 + 200, 150, 40);
        graphics3.fillEllipseShape(ellipse3, 100, 100, 100);


        //creation for all the on click for the buttons
        let graphicArray = [graphics, graphics1, graphics2, graphics3];
        let ellipseArray = [ellipse, ellipse1, ellipse2, ellipse3];
        let buttonColorReg = "0xff0000";
        let buttonColorHover = "0x00ff00";

        for (let i = 0; i < graphicArray.length; i++) {
            this.input.on('pointermove', function (pointer) {

                graphicArray[i].clear();

                if (ellipseArray[i].contains(pointer.x, pointer.y)) {
                    graphicArray[i].fillStyle(buttonColorHover);
                }
                else {
                    graphicArray[i].fillStyle(buttonColorReg);
                }
                graphicArray[i].fillEllipseShape(ellipseArray[i]);
            });

        }

        //adds teh question text 
        let questionText = this.add.text(screenCenterX, screenCenterY / 2, "Which of the following ingredients is not part of making Churro? ", clueStyle);
        questionText.setOrigin(.5)
        questionText.visible = false;

        // add 4 answers the questions.
        let correctAnswer = "Nutmeg";
        let answer1 = this.add.text(screenCenterX, screenCenterY / 2 + 40, "Butter ", clueStyle);
        let answer2 = this.add.text(screenCenterX, screenCenterY / 2 + 90, "Vanilla", clueStyle);
        let answer3 = this.add.text(screenCenterX, screenCenterY / 2 + 140, "Nutmeg", clueStyle);
        let answer4 = this.add.text(screenCenterX, screenCenterY / 2 + 190, "Salt", clueStyle);

        //Combines all the text on buttons to group for changing visibility 
        let textGroup = this.add.group()
        textGroup.add(answer1);
        textGroup.add(answer2);
        textGroup.add(answer3);
        textGroup.add(answer4);
        textGroup.toggleVisible();

        //Combines all the buttons to group for changing visibility 
        let buttonGroup = this.add.group();
        buttonGroup.add(graphics);
        buttonGroup.add(graphics1);
        buttonGroup.add(graphics2);
        buttonGroup.add(graphics3);
        buttonGroup.toggleVisible();

        let goBack = this.add.text(300, 550, "Go back");
        goBack.visible = false;

        // On click to toggle visibility of all things between each page
        goBack.setInteractive().on('pointerdown', () => {
            clueText.visible = true;
            goToQuestion.visible = true;
            questionText.visible = false;
            textGroup.visible = true;
            textGroup.toggleVisible();
            goBack.visible = false;
            buttonGroup.toggleVisible();
        });

        //Button for got to question
        let goToQuestion = this.add.text(300, 550, "click on me");
        goToQuestion.setInteractive().on('pointerdown', () => {
            clueText.visible = false;
            goToQuestion.visible = false;
            questionText.visible = true;
            textGroup.visible = false;
            textGroup.toggleVisible();
            goBack.visible = true;
            buttonGroup.toggleVisible();
        });

        //Makes each answer clickable 
        let answerArray = [answer1, answer2, answer3, answer4];
        answerArray.forEach(element => {
            element.setInteractive().on('pointerdown', () => {
                console.log(checkAnswer(element.text, correctAnswer))
            })
        });
        //make each button clickable

        this.input.on('pointerdown', function (pointer) {
            if (!ellipse.contains(screenCenterX + plusXforButton, screenCenterY / 2 + 50)) {
                console.log("im in trouble")
                console.log(ellipse.contains(screenCenterX + plusXforButton, screenCenterY / 2 + 50));
            }
        })
        for (let i = 0; i < graphicArray.length; i++) {
            graphicArray[i].setInteractive(ellipseArray[i], Phaser.Geom.Ellipse.Contains);
            graphicArray[i].on('pointerdown', () => { console.log(checkAnswer(answerArray[i].text, correctAnswer)) });
        }
    }
    update() {

    }

}
function checkAnswer(choice, correct) {

    if (choice === correct) {
        console.log("CORRECT!!!!")
        return true;

    }
    console.log(choice + " is not " + correct)
    return false;

}

