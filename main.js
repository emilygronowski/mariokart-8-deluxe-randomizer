function randomValueFromArray(array) {
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

const insertCharacter = ["Mario"];
const insertKart = ["Standard Kart"]; 
const insertTires = ["Standard", "Monster", "Roller", "Slim", "Slick", "Metal", "Button", "Off-Road",
                    "Sponge", "Wood", "Cushion", "Blue Standard", "Hot Monster", "Azure Roller", 
                    "Crimson Slim", "Cyber Slick", "Retro Off-Road", "Gold Tires", "GLA Tires", 
                    "Triforce Tires", "Ancient Tires", "Leaf Tires"];

const insertGlider = ["Super Glider", "Cloud Glider", "Wario Wing", "Waddle Wing", "Peach Parasol", 
                      "Parachute", "Parafoil", "Flower Glider", "Bowser Kite", "Plane Glider", 
                      "MKTV Parafoil", "Gold Glider", "Hylian Kite", "Paraglider", "Paper Glider"];

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
