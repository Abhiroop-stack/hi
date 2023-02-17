class Intro{
    constructor() {
     this.jumbledPhoto =  createElement("h2");
      this.text = createElement("h2");
      this.instructions = createElement("h6");
      this.nextButton = createButton("Play")
    }
    
    setElementPosition(){
      this.jumbledPhoto.position(width/5,height/2-600) 
      this.text.position(width/2-400,height/2-180) 
      this.instructions.position(width/4,height/2-130) 
      this.nextButton.position(width/2+400,height/2+400)
   }
  
    setElementStyle(){
      this.text.class("heading2")
      this.jumbledPhoto.class("heading1")
      this.instructions.class("greeting")
      this.nextButton.class("customButton")
    }
  
    hide() {
      this.text.hide()
      this.jumbledPhoto.hide()
      this.instructions.hide()
      this.nextButton.hide()
    }
  
    handleMousePressed(){
        var message = `Rules`
        this.text.html(message)
        var instructions = `*You have selected the game jumbled names!!!*
        </br>*A list of drivers with their names jumbled will be given.*
        </br>*You have to solve the puzzle by recognizing the correct 
        </br>name of the driver and choosing the correct letters*
        </br>*I hope you enjoy the game....*`
        this.instructions.html(instructions)   
        var jumbled = `JMUBLED NMAES`
        this.jumbledPhoto.html(jumbled)  

        this.nextButton.mousePressed(()=>{
           jumbledGame.start();
           this.text.hide();
           this.instructions.hide();
          this.nextButton.hide();
        })
    }
  
    display(){
      this.setElementPosition()
      this.setElementStyle()
      this.handleMousePressed()
    }
  
  }
  
  