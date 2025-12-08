/* De eerste interactie is al voor jullie uitgewerkt
   Als je op het 2e linkje klikt (Design), springt deze omhoog */

// Stap 1: selecteer het Design linkje, en sla deze op in een variabele
let designLink = document.querySelector('a[href="#design"]');

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
designLink.addEventListener("click", jumpHandler);

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {
  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  designLink.classList.toggle("jump");
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
// Dit is trouwens geen UIEvent, maar een AnimationEvent
designLink.addEventListener("animationend", jumpHandler);

// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een scale animatie als je op de Frontend link klikt

// Stap 1: querySelector
// let scaleLink = document.querySelector...

// Stap 2: addEventListener
// scaleLink.addEventListener...

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// scaleLink.classList.toggle...
let scaleLink = document.querySelector('a[href="#frontend"]');

scaleLink.addEventListener("click", function () {
  scaleLink.classList.add("scale");
});

scaleLink.addEventListener("animationend", function () {
  scaleLink.classList.remove("scale");
});

//translate animation
let translateLink = document.querySelector('a[href="#and"]');

translateLink.addEventListener("click", function () {
  translateLink.classList.add("translate");
});

translateLink.addEventListener("animationend", function () {
  translateLink.classList.remove("translate");
});

//shake

let shake = document.querySelector('a[href="#development"]');

shake.addEventListener("dblclick", function () {
  shake.classList.add("shake");
});

shake.addEventListener("animationend", function () {
  shake.classList.remove("shake");
});

//focus

let focus = document.querySelector('a[href="#sprint-5"]');

focus.addEventListener("focus", function () {
  focus.classList.add("colors");
});

focus.addEventListener("blur", function () {
  focus.classList.remove("colors");
});

//mouse over
let mouseOver = document.querySelector('a[href="#fix"]');

mouseOver.addEventListener("mouseover", function () {
  mouseOver.textContent = "mouse hover werkt";
});

// mouse out
let mouseOut = document.querySelector('a[href="#the"]');

mouseOut.addEventListener("mouseout", function () {
  mouseOut.classList.add("mouseOutTurn");
});

mouseOut.addEventListener("animationend", function () {
  mouseOut.classList.remove("mouseOutTurn");
});
