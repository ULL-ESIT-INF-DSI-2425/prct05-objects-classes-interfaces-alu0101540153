import { Album } from "./album";

export class Artist {
  constructor(
    public name: string,
    public monthlyListeners: number,
    public discography: Album[]
  ) {}
}
