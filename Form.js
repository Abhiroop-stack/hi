class Form {
    constructor() {
      this.input = createInput("").attribute("placeholder", "Enter your name");
      this.playButton = createButton("Play");    
      this.greeting = createElement("h2");
      this.settings = createImg("./assets/SettingsImg .jpeg", "game title");
      
      //if settings is pressed
      sound="Sound:on"
      this.soundButton = createButton(sound);
    }
    
    setElementPosition(){
      this.input.position(width/2-100,height/2-80)
      this.playButton.position(width/2-80,height/2-20)
      this.greeting.position(width/2-200,height/2-180) 
      this.settings.position(width/2+795,height/2-480) 
    
   }
  
    setElementStyle(){
      this.input.class("customInput")
      this.playButton.class("customButton")
      this.greeting.class("greeting")
      this.settings.class("settingsIcon")
      
    }
  
    hide() {
      this.greeting.hide();
      this.playButton.hide();
      this.input.hide();
      this.settings.hide();
      topic.imageButton.hide();
      topic.mcqButton.hide();
      topic.typeButton.hide();
      topic.jumbledButton.hide();
      topic.choose.hide();
      topic.difficultyLvl.hide();
      game.playButton.hide();
      game.multiplayerButton.hide();
      game.fanButton.hide();
      game.greeting.hide();
    }
  
    handleMousePressed(){
        this.playButton.mousePressed(()=>{
        this.playButton.hide()
        this.input.hide()
        var message = `👇 😊Hi ${form.input.value()}
        😊 👇`
        this.greeting.html(message)  
        
        playerCount += 1
        player.name = this.input.value();
        player.index = playerCount;
        player.update()
        player.updateCount(1);
        player.updateNameState(1)
        game.select()
       });
       
       
     /*  this.settings.mousePressed(()=>{
        this.playButton.hide()
        this.input.hide();
        game.playButton.hide();
        game.multiplayerButton.hide();
        game.fanButton.hide();
        game.greeting.hide();
        this.soundButton.position(width/2-80,height/2-20) 
        this.soundButton.class("customButton")

       
       });
       if(sound="Music.on"){
        this.soundButton.mousePressed(()=>{
          var message = `👇 😊Hi ${form.input.value()}
          😊 👇`
          this.greeting.html(message)  
        });
      }*/
    }
  
    display(){
      this.setElementPosition()
      this.setElementStyle()
      this.handleMousePressed()
    }
  
  }
  
  