import { Pokemon } from "./pokemon";
import { Pokedex } from "./pokedex";
import { Combat } from "./combat";

const pikachu = new Pokemon("Pikachu", 6, 0.4, "eléctrico", 55, 40, 90, 100);
const charmander = new Pokemon("Charmander", 8.5, 0.6, "fuego", 52, 43, 65, 100);
const squirtle = new Pokemon("Squirtle", 9, 0.5, "agua", 48, 65, 43, 100);
const bulbasaur = new Pokemon("Bulbasaur", 6.9, 0.7, "hierba", 49, 49, 45, 100);

const pokedex = new Pokedex();
pokedex.addPokemons([pikachu, charmander, squirtle, bulbasaur]);

console.log("Pokemons de tipo fuego:", pokedex.searchByType("fuego"));
console.log("Pokemons con ataque 52:", pokedex.searchByAttack(52));

const combat = new Combat(charmander, squirtle);
combat.start();
