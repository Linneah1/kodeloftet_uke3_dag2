// console refererer til inspiser vinduet .log gir en beskjed til console
console.log('Hello World!');

//  Datatyper:
// string = streng/tekst
// number = tall
// boolean = true/false verdi

// Variabler:
// let = kan bytte verdi
// const = ikke bytte verdi

// Erklærer en variabel:
// let ? = ?;
let userName = "Linneah";
console.log(userName);
userName = "Lootie";
console.log(userName);

let userAge = 37;
console.log(userAge);

let userPresent = true;
console.log(userPresent);

const firstName = "Linneah";
console.log(firstName);
const lastName = "Henriksen";
console.log(lastName);

const fullName = firstName + " " + lastName + "!"; // Variable Chaining
console.log(fullName);

const wholeName = `${firstName} ${lastName}!!`; // Template litteral
console.log(wholeName);

function businessCard() {
    const firstName = "Linneah";
    console.log(firstName);
}

businessCard();

function businessCardFull() {
    const firstName = "Linneah";
    const lastName = "Henriksen";
    const fullName = `${firstName} ${lastName}!!!`;
    console.log(fullName);
    /*
    const body = document.querySelector("h1");
    body.textContent = fullName;
    */
}

businessCardFull();

function favoriteGame() {
    const favGame1 = "Path of Exile";
    const favGame2 = "Rocket League";
    const favGame3 = "Enter the Gungeon";
    console.log(`${favGame1}, ${favGame2} and ${favGame3}`);

    const favGames = `${favGame1}, ${favGame2} and ${favGame3}`;
    console.log(favGames);

    const favBand = "Killswitch Engage";
    console.log(favBand);

    //const body = document.querySelector("h1");
    //body.textContent = `${favGame1}, ${favGame2}, ${favGame3}`;
    //body.textContent = favGames;

    const favSeries = "Breaking Bad";
    console.log(favSeries);

   
    const header3 = document.querySelector("h3");
    header3.textContent = favSeries;
    
}

favoriteGame();

// Added seperate function because of error | Uncaught SyntaxError: Identifier 'body' has already been declared (at script.js:77:11)
//fixed with changing from const body > const header3 | Dunno if correct
function favBand() {
    const favBand = "While She sleeps";
    console.log(favBand);
    
    const body = document.querySelector("h2");
    body.textContent = favBand;

}

favBand();

//
//20.05.2025
//

// Setter opp en funksjon med navnet clickButton som tar en blokk med kode som skal gjøres samtidig
function clickButton() {

    // Lager en variabel med navnet h1Element som henter et element fra HTML med id-navn changeText
    const h1Element = document.getElementById("changeText"); // document.querySelector("changeText")
    // Logger variabelen h1Element til console for å sjekke at vi har hentet riktig HTML element
    console.log(h1Element);


    // Lager en variabel med navnet newText som lagrer en string med tekst.
    const newText = "Velkommen til min side!";

    // Variabelen h1Eleement for tekst innhold fra variabelen newText
    h1Element.textContent = newText;
}

//

// Lager en variabel med navnet buttonElement som henter et element fra HTML med id-navn button.
// Som også logger buttonElement til console for å se om det er riktig
const buttonElement = document.getElementById("button");
console.log(buttonElement);

// Bruker variabelen buttonElement for å legge ti len hendelse lytter som lytter etter ett click.
// Som da kjører funksjonen clickButton.
buttonElement.addEventListener("click",clickButton);

/*
function ?(){
    const ? = document.getElementById("");
    const ? = "?";

    ?.textContent = ?;

}
*/

//
//

const addText = document.getElementById("addText");
console.log(addText);

addText.addEventListener("click", function (){
    console.log("Button clicked?");

    // Steg 1: Lag en variabel som henter elementet med id-navn receieveText
    const receieveText = document.getElementById("receieveText");
    // Steg 2: Lag en variabel som henter text med en string med valgfri tekst
    const text = "Det er sol i Bergen i dag";
    // Steg 3: Gjør at variabel receieveText mottar innholdet til text med textContent
    receieveText.textContent = text;
});