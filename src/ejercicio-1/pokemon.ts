export class Pokemon {
    constructor(
        public name: string,
        public weight: number,
        public height: number,
        public type: string,
        public attack: number,
        public defense: number,
        public speed: number,
        public hp: number
    ){}

    public getStats(): string{
        return `${this.name} - Type: ${this.type}, HP: ${this.hp}, Attack: ${this.attack}, Defense: ${this.defense}, Speed: ${this.speed}`;
    }

} 
