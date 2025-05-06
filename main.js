const buildMaker = document.getElementById('buildmaker');
const randomize = document.querySelector('.randomize');
const build = document.querySelector('.build');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

const insertCharacter = ["Mario", "Luigi", "Peach", "Daisy", "Rosalina", "Tanooki Mario", "Cat Peach", "Birdo"];
const insertKart = ["Standard Kart"]; 
const insertTires = ["Standard"];
const insertGlider = ["Super Glider"];
const buildText = `Character: :insertCharacter: Kart: :insertKart: Tires: :insertTires: Glider: :insertGlider:`;


const myButton = document.getElementById("myButton");
myButton.addEventListener("click", function() {
    result()
    });

function result() {
    let newBuild = buildText;

    const characterInsert = randomValueFromArray(insertCharacter);  
    const kartInsert = randomValueFromArray(insertKart);
    const tiresInsert = randomValueFromArray(insertTires);
    const gliderInsert = randomValueFromArray(insertGlider);

    newBuild = newBuild
            .replace(":insertCharacter:", characterInsert)
            .replace(":insertKart:", kartInsert)
            .replace(":insertTires:", tiresInsert)
            .replace(":insertGlider:", gliderInsert)

    console.log(newBuild)
    return newBuild;
}
