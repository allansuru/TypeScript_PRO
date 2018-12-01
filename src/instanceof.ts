class Foo {
    bar() {}
}

const bar = new Foo();

// console.log(bar instanceof Foo);
// console.log(Object.getPrototypeOf(bar) === Foo.prototype);


class Song2 {
    kind: 'song2';
    constructor(public title: string, duration: number) {}
}

class Playlist {
    kind: 'playlist';
    constructor(public name: string, public songs: Song2[]){}
}

function getItemName(item: Song2 | Playlist) {
        if (item instanceof Song2) {
            return  item.title // Song2
        }
        return item.songs;
}

function isSong(item: any): item is Song2 {
    //return item instanceof Song2
    return 'title' in item;
}


function getItemNameOther(item: Song2 | Playlist) {
    //  if (isSong(item)) {
    //      return item.title;
    //  
    if (item.kind === 'song2') {
        return item.title;
    }
     return item.name;
}

const songName = getItemName(new Song2('GodPlan', 30000));
console.log('songName: ', songName);

const playListNames = getItemName(
    new Playlist('The Best Songs', [new Song2('GodPlans', 300000), new Song2('Passageiro', 30000)])
)

// console.log('PlayList: ', playListNames);
