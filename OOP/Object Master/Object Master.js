const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

const pkmnIds = pokémon.filter( p => p.id %3 == 0  );
console.log(pkmnIds);
console.log("_______________________________________")
const pkmnItype = pokémon.filter( p => p.types.includes("fire"));
console.log(pkmnItype);
console.log("_______________________________________")
const pkmnItypemore = pokémon.filter( p => p.types.length>1);
console.log(pkmnItypemore);
console.log("_______________________________________")
const pkmnname = pokémon.map( p => p.name);
console.log(pkmnname);
console.log("_______________________________________")
const pkmnIds99 = pokémon.filter( p => p.id > 99  );
const pkmnnameid99 = pkmnIds99.map( p => p.name);
console.log(pkmnnameid99);
console.log("_______________________________________")
const pkmnIdstypepison = pokémon.filter( p => p.types.includes("poison") );
const pkmnnamepoison = pkmnIdstypepison.map( p => p.name);
console.log(pkmnnamepoison);
console.log("_______________________________________")
const pkmnIdstyflying = pokémon.filter( p => p.types[1]==="flying" );
const pkmnnameflyin = pkmnIdstyflying.map( p => p.name);
console.log(pkmnnameflyin);
console.log("_______________________________________")
const pkmnIdstynormal = pokémon.filter( p => p.types.includes("normal"));
const pkmnnamenorma = pkmnIdstynormal.map( p => p.name);
console.log(pkmnnamenorma.length);
console.log("_______________________________________")

