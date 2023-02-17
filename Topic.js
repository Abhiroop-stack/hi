class Topic {
    constructor(){
    this.imageButton = createButton("Guess with Image📷");
    this.mcqButton = createButton("Multiple Choice Questions✔️");
    this.typeButton = createButton("Type the answser⌨");
    this.jumbledButton = createButton("Jumpled Names↩️");  
    this.choose = createElement("h3")
    this.difficultyLvl = createElement("h4")
    }

    setElementPosition(){
      this.imageButton.position(width/2+450,height/2-200)
      this.mcqButton.position(width/2+100,height/2-200)
      this.typeButton.position(width/2-250,height/2-200)
      this.jumbledButton.position(width/2-550,height/2-200)
      this.choose.position(width/2-120,height/2-350)
    }
  
    setElementStyle(){
      this.imageButton.class("gameButton")
      this.mcqButton.class("gameButton")
      this.typeButton.class("gameButton")
      this.jumbledButton.class("gameButton")
      this.choose.class("greeting")
      var message =   `Select the game`
      this.choose.html(message)
    }

    start() {
        this.setElementPosition()
        this.setElementStyle()
        this.handleMousePressed()
      }

      hide(){
        this.imageButton.hide()
        this.mcqButton.hide()
        this.typeButton.hide()
        this.jumbledButton.hide()
        this.choose.hide()
      }
     
      handleMousePressed(){
        this.jumbledButton.mousePressed(()=>{
          this.imageButton.hide()
          this.mcqButton.hide()
          this.typeButton.hide()
          this.jumbledButton.hide()
          this.choose.hide()
          jumbled.details()
        })
        this.mcqButton.mousePressed(()=>{
          this.imageButton.hide()
          this.mcqButton.hide()
          this.typeButton.hide()
          this.jumbledButton.hide()
          this.choose.hide()
          mcq.details()
          
     })
   }
}