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
const GAMEKLAAR = 3;
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
var vijandY = 100; // y-positie van vijand
var vijand2X = 800; // x-positie van vijand2
var vijand2Y = 190; // y-positie van vijand2
var vijand3X = 200; // x-positie van vijand2
var vijand3Y = 600; // y-positie van vijand2
var vijand4X = 700; // x-positie van vijand2
var vijand4Y = 600; // y-positie van vijand2

var muntX = 600; // x-positie van munt
var muntY = 190; // y-positie van munt
var munt2X = 900; // x-positie van munt 2
var munt2Y = 410; // y-positie van munt 2
var munt3X = 400; // x-positie van munt 3
var munt3Y = 510; // y-positie van munt 3

var wolkX = 600; // x-positie van wolk
var wolkY = 100; // y-positie van wolk

var vlagX = 1100; // x-positie van vlag
var vlagY = 550; // y-positie van vlag

var score = 0;// tijd
var coins = 0;// aantal punten

var spelerSpringt = false;
var springSnelheid = 0;
var springSnelheidStart = 5;
var zwaartekracht = 0.4;

var img; //plaatje
var imgbird; //plaatje
var imgachter; //plaatje
var imgmunt; //plaatje
var imgwolk; //plaatje
var imggameover; //plaatje
var imguitleg; //plaatje
var imgvlag; //plaatje
var imgklaar; //plaatje


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
  for (var i = 0; i < 12; i++) {
    image(imgwolk, i*wolkX, wolkY, 300, 200);
  }

  for (var i = 0; i < 12; i++) {
    image(imgwolk, i*wolkX - 300, wolkY + 100, 300, 200);
    wolkX = wolkX + 0.01;
  }

  // vijand bom
  //1
  image(img, vijandX, vijandY, 110, 110);
  //2
  image(img, vijand2X, vijand2Y, 110, 110);
  //3
  image(img, vijand3X, vijand3Y, 110, 110);
  //4
  image(img, vijand4X, vijand4Y, 110, 110);

  // munt
  //1
  image(imgmunt, muntX, muntY, 120, 120);
  //2
  image(imgmunt, munt2X, munt2Y, 120, 120);
  //3
  image(imgmunt, munt3X, munt3Y, 120, 120);

  // speler
  image(imgbird, spelerX - 98, spelerY - 65, 200, 200);
  // punten en health
  setInterval (function(){
    score++;
    console.log(score);
  }, 10000);
  textSize(50);
  fill('white');
  text("Tijd:" +score, 100, 53,);

  //leven
  textSize(50);
  fill('white');
  text("coins:" +coins, 1000, 53,);

  // vlag
  image(imgvlag, vlagX, vlagY, 150, 150);
};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function() {
  if (spelerX - vijandX < 100 &&
    spelerX - vijandX > -100 &&
    spelerY - vijandY < 100 &&
    spelerY - vijandY > -100) {
    aantal = aantal + 1;
    console.log("botsing" + aantal)
    return true;
  }
  if (spelerX - vijand2X < 100 &&
    spelerX - vijand2X > -100 &&
    spelerY - vijand2Y < 100 &&
    spelerY - vijand2Y > -100) {
    aantal = aantal + 1;
    console.log("botsing" + aantal)
    return true;
  }

  if (spelerX - vijand3X < 100 &&
    spelerX - vijand3X > -100 &&
    spelerY - vijand3Y < 100 &&
    spelerY - vijand3Y > -100) {
    aantal = aantal + 1;
    console.log("botsing" + aantal)
    return true;
  }

  if (spelerX - vijand4X < 100 &&
    spelerX - vijand4X > -100 &&
    spelerY - vijand4Y < 100 &&
    spelerY - vijand4Y > -100) {
    aantal = aantal + 1;
    console.log("botsing" + aantal)
    return true;
  }

  if (spelerX - muntX < 60 &&
    muntX - spelerX < 60 &&
    spelerY - muntY < 80 &&
    muntY - spelerY < 80) {
    coins = coins + 1;
    muntX = 1000;
    muntY = 1000;
    console.log("botsing" + coins)
    return false;
  }

  if (spelerX - munt2X < 60 &&
    munt2X - spelerX < 60 &&
    spelerY - munt2Y < 80 &&
    munt2Y - spelerY < 80) {
    coins = coins + 1;
    munt2X = 1000;
    munt2Y = 1000;
    console.log("botsing" + coins)
    return false;
  }

  if (spelerX - munt3X < 60 &&
    munt3X - spelerX < 60 &&
    spelerY - munt3Y < 80 &&
    munt3Y - spelerY < 80) {
    coins = coins + 1;
    munt3X = 1000;
    munt3Y = 1000;
    console.log("botsing" + coins)
    return false;
  }
  
  
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

var checkGameKlaar = function() {
  if (spelerX - vlagX < 60 &&
    vlagX - spelerX < 60 &&
    spelerY - vlagY < 80 &&
    vlagY - spelerY < 80) {
    aantal = aantal + 1;
    console.log("botsing" + aantal)
    return true;
  }
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
 imggameover = loadImage('gameover2.png');
 imguitleg = loadImage('flappybirdj3png.png');
 imgvlag = loadImage('finish.png');
 imgklaar = loadImage('klaar.png');

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
  
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameKlaar()) {
      spelStatus = GAMEKLAAR;
    }
    console.log("spelen");
  }

  if (spelStatus === GAMEKLAAR) {
    // teken game-over scherm
    console.log("game over");
    image(imgklaar, 0, 0, 1280, 720);
    if (keyIsDown(32)) { //spatie
      spelStatus = UITLEG;
    }
  }

  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
    console.log("game over");
    image(imggameover, 0, 0, 1280, 720);
    if (keyIsDown(32)) { //spatie
      spelStatus = UITLEG;
    }
  }
  
  if (spelStatus === UITLEG) {
    // teken uitleg scherm
    console.log("uitleg");
    image(imguitleg, 0, 0, 1280, 720);
    
    if (keyIsDown(13)) { // enter
      spelerX = 100;
      spelerY = 410;
      muntX = 600; // x-positie van munt
      muntY = 190; // y-positie van munt
      munt2X = 900; // x-positie van munt 2
      munt2Y = 410; // y-positie van munt 2
      munt3X = 400; // x-positie van munt 3
      munt3Y = 510; // y-positie van munt 3
      coins = 0;
      spelStatus = SPELEN;
    }
  }

}
