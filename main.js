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
const buildText = `Character: ${insertCharacter} Kart: ${insertKart} Tires: ${insertTires} Glider: ${insertGlider}`;

randomize.addEventListener('click', result);

function result() {
    let newBuild = buildText;

    const characterInsert = randomValueFromArray(insertCharacter);
    const kartInsert = randomValueFromArray(insertKart);
    const tiresInsert = randomValueFromArray(insertTires);
    const gliderInsert = randomValueFromArray(insertGlider);

    if(buildMaker.value !== '') {
        const name = buildMaker.value;
    }

    console.log(newBuild);

    return newBuild;
}

result()