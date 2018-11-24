class Foo {
    bar() {}
}

const bar = new Foo();

// console.log(bar instanceof Foo);
// console.log(Object.getPrototypeOf(bar) === Foo.prototype);

class Song2 {
    constructor(public title: string, duration: number) {}
}

class Playlist {
    constructor(public name: string, public songs: Song2[]){}
}

function getItemName(item: Song2 | Playlist) {
        if (item instanceof Song2) {
            return  item.title // Song2
        }
        return item.songs;
}

const songName = getItemName(new Song2('GodPlan', 30000));
console.log('songName: ', songName);

const playListNames = getItemName(
    new Playlist('The Best Songs', [new Song2('GodPlans', 300000), new Song2('Passageiro', 30000)])
)

console.log('PlayList: ', playListNames);
