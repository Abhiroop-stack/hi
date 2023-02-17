class Jumbled {
    constructor() {
     // this.playButton = createImg("../assets/jumbled.png");
      this.lvl1 = createButton("Level 1");
      this.fanButton = createButton("Fan Votes");
      this.greeting = createElement("h2");
    }
    
    
    setElementPosition(){
    //  this.playButton.position(width/22,height/2-300)
      this.lvl1.position(width/2+150,height/2-40)
      this.fanButton.position(width/2-80,height/2+90)  
      this.greeting.position(width/2-80,height/2-260)
    }

    setClass(){      
   //   this.playButton.class("gameTitle")     
      this.lvl1.class("customLvlButton")    
      this.fanButton.class("customButton")  
      this.greeting.class("greeting")
    
    }
    
    details(){
      this.setElementPosition()
      this.setClass()
      this.handleMousePressed();
    }

    hide() {
       this.lvl1.hide()
       this.fanButton.hide()
    }
    handleMousePressed(){
      this.lvl1.mousePressed(()=>{
       this.lvl1.hide()
       this.fanButton.hide()   
       intro.display();
      });
   }
  }
 