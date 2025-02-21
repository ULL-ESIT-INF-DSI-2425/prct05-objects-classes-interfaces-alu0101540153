
import { Artist } from "./artist";
import { Album } from "./album";
import { Song } from "./song";

export class MusicLibrary {
  private artists: Artist[] = [];

  public addArtist(artist: Artist): void {
    this.artists.push(artist);
  }

  public addArtists(artistas: Artist[]): void {
    this.artists.push(...artistas);
  }

  public searchArtist(name: string): Artist[] {
    return this.artists.filter(artist => artist.name.toLowerCase() === name.toLowerCase());
  }

  public searchAlbum(name: string): Album[] {
    return this.artists.flatMap(artist => artist.discography.filter(album => album.name.toLowerCase() === name.toLowerCase()));
  }

  public searchSong(name: string): Song[] {
    return this.artists.flatMap(artist => artist.discography.flatMap(album => album.songs.filter(song => song.name.toLowerCase() === name.toLowerCase())));
  }

  public showLibrary(): void {
    console.table(this.artists);
  }
}
