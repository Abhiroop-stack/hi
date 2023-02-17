class JumbledGame {
    constructor(){     
      var letters = 0;

      this.questionNumber1 = createElement("h2");
      this.box1 = createButton("T")
      this.box2 = createButton("A")
      this.box3 = createButton("I")
      this.box4 = createButton("N")
      this.box5 = createButton("B")
      this.box6 = createButton("A")
      this.box7 = createButton("S")
      this.box8 = createButton("E")
      this.box9 = createButton("S")

      this.box10 = createButton("T")
      this.box11 = createButton("E")
      this.box12 = createButton("L")
      this.box13 = createButton("V")
      this.box14 = createButton("E")
      this.box15 = createButton("T")
      
    }

    setElementPosition(){
      this.questionNumber1.position(width/4,height/2-270)
      this.box1.position(width/4+50,height/2+200)
      this.box2.position(width/4+100,height/2+200)
      this.box3.position(width/4+150,height/2+200)
      this.box4.position(width/4+200,height/2+200)
      this.box5.position(width/4+250,height/2+200)
      this.box6.position(width/4+300,height/2+200)
      this.box7.position(width/4+350,height/2+200)
      this.box8.position(width/4+400,height/2+200)
      this.box9.position(width/4+450,height/2+200)

      this.box10.position(width/4+550,height/2+200)
      this.box11.position(width/4+600,height/2+200)
      this.box12.position(width/4+650,height/2+200)
      this.box13.position(width/4+700,height/2+200)
      this.box14.position(width/4+750,height/2+200)
      this.box15.position(width/4+800,height/2+200)
    }
  
    setElementStyle(){
      this.questionNumber1.class("heading2")
      this.box1.class("box")
      this.box2.class("box")
      this.box3.class("box")
      this.box4.class("box")
      this.box5.class("box")
      this.box6.class("box")
      this.box7.class("box")
      this.box8.class("box")
      this.box9.class("box")
      this.box10.class("box")
      this.box11.class("box")
      this.box12.class("box")
      this.box13.class("box")
      this.box14.class("box")
      this.box15.class("box")
    }

    start() {

        var headding = `Question No. I`
        this.questionNumber1.html(headding)

        this.setElementPosition()
        this.setElementStyle()
        this.handleMousePressed()
      }

      hide(){
     
      }
     
      handleMousePressed(){
        if(letters=1){
        this.box1.mousePressed(()=>{
          game.updateLetters(0)
          
             this.box1.position(width/4+50,height/2)
             
             console.log(letters)
        });
      }
   }
}