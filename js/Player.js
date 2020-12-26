class Player {
  //constructor has been created
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }
//function getCount used
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }
//function updateCount used
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
//function update used
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
//function getPlayerInfo is used
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
