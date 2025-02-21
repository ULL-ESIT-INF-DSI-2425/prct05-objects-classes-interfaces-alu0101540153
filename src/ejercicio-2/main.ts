
import { MusicLibrary } from "./musicLibrary";
import { Artist } from "./artist";
import { Album } from "./album";
import { Song } from "./song";

const song1 = new Song("Song A", 210, ["Rock"], true, 50000);
const song2 = new Song("Song B", 180, ["Pop"], false, 30000);
const album = new Album("Album 1", 2022, [song1, song2]);
const artist = new Artist("Artist 1", 1000000, [album]);
const library = new MusicLibrary();
library.addArtist(artist);
library.showLibrary();
