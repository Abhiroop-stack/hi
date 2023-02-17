class Game {
  constructor() {
    this.playButton = createButton("Career");
    this.multiplayerButton = createButton("Multiplayer");
    this.fanButton = createButton("Fan Votes");
    this.greeting = createElement("h2");
    
  }
  

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  getLetters() {
    var gameStateRef = letters;
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  updateLetters(letters) {
      gameState: letters;
  }

  start() {
    form = new Form();
    form.display();
    player = new Player();
  }
  
  select(){
    this.playButton.position(width/2-280,height/2-40)
    this.playButton.class("customButton")
    this.multiplayerButton.position(width/2+150,height/2-40)
    this.multiplayerButton.class("customButton")
    this.fanButton.position(width/2-80,height/2+90)
    this.fanButton.class("customButton")
    
    this.handleMousePressed();
  }

  handleMousePressed(){
    this.playButton.mousePressed(()=>{
     this.playButton.hide()
     this.multiplayerButton.hide()
     this.fanButton.hide()
     form.greeting.hide();
     topic.start()
     
    });
 }
}
