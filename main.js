function randomValueFromArray(array) {
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

const insertCharacter = ["Mario", "Luigi", "Peach", "Daisy", "Rosalina", "Tanooki Mario",
                        "Cat Peach", "Birdo", "Birdo (Light Blue)", "Birdo (Black)", 
                        "Birdo (Red)", "Birdo (Yellow)", "Birdo (White)", "Birdo (Blue)",
                        "Birdo (Green)", "Birdo (Orange)", "Yoshi", "Light-blue Yoshi",
                        "Black Yoshi", "Red Yoshi", "Yellow Yoshi", "White Yoshi", "Blue Yoshi",
                        "Pink Yoshi", "Orange Yoshi", "Toad", "Koopa Troopa", "Shy Guy", 
                        "Light-blue Shy Guy", "Black Shy Guy", "Green Shy Guy", "Yellow Shy Guy",
                        "White Shy Guy", "Blue Shy Guy", "Pink Shy Guy", "Orange Shy Guy", "Lakitu",
                        "Toadette", "King Boo", "Petey Piranha", "Baby Mario", "Baby Luigi", 
                        "Baby Peach", "Baby Daisy", "Baby Rosalina", "Gold Mario", "Metal Mario",
                        "Pink Gold Peach", "Wiggler", "Wario", "Waluigi", "Donkey Kong", "Bowser",
                        "Dry Bones", "Bowser Jr.", "Dry Bowser", "Kamek", "Lemmy", "Larry", "Wendy",
                        "Ludwig", "Iggy", "Roy", "Morton", "Peachette", "Inkling Girl", "Inkling Boy",
                        "Villager", "Isabelle", "Link", "Diddy Kong", "Funky Kong", "Pauline",
                        "Mii Normal Suit", "Mii Castle Suit", "Mii Dry Bowser Suit", "Mii ? Block Suit",
                        "Mii Toadette Suit", "Mii Chain Chomp Suit", "Mii Cheep Cheep Suit", 
                        "Mii Pokey Suit", "Mii Koopa Clown Car Suit", "Mii Dolphin Suit",  
                        "Mii Blooper Suit", "Mii Para-Biddybud Suit", "Mii Ice Cream Suit", 
                        "Mii Petey Piranha Suit", "Mii Goomba Suit", "Mii Birdo Suit", "Mii Wiggler Suit",
                        "Mii Moo Moo Suit"];
                        
const insertKart = ["Standard Kart", "Pipe Frame", "Mach 8", "Steel Driver", "Cat Cruiser", 
                    "Circuit Special", "Tri-Speeder", "Badwagon", "Prancer", "Biddybuggy",
                    "Landship", "Sneeker", "Sports Coupe", "Gold Standard", "GLA",
                    "W 25 Silver Arrow", "300 SL Roadster", "Blue Falcon", "Tanooki Kart",
                    "B Dasher", "Streetle", "P-Wing", "Koopa Clown", "Standard Bike",
                    "Comet", "Sports Bike", "The Duke", "Flame Rider", "Varmint", "Mr. Scooty",
                    "Jet Bike", "Yoshi Bike", "Master Cycle", "Master Cycle Zero", "City Tripper", 
                    "Standard ATV", "Wild Wiggler", "Teddy Buggy", "Bone Rattler", "Splat Buggy",
                    "Inkstriker"]; 
                    
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
