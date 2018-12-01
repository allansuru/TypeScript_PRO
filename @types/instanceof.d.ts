declare class Foo {
    bar(): void;
}
declare const bar: Foo;
declare class Song2 {
    title: string;
    kind: 'song2';
    constructor(title: string, duration: number);
}
declare class Playlist {
    name: string;
    songs: Song2[];
    kind: 'playlist';
    constructor(name: string, songs: Song2[]);
}
declare function getItemName(item: Song2 | Playlist): string | Song2[];
declare function isSong(item: any): item is Song2;
declare function getItemNameOther(item: Song2 | Playlist): string;
declare const songName: string | Song2[];
declare const playListNames: string | Song2[];
