import { Pokemon } from "./pokemon";

export class Pokedex {
  private pokemons: Pokemon[] = [];

  public addPokemon(pokemon: Pokemon): void {
    this.pokemons.push(pokemon);
  }

  public addPokemons(pokemons: Pokemon[]): void {
    this.pokemons.push(...pokemons);
  }

  public searchByName(name: string): Pokemon[] {
    return this.pokemons.filter(pokemon => pokemon.name.toLowerCase() === name.toLowerCase());
  }

  public searchByWeight(weight: number): Pokemon[] {
    return this.pokemons.filter(pokemon => pokemon.weight === weight);
  }

  public searchByHeight(height: number): Pokemon[] {
    return this.pokemons.filter(pokemon => pokemon.height === height);
  }

  public searchByType(type: string): Pokemon[] {
    return this.pokemons.filter(pokemon => pokemon.type.toLowerCase() === type.toLowerCase());
  }

  public searchByAttack(attack: number): Pokemon[] {
    return this.pokemons.filter(pokemon => pokemon.attack === attack);
  }

  public searchByDefense(defense: number): Pokemon[] {
    return this.pokemons.filter(pokemon => pokemon.defense === defense);
  }

  public searchBySpeed(speed: number): Pokemon[] {
    return this.pokemons.filter(pokemon => pokemon.speed === speed);
  }

  public searchByHP(hp: number): Pokemon[] {
    return this.pokemons.filter(pokemon => pokemon.hp === hp);
  }

  public getAll(): Pokemon[] {
    return this.pokemons;
  }
}
