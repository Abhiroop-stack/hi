class Player {
  constructor() {
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;

  }

  getCount(){
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount : count 
    });
  }

  getName(){
    var playerNameRef = database.ref("nameState");
    playerNameRef.on("value",(data)=>{
      playerNameState = data.val();
    })
  }

  updateNameState(nameState){
    database.ref('/').update({
      playerNameState : nameState 
    });
  }

   update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
}
