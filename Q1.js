class Q1{
constructor(){
    //this.q1Text = createElement("h4")
    this.q1= createElement("h4")
    this.box1 = createButton("Lewis Hamilton")
    this.box2 = createButton("Nico Rosberg")
    this.box3 = createButton("Kimi Räikkönen")
    this.box4 = createButton("Nico Hülkenberg")
    this.next=createButton("Next")
}
      


    setElementPosition(){
      //this.q1Text.position(width/4,height/2-170)
      this.q1.position(width/2-600,height/2-200)
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

        var question = `1) Who among the following has not become a world champion`
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
        this.box4.mousePressed(()=>{
          this.q1.position(width/2-300,height/2+200)
           this.box4.class("crct1")
           this.box1.hide();
           this.box2.hide();
           this.box3.hide();
           var crct = `You got FI knowledge👌!!!!!`
           this.q1.html(crct)
           this.q1.position(width/2-250,height/2+200)
           this.box4.position(width/2-300,height/2-200)    
           this.next.position(width/2+400,height/2+200)
         });
         this.box1.mousePressed(()=>{
          this.q1.position(width/2-300,height/2+200)
           this.box4.class("crct")
           this.box1.position(width/2,height/2-200)
           this.box1.class("wrong")
           this.box2.hide();
           this.box3.hide();
           this.q1.hide();
           this.box4.position(width/2-300,height/2-200)    
          this.next.position(width/2+400,height/2+200)
         });
         this.box2.mousePressed(()=>{
          this.q1.position(width/2-300,height/2+200)
           this.box4.class("crct")
           this.box2.position(width/2,height/2-200)
           this.box2.class("wrong")
           this.box1.hide();
           this.box3.hide();
           this.q1.hide();
           this.box4.position(width/2-300,height/2-200)    
          this.next.position(width/2+400,height/2+200)
         });
         this.box3.mousePressed(()=>{
          this.q1.position(width/2-300,height/2+200)
           this.box4.class("crct")
           this.box3.position(width/2,height/2-200)
           this.box1.class("wrong")
           this.box2.hide();
           this.box3.hide();
           this.q1.hide();
           this.box4.position(width/2-300,height/2-200)    
          this.next.position(width/2+400,height/2+200)
         });
         this.next.mousePressed(()=>{
            q2.start();
            this.q1.hide()
            this.box1.hide()
            this.box2.hide()
            this.box3.hide()
            this.box4.hide()
            this.next.hide()
         });
   }
}