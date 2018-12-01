declare class ArtistCreator {
    name: string;
    constructor(name: string);
}
declare function artistFactory({ name }: ArtistCreator): ArtistCreator;
declare const artistA: ArtistCreator;
