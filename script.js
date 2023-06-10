/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/*
 * instellingen om foutcontrole van je code beter te maken 
 */
///<reference path="p5.global-mode.d.ts" />
"use strict"

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
const KEY_SPACE = 32;
var aantal = 0;

const SPELEN = 1;
const GAMEOVER = 2;
const UITLEG = 8;
var spelStatus = UITLEG;

const KEY_LEFT = 37;
const KEY_RIGHT = 39;
const KEY_UP = 38;
const KEY_DOWN = 40;

var vloerY = 100;

var spelerX = 100; // x-positie van speler
var spelerY = 410; // y-positie van speler
var spelerY = vloerY;

var vijandX = 350; // x-positie van vijand
var vijandY = 410; // y-positie van vijand
var vijand2X = 800; // x-positie van vijand2
var vijand2Y = 190; // y-positie van vijand2
var muntX = 600; // x-positie van munt
var muntY = 190; // y-positie van munt
var wolkX = 600; // x-positie van wolk
var wolkY = 100; // y-positie van wolk

var score = 0; // aantal punten

var spelerSpringt = false;
var springSnelheid = 0;
var springSnelheidStart = 5;
var zwaartekracht = 0.4;

var img; //plaatje
var imgbird; //plaatje
var imgachter; //plaatje
var imgmunt; //plaatje
var imgwolk; //plaatje

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function() {
  // speler
  if (keyIsDown(KEY_RIGHT)) {
    spelerX = spelerX + 2;
  }
  if (keyIsDown(KEY_LEFT)) {
    spelerX = spelerX - 2;
  }
  
  if (keyIsDown(KEY_SPACE)) {
    spelerSpringt = true;
    springSnelheid = springSnelheidStart;
  }
  if (spelerSpringt === true) {
    spelerY = spelerY - springSnelheid;
    springSnelheid = springSnelheid - zwaartekracht;
  }
  if (spelerY > 610) {
    spelerSpringt = false;
  }
  


  // vijand

  // kogel
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function() {
  // botsing speler tegen vijand

  // botsing kogel tegen vijand

  // update punten en health
function addPoints(points){
  score = 1;
}
  function displayScore(){
    console.log("Score:" + score);
  }
  //Voorbeeldgebruik:
  addPoints(1);
  displayScore(0);
};

/**
 * Tekent spelscherm
 */
var tekenAlles = function() {
  // achtergrond
  fill('blue');
  rect(0, 0, width, height);
  image(imgachter, 0, 0, 1280, 720);

  // wolk
  image(imgwolk, wolkX, wolkY, 200, 200);

  // vijand bom
  image(img, vijandX, vijandY, 110, 110);

  // vijand 2
  image(img, vijand2X, vijand2Y, 110, 110);

  // munt
  image(imgmunt, muntX, muntY, 120, 120);

  // speler
  image(imgbird, spelerX - 98, spelerY - 65, 200, 200);
  // punten en health
  text(score, 600,100);
};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function() {
  if (spelerX - vijandX < 48 &&
    vijandX - spelerX < 48 &&
    spelerY - vijandY < 150 &&
    vijandY - spelerY < 150) {
    aantal = aantal + 1;
    console.log("botsing" + aantal)
    return true;
  }
  if (spelerX - vijand2X < 48 &&
    vijand2X - spelerX < 48 &&
    spelerY - vijand2Y < 150 &&
    vijand2Y - spelerY < 150) {
    aantal = aantal + 1;
    console.log("botsing" + aantal)
    return true;
  }
  
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/** 
* preload
* deze functie wordt 1x uitgevoerd voor setup
* we  laden hier de plaatjes
*/

function preload() {
 img = loadImage('bom.png');
 imgbird = loadImage('bird3.png');
 imgmunt = loadImage('munt.gif');
 imgwolk = loadImage('wolk.png');
 imgachter = loadImage('bg2.webp');

}

/**
 * setup
 * de code in deze functie wordt een keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
    console.log("spelen");
  }

  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
    console.log("game over");
    textSize(50);
    fill("white");
    text("game over, druk spatie om opnieuw te spelen", 100, 100);
    if (keyIsDown(32)) { //spatie
      spelStatus = UITLEG;
    }
  }
  if (spelStatus === UITLEG) {
    // teken uitleg scherm
    console.log("uitleg");
    textSize(50);
    fill("blue");
    rect(0, 0, 1280, 720);
    fill("white");
    text("uitleg: Vermijd de bommen en pak de munten! \nDruk op enter om te beginnen.", 50, 350);
    if (keyIsDown(13)) { // enter
      spelerX = 100;
      spelerY = 410;
      spelStatus = SPELEN;
    }
  }

}
