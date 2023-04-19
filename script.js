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
const SPELEN = 1;
const GAMEOVER = 2;
const UITLEG = 8;
var spelStatus = SPELEN;
const KEY_LEFT = 37;
const KEY_RIGHT = 39;
const KEY_UP = 38;
const KEY_DOWN = 40;

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler
var vijandX = 600; // x-positie van vijand
var vijandY = 500; // y-positie van vijand

var img; //plaatje
var imghaai; //plaatje
var imgachter; //plaatje
/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function() {
  // speler
 if (keyIsDown(KEY_LEFT)) {
   spelerX = spelerX-1;
 }
if (keyIsDown(KEY_RIGHT)) {
   spelerX = spelerX+1;
 }
  if (keyIsDown(KEY_UP)) {
   spelerY = spelerY-1;
 }
  if (keyIsDown(KEY_DOWN)) {
   spelerY = spelerY+1;
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
  if (spelerX - vijandX < 50 &&
     spelerX - vijandX >-50 &&
     spelerY - vijandY <50 &&
     spelerY - vijandY > -50) {
    console.log("Botsing");
     }

  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function() {
  // achtergrond
fill('blue');
  rect(0,0, width, height);
    image (imgachter, 0, 0, 600, 600);
  
  // vijand
  image(img, vijandX-25, vijandY-25, 65, 65);




    


  
  // kogel

  // speler
  fill("white");
  rect(spelerX - 25, spelerY - 25, 50, 50);
  fill("black");
  ellipse(spelerX, spelerY, 10, 10);
  image (imghaai, spelerX-25, spelerY-25, 65, 65);
  // punten en health

};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function() {
  if(spelerX - vijandX < 50 &&
     vijandX - spelerX < 50 &&
     spelerY - vijandY < 50 &&
     vijandY - spelerY < 50) {
    aantal = aantal + 1;
    console.log ("botsing"+ aantal)
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
  imghaai = loadImage('haai.png');
    imgachter = loadImage('achtergrond.jpeg');
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
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm

  }
  if (spelStatus === UITLEG) {
    // teken uitleg scherm

}

}
