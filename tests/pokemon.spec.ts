import { describe, expect, test } from "vitest";
import { Pokedex } from "../src/ejercicio-1/pokedex";
import { Combat } from "../src/ejercicio-1/combat";
import { Pokemon } from "../src/ejercicio-1/pokemon";

describe("Pokedex", () => {
  let pikachu: Pokemon;
  let charmander: Pokemon;
  let squirtle: Pokemon;
  let bulbasaur: Pokemon;
  let pokedex: Pokedex;

    pikachu = new Pokemon("Pikachu", 6, 0.4, "eléctrico", 55, 40, 90, 100);
    charmander = new Pokemon("Charmander", 8.5, 0.6, "fuego", 52, 43, 65, 100);
    squirtle = new Pokemon("Squirtle", 9, 0.5, "agua", 48, 65, 43, 100);
    bulbasaur = new Pokemon("Bulbasaur", 6.9, 0.7, "hierba", 49, 49, 45, 100);
    pokedex = new Pokedex();
    pokedex.addPokemons([pikachu, charmander, squirtle, bulbasaur]);

  test("debería añadir y recuperar todos los Pokémon", () => {
    expect(pokedex.getAll().length).toBe(4);
  });

  test("debería buscar Pokémon por nombre", () => {
    const result = pokedex.searchByName("Pikachu");
    expect(result.length).toBe(1);
    expect(result[0].name).toBe("Pikachu");
  });

  test("debería buscar Pokémon por tipo", () => {
    const result = pokedex.searchByType("fuego");
    expect(result.length).toBe(1);
    expect(result[0].name).toBe("Charmander");
  });

  test("debería buscar Pokémon por ataque", () => {
    const result = pokedex.searchByAttack(52);
    expect(result.length).toBe(1);
    expect(result[0].name).toBe("Charmander");
  });

  test("debería devolver una lista vacía si no se encuentra el Pokémon", () => {
    const result = pokedex.searchByName("Mewtwo");
    expect(result.length).toBe(0);
  });

  test("debería permitir añadir múltiples Pokémon a la vez", () => {
    const meowth = new Pokemon("Meowth", 4.2, 0.4, "normal", 45, 35, 90, 80);
    const psyduck = new Pokemon("Psyduck", 19.6, 0.8, "agua", 52, 48, 55, 100);
    pokedex.addPokemons([meowth, psyduck]);

    expect(pokedex.getAll().length).toBe(6);
    expect(pokedex.searchByName("Meowth").length).toBe(1);
    expect(pokedex.searchByName("Psyduck").length).toBe(1);
  });
});

describe("Combate Pokémon", () => {
  let charmander: Pokemon;
  let squirtle: Pokemon;
  let combat: Combat;

    charmander = new Pokemon("Charmander", 8.5, 0.6, "fuego", 52, 43, 65, 100);
    squirtle = new Pokemon("Squirtle", 9, 0.5, "agua", 48, 65, 43, 100);
    combat = new Combat(charmander, squirtle);

  test("debería determinar la efectividad correcta de los ataques", () => {
    expect(combat["getEffectiveness"](charmander, squirtle)).toBe(0.5);
    expect(combat["getEffectiveness"](squirtle, charmander)).toBe(2);
  });


});
