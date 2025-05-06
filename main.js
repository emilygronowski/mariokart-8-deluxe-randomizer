function randomValueFromArray(array) {
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

const insertCharacter = ["Mario", "Luigi", "Peach", "Daisy", "Rosalina", "Tanooki Mario", "Cat Peach", "Birdo"];
const insertKart = ["Standard Kart"]; 
const insertTires = ["Standard"];
const insertGlider = ["Super Glider"];

const myButton = document.getElementById("myButton");
myButton.addEventListener("click", function() {
    result()
});

function result() {
    const characterInsert = randomValueFromArray(insertCharacter);
    console.debug(`Character: ${characterInsert}`);

    const kartInsert = randomValueFromArray(insertKart);
    console.debug(`Kart: ${kartInsert}`);

    const tiresInsert = randomValueFromArray(insertTires);
    console.debug(`Wheels: ${tiresInsert}`);

    const gliderInsert = randomValueFromArray(insertGlider);
    console.debug(`Glider: ${gliderInsert}`);

    const characterElement = document.getElementById("character");
    characterElement.innerHTML = characterInsert;

    const kartElement = document.getElementById("kart");
    kartElement.innerHTML = kartInsert;

    const tiresElement = document.getElementById("tires");
    tiresElement.innerHTML = tiresInsert;

    const gliderElement = document.getElementById("glider");
    gliderElement.innerHTML = gliderInsert;
}
