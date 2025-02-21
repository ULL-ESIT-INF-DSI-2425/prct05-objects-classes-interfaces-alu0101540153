
import { Pokemon } from "./pokemon";

export class Combat {
  constructor(private pokemon1: Pokemon, private pokemon2: Pokemon) {}

  private getEffectiveness(attacker: Pokemon, defender: Pokemon): number {
    const effectivenessChart: { [key: string]: { [key: string]: number } } = {
      fuego: { hierba: 2, agua: 0.5, eléctrico: 1 },
      agua: { hierba: 0.5, eléctrico: 0.5, fuego: 2 },
      hierba: { agua: 2, eléctrico: 1, fuego: 0.5 },
      eléctrico: { agua: 2, hierba: 1, fuego: 1 },
    };
    return effectivenessChart[attacker.type][defender.type] || 1;
  }

  public start(): Pokemon {
    let attacker = this.pokemon1;
    let defender = this.pokemon2;
    let round = 1;

    console.log(`#   Inicio del combate entre ${attacker.name} y ${defender.name}!  ########`);
    while (attacker.hp > 0 && defender.hp > 0) {
      const effectiveness = this.getEffectiveness(attacker, defender);
      const damage = 50 * (attacker.attack / defender.defense) * effectiveness;
      defender.hp = Math.max(0, defender.hp - damage);
      console.log(` ===> Ronda ${round}: ${attacker.name} ataca a ${defender.name} causando ${damage.toFixed(2)} de daño.`);
      console.log(`${defender.name} ahora tiene ${defender.hp} HP restante.`);
      
      if (defender.hp === 0) {
        console.log(`# ${defender.name} ha sido derrotado. ¡${attacker.name} gana el combate! ######`);
        return attacker;
      }

      [attacker, defender] = [defender, attacker]; // Cambio de turno
      round++;
    }
    return attacker;
  }
}
