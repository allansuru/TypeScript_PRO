interface Item {
    name: string;
}
interface Artist1 extends Item {
    songs: number;
}
interface Artist1 {
    getSongs(): number;
}
declare type Artist2 = {
    name: string;
} & Item;
declare const newArtist: Artist1;
