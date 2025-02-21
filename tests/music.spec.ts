import { describe, expect, test } from "vitest";
import { Song } from "../src/ejercicio-2/song";
import { Album } from "../src/ejercicio-2/album";
import { Artist } from "../src/ejercicio-2/artist";
import { MusicLibrary } from "../src/ejercicio-2/musicLibrary";

describe("Song", () => {
  let song: Song;

  test("debería crear una canción con las propiedades correctas", () => {
    song = new Song("Song A", 210, ["Rock"], true, 50000);
    expect(song.name).toBe("Song A");
    expect(song.duration).toBe(210);
    expect(song.genres).toEqual(["Rock"]);
    expect(song.isSingle).toBe(true);
    expect(song.playCount).toBe(50000);
  });
});

describe("Album", () => {
  let song1: Song;
  let song2: Song;
  let album: Album;

    song1 = new Song("Song A", 210, ["Rock"], true, 50000);
    song2 = new Song("Song B", 180, ["Pop"], false, 30000);
    album = new Album("Album 1", 2022, [song1, song2]);


  test("debería devolver el número correcto de canciones", () => {
    expect(album.getSongCount()).toBe(2);
  });

  test("debería devolver la duración total correcta del álbum", () => {
    expect(album.getTotalDuration()).toBe(390);
  });

  test("debería devolver el número correcto de reproducciones del álbum", () => {
    expect(album.getTotalPlays()).toBe(80000);
  });
});

describe("Artist", () => {
  let song1: Song;
  let album: Album;
  let artist: Artist;

    song1 = new Song("Song A", 210, ["Rock"], true, 50000);
    album = new Album("Album 1", 2022, [song1]);
    artist = new Artist("Artist 1", 1000000, [album]);


  test("debería tener el nombre correcto del artista", () => {
    expect(artist.name).toBe("Artist 1");
  });

  test("debería tener el número correcto de oyentes mensuales", () => {
    expect(artist.monthlyListeners).toBe(1000000);
  });

  test("debería tener el número correcto de discos en la discografía", () => {
    expect(artist.discography.length).toBe(1);
  });
});

describe("MusicLibrary", () => {
  let song1: Song;
  let song2: Song;
  let album: Album;
  let artist: Artist;
  let library: MusicLibrary;

    song1 = new Song("Song A", 210, ["Rock"], true, 50000);
    song2 = new Song("Song B", 180, ["Pop"], false, 30000);
    album = new Album("Album 1", 2022, [song1, song2]);
    artist = new Artist("Artist 1", 1000000, [album]);
    library = new MusicLibrary();
    library.addArtist(artist);


  test("debería añadir un artista a la biblioteca", () => {
    expect(library["artists"].length).toBe(1);
  });

  test("debería buscar un artista por nombre", () => {
    const result = library.searchArtist("Artist 1");
    expect(result.length).toBe(1);
    expect(result[0].name).toBe("Artist 1");
  });

  test("debería buscar un álbum por nombre", () => {
    const result = library.searchAlbum("Album 1");
    expect(result.length).toBe(1);
    expect(result[0].name).toBe("Album 1");
  });

  test("debería buscar una canción por nombre", () => {
    const result = library.searchSong("Song A");
    expect(result.length).toBe(1);
    expect(result[0].name).toBe("Song A");
  });

  test("debería devolver una lista vacía si no se encuentra un artista", () => {
    const result = library.searchArtist("Artist 2");
    expect(result.length).toBe(0);
  });

  test("debería devolver una lista vacía si no se encuentra un álbum", () => {
    const result = library.searchAlbum("Album 2");
    expect(result.length).toBe(0);
  });

  test("debería devolver una lista vacía si no se encuentra una canción", () => {
    const result = library.searchSong("Song C");
    expect(result.length).toBe(0);
  });

  test("debería permitir añadir múltiples artistas a la vez", () => {
    const artist2 = new Artist("Artist 2", 500000, []);
    library.addArtists([artist2]);
    expect(library["artists"].length).toBe(2);
  });
});
