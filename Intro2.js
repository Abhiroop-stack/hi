class Intro2{
    constructor() {
     this.mcqPhoto =  createElement("h2");
      this.text = createElement("h2");
      this.instructions = createElement("h6");
      this.nextButton = createButton("Play")
    }
    
    setElementPosition(){
      this.mcqPhoto.position(width/2-170,height/2-600) 
      this.text.position(width/2-400,height/2-180) 
      this.instructions.position(width/4,height/2-130) 
      this.nextButton.position(width/2+400,height/2+400)
   }
  
    setElementStyle(){
      this.text.class("heading2")
      this.mcqPhoto.class("heading1")
      this.instructions.class("greeting")
      this.nextButton.class("customButton")
    }
  
    hide() {
      this.text.hide()
      this.mcqPhoto.hide()
      this.instructions.hide()
      this.nextButton.hide()
    }
  
    handleMousePressed(){
        var message = `Rules`
        this.text.html(message)
        var instructions = `*You have selected MCQ's!!!*
        </br>*A question along with 4 options will be given.*
        </br>*You have to click on the correct option to get the right answer *
        </br>*I hope you enjoy the game....*`
        this.instructions.html(instructions)   
        var mcq = `MCQ`
        this.mcqPhoto.html(mcq)  

        this.nextButton.mousePressed(()=>{
           q1.start();
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
  
  