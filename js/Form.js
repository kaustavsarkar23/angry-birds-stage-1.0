class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement("h2");
  }
  //new function called hide is used to hide the objects
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }
  //display function used
  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2-50, 0);

    //position is given in input and button
    this.input.position(displayWidth/2-40, displayHeight/2-80);
    this.button.position(displayWidth/2+30, displayHeight/2);

    //function mouse pressed is used for button
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      //player name is used here
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      //player is being updated
      player.update();
      player.updateCount(playerCount);
      //greetings has been displayed
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2-70, displayHeight/2);
    });

  }
}
