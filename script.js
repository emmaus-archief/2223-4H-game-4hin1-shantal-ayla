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
var aantal = 0;

const SPELEN = 1;
const GAMEOVER = 2;
const UITLEG = 8;
var spelStatus = UITLEG;

const KEY_LEFT = 37;
const KEY_RIGHT = 39;
const KEY_UP = 38;
const KEY_DOWN = 40;

var spelerX = 100; // x-positie van speler
var spelerY = 360; // y-positie van speler
var vijandX = 600; // x-positie van vijand
var vijandY = 500; // y-positie van vijand
var vijand2X = 700; // x-positie van vijand2
var vijand2Y = 190; // y-positie van vijand2
var muntX = 700; // x-positie van vis
var muntY = 190; // y-positie van vis
var score = 0; // aantal punten

var img; //plaatje
var imgmeisje; //plaatje
var imgachter; //plaatje
var imgmunt; //plaatje

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
  if (keyIsDown(KEY_UP)) {
    spelerY = spelerY - 2;
  }
  if (keyIsDown(KEY_DOWN)) {
    spelerY = spelerY + 2;
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
  score+= points;
}
  function displayScore(){
    console.log("Score:" + score);
  }
  //Voorbeeldgebruik:
  addPoints(1);
  displayScore();
};

/**
 * Tekent spelscherm
 */
var tekenAlles = function() {
  // achtergrond
  fill('blue');
  rect(0, 0, width, height);
  image(imgachter, 0, 0, 1280, 720);

  // vijand
  fill("red");
  rect(vijandX - 25, vijandY - 25, 50, 50);
  fill("black");
  ellipse(vijandX, vijandY, 10, 10);
  image(img, vijandX - 37, vijandY - 60, 110, 110);

  // vijand 2
  fill("red");
  rect(vijand2X - 25, vijand2Y - 25, 50, 50);
  fill("black");
  ellipse(vijand2X, vijand2Y, 10, 10);
  image(img, vijand2X - 37, vijand2Y - 60, 110, 110);

  // munt
  fill("blue");
  rect(muntX - 25, muntY - 25, 50, 50);
  fill("black");
  ellipse(muntX, muntY, 10, 10);
  image(imgmunt, muntX - 37, muntY - 60, 110, 110);

  // speler
  fill("white");
  rect(spelerX - 25, spelerY - 25, 50, 50);
  fill("black");
  ellipse(spelerX, spelerY, 10, 10);
  image(imgmeisje, spelerX - 100, spelerY - 100, 200, 200);
  // punten en health
  text(score, 600,100);
};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function() {
  if (spelerX - vijandX < 130 &&
    vijandX - spelerX < 130 &&
    spelerY - vijandY < 130 &&
    vijandY - spelerY < 130) {
    aantal = aantal + 1;
    console.log("botsing" + aantal)
    return true;
  }
  if (spelerX - vijand2X < 130 &&
    vijand2X - spelerX < 130 &&
    spelerY - vijand2Y < 130 &&
    vijand2Y - spelerY < 130) {
    aantal = aantal + 1;
    console.log("botsing" + aantal)
    return true;
  }
  if (spelerX - muntX < 130 &&
    muntX - spelerX < 130 &&
    spelerY - muntY < 130 &&
    muntY - muntY < 130) {
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
 imgmeisje = loadImage('meisje.png');
 imgmunt = loadImage('munt.png');
 imgachter = loadImage('achtergrond2.jpeg');

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
    text("uitleg: Vermijd de bommen en eet de visjes op! \nDruk op enter om te beginnen.", 50, 350);
    if (keyIsDown(13)) { // enter
      spelerX = 100;
      spelStatus = SPELEN;
    }
  }

}
