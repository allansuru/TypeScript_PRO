interface Item {
    name: string;
}

interface Artist1 extends Item {
    songs: number;
}

interface Artist1 {
    getSongs(): number;
}

type Artist2 = { name: string } & Item;

const newArtist: Artist1 = {
    name: 'ABC',
    songs: 5,
    getSongs() {
        return  this.songs;
    }
}