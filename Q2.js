class Q2 {
    constructor(){
        //this.q1Text = createElement("h4")
        this.q1= createElement("h4")
        this.box1 = createButton("Ferrari")
        this.box2 = createButton("Mcclaren")
        this.box3 = createButton("Mercedes")
        this.box4 = createButton("Red Bull")
        this.next=createButton("Next")
    }
          
    
    
        setElementPosition(){
          //this.q1Text.position(width/4,height/2-170)
          this.q1.position(width/2-350,height/2-200)
          this.box1.position(width/2-300,height/1-550)
          this.box2.position(width/2,height/1-450)
          this.box3.position(width/2,height/1-550)
          this.box4.position(width/2-300,height/1-450)
        }
      
        setElementStyle(){
        //  this.q1Text.class("heading2")
          this.q1.class("heading3")
          this.box1.class("customButton")
          this.box2.class("customButton")
          this.box3.class("customButton")
          this.box4.class("customButton")
          this.next.class("customButton")
        }
    
        start() {
    
          //  var headding = `Question No. I`
            //this.q1Text.html(headding)
    
            var question = `1)Most succesful team in Formula 1`
            this.q1.html(question)
            
            
    
            this.setElementPosition()
            this.setElementStyle()
            this.handleMousePressed()
          }
    
          hide(){
            this.box1.hide();
            this.box2.hide();
            this.box3.hide();
           
          }
         
          handleMousePressed(){
            this.box1.mousePressed(()=>{
              this.q1.hide();
               this.box4.hide()
               this.box1.class("crct1")
               this.box2.hide();
               this.box3.hide();
             /*  var crct = `You got FI knowledge👌!!!!!`
               this.q1.html(crct)*/
               this.box1.position(width/2-300,height/2-200)    
               this.next.position(width/2+400,height/2+200)
             });
             this.box4.mousePressed(()=>{
              this.q1.position(width/2-300,height/2+200)
               this.box4.class("wrong")
               this.box1.position(width/2,height/2-200)
               this.box1.class("crct")
               this.box2.hide();
               this.box3.hide();
               this.q1.hide();
               this.box4.position(width/2-300,height/2-200)    
              this.next.position(width/2+400,height/2+200)
             });
             this.box2.mousePressed(()=>{
              this.q1.position(width/2-300,height/2+200)
               this.box1.class("crct")
               this.box2.position(width/2,height/2-200)
               this.box2.class("wrong")
               this.box4.hide();
               this.box3.hide();
               this.q1.hide();
               this.box1.position(width/2-300,height/2-200)    
              this.next.position(width/2+400,height/2+200)
             });
             this.box3.mousePressed(()=>{
              this.q1.position(width/2-300,height/2+200)
               this.box3.class("wrong")
               this.box3.position(width/2,height/2-200)
               this.box1.class("crct")
               this.box2.hide();
               this.box4.hide();
               this.q1.hide();
               this.box1.position(width/2-300,height/2-200)    
              this.next.position(width/2+400,height/2+200)
             });
       }
    }