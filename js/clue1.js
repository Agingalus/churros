
class Clue1 extends Phaser.Scene {
    constructor() {
        super({ key: "clue1" });


    }
    preload(){
      
        this.load.image("skyBackground", "assets/sky.png");

    }
    create(){

        let buttonColorReg = "0xff0000";
        let buttonColorHover = "0x00ff00";
       // this.sys.install('rexuiplugin')
        //Allows me to find the center for text
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        this.add.image(200,200,"skyBackground" ).setScale(1);
 
        //Styles for all the texts
        let clueStyle = {font: "18px Arial", wordWrap: { width: 600, useAdvancedWrap: false }};
        


       let clueText =this.add.text( 100,50,"",clueStyle)
        clueText.text ="\t\t\tHow to make Churros: \n1. For the coating whisk together 1/2 cup sugar and cinnamon in a shallow dish, set aside. " +
        "\n2. Heat about 1 1/2 inches vegetable oil in a large pot or deep skillet over medium-high heat to 360 degrees Fahrenheit. While oil is heating prepare batter."+ 
        "\n3. Add water, butter, sugar and salt to a large saucepan, bring to a boil over medium-high heat."+
        "\n4. Add flour reduce heat to medium-low and cook and stir constantly with a rubber spatula until mixture comes together and is smooth (a few lumps in it are fine). "+
        "\n5. Transfer mixture to a large mixing bowl, let cool 5 minutes. "+
        "\n6. Add vanilla and egg to flour mixture then blend immediately with an electric mixer. Blend until mixture comes together and is smooth (it will separate at first but keep mixing it will come together). "+
        "\n7. Transfer to a 16-inch piping bag fitted with a rounded star tip (no bigger than 1/2-inch). I recommend using the Ateco 845 or 846. "+
        "\n8. Carefully pipe mixture into preheated oil, into about 6-inch lengths, cut end with clean scissors. "+
        "\n9. Let fry until golden brown, about 2 minutes per side. Transfer to paper towels to dry briefly then transfer to cinnamon sugar mixture and roll to coat. "+
        "\n10. Repeat process with remaining dough (frying no more than 5 at once). Serve warm with chocolate ganache or caramel sauce for dipping if desired. "


        let plusXforButton = 25;

        var graphics = this.add.graphics({ fillStyle: { color: buttonColorReg } });
        var ellipse = new Phaser.Geom.Ellipse(screenCenterX+plusXforButton ,screenCenterY/2 +50, 150 ,40);

        graphics.fillEllipseShape(ellipse,100, 100,100);

    
        this.input.on('pointermove', function (pointer) {
    
           graphics.clear();
    
            if(ellipse.contains(pointer.x, pointer.y))
            {
                graphics.fillStyle(buttonColorHover);
            }
            else
            {
                graphics.fillStyle(buttonColorReg);
            }
    
            graphics.fillEllipseShape(ellipse);
    
        });


        var graphics1 = this.add.graphics({ fillStyle: { color: buttonColorReg } });
        var ellipse1 =  new Phaser.Geom.Ellipse(screenCenterX+plusXforButton ,screenCenterY/2 +100, 150 ,40);
        graphics1.fillEllipseShape(ellipse1,100, 100,100);
    
        this.input.on('pointermove', function (pointer) {
    
            graphics1.clear();
     
             if(ellipse1.contains(pointer.x, pointer.y))
             {
                 graphics1.fillStyle(buttonColorHover);
             }
             else
             {
                 graphics1.fillStyle(buttonColorReg);
             }
     
             graphics1.fillEllipseShape(ellipse1);
     
         });

         var graphics2 = this.add.graphics({ fillStyle: { color: buttonColorReg } });
         var ellipse2 =  new Phaser.Geom.Ellipse(screenCenterX+plusXforButton ,screenCenterY/2 +150, 150 ,40);
         graphics2.fillEllipseShape(ellipse2,100, 100,100);
     
         this.input.on('pointermove', function (pointer) {
     
             graphics2.clear();
      
              if(ellipse2.contains(pointer.x, pointer.y))
              {
                  graphics2.fillStyle(buttonColorHover);
              }
              else
              {
                  graphics2.fillStyle(buttonColorReg);
              }
      
              graphics2.fillEllipseShape(ellipse2);
      
          });

          var graphics3 = this.add.graphics({ fillStyle: { color: buttonColorReg } });
          var ellipse3 =  new Phaser.Geom.Ellipse(screenCenterX+plusXforButton ,screenCenterY/2 +200, 150 ,40);
          graphics3.fillEllipseShape(ellipse3,100, 100,100);
      
          this.input.on('pointermove', function (pointer) {
      
              graphics3.clear();
       
               if(ellipse3.contains(pointer.x, pointer.y))
               {
                   graphics3.fillStyle(buttonColorHover);
               }
               else
               {
                   graphics3.fillStyle(buttonColorReg);
               }
       
               graphics3.fillEllipseShape(ellipse3);
            
       
           });

        let questionText = this.add.text(screenCenterX ,screenCenterY/2, "Which of the following ingredients is not part of making Churro? ",clueStyle);
        questionText.setOrigin(.5)
        questionText.visible = false;

        let correctAnswer = "Garlic";
        let answer1 = this.add.text(screenCenterX ,screenCenterY/2 +40, "Butter ",clueStyle);
        let answer2 = this.add.text(screenCenterX ,screenCenterY/2 +90 ,"Vanilla",clueStyle);
        let answer3 = this.add.text(screenCenterX ,screenCenterY/2 +140, "Garlic",clueStyle);
        let answer4 = this.add.text(screenCenterX ,screenCenterY/2 +190, "Salt",clueStyle);
 
      
        let textGroup = this.add.group( )
        textGroup.add(answer1);
        textGroup.add(answer2);
        textGroup.add(answer3);
        textGroup.add(answer4);
        textGroup.toggleVisible();

        let buttonGroup = this.add.group();
        buttonGroup.add(graphics);
        buttonGroup.add(graphics1);
        buttonGroup.add(graphics2);
        buttonGroup.add(graphics3);
        buttonGroup.toggleVisible();


        let goBack = this.add.text( 300,550,"Go back");
        goBack.visible = false;
        goBack.setInteractive().on('pointerdown', () => {
            clueText.visible = true;
            goToQuestion.visible = true;
            questionText.visible = false;
            textGroup.visible= true;
            textGroup.toggleVisible();
            goBack.visible = false;
            buttonGroup.toggleVisible();
            

            
        });
        //Button for got to question
        let goToQuestion = this.add.text( 300,550,"click on me");
        goToQuestion.setInteractive().on('pointerdown', () => {
            clueText.visible = false;
            goToQuestion.visible = false;
            questionText.visible = true;
            textGroup.visible= false;
            textGroup.toggleVisible();
            goBack.visible = true;
            buttonGroup.toggleVisible();
            
        });
        //Makes each answer clickable 
        let answerArray = [ answer1, answer2, answer3, answer4 ];
        answerArray.forEach(element => {
            element.setInteractive().on('pointerdown',()=>{
            console.log(checkAnswer(element.text, correctAnswer))
         })
        });
        //make each button clickable
       let buttonArray= [graphics, graphics1,graphics2,graphics3]
       let ellipseArray =[ellipse,ellipse1,ellipse2,ellipse3]

        this.input.on('pointerdown', function (pointer){
        if(!ellipse.contains(screenCenterX+plusXforButton ,screenCenterY/2 +50))
        {
            console.log("im in trouble")
            console.log(ellipse.contains(screenCenterX+plusXforButton ,screenCenterY/2 +50));
        }})
        for (let i = 0; i < buttonArray.length; i++) {
            
            buttonArray[i].setInteractive(ellipseArray[i],Phaser.Geom.Ellipse.Contains);
            buttonArray[i].on('pointerdown',()=>{console.log(checkAnswer(answerArray[i].text, correctAnswer))});
        }

        // graphics.setInteractive(ellipse, Phaser.Geom.Ellipse.Contains)
        // graphics.on('pointerdown',()=>{console.log("42")})
    }
    update(){
        
    }

}
function checkAnswer (choice,correct) {

   if (choice === correct) {
    console.log( "CORRECT!!!!")   
    return true;

   }
   console.log(choice + " is not " +correct )   
   return false;

}

