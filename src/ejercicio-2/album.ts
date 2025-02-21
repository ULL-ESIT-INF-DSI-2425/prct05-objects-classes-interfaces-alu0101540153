import { Song } from "./song";

export class Album {
  constructor(
    public name: string,
    public year: number,
    public songs: Song[]
  ) {}

  public getSongCount(): number {
    return this.songs.length;
  }

  public getTotalDuration(): number { // reduce es para sumar las duraciones y las guarda en el total (que luego devuelve)
    return this.songs.reduce((total, song) => total + song.duration, 0);
  }

  public getTotalPlays(): number {
    return this.songs.reduce((total, song) => total + song.playCount, 0);
  }
}
