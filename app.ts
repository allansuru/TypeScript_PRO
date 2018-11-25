// interface Artist {
//     name: string;
// }

class ArtistCreator /*implements Artist*/ {
    constructor(public name: string) {}
}

function artistFactory({ name }: ArtistCreator) {
    return new ArtistCreator(name);
}

const artistA = artistFactory({name: 'Allan'});

console.log(artistA);


