var canvas;
var backgroundImage,settingsImage, settings;
var bgImg;
var database;
var form, player, game, select, jumbled, intro, jumbledGame;
var playerCount,gameState;
var gameState = 0;
var letters = 0;
var sound = 10000;
function preload() {
  backgroundImage = loadImage("./assets/background.jpeg");
  
 
}

function setup() {
  
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  start = new Start();
  game = new Game();
  topic = new Topic();
  jumbled = new Jumbled()
  intro = new Intro()
  jumbledGame = new JumbledGame()
  mcq = new MCQ()
  intro2 = new Intro2()
  q1 = new Q1();
  q2 = new Q2();
  game.start()
  
 
}

function draw() {
  background(backgroundImage);

 

  if(playerCount === 1){
    game.select()
  }
  console.log(letters)
 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}


