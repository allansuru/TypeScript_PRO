function foo(bar: string | number) {
    if (typeof bar === 'string') {
        // string
        return bar.toUpperCase();
    }
     // number
     return bar.toFixed(2);

}

class Song {
    constructor(public title: string, public duration: string | number) {}
}


function getSongDuration(item: Song) {
        if (typeof item.duration === 'string') {
            return  item.duration;
        }
        const { duration } = item;
        console.log('duration: ', duration);
        
        const minutes = Math.floor(duration / 6000);
        const seconds = (duration / 1000) % 60;
        return `${minutes}:${seconds}`;
}

const songDurationFromString = getSongDuration(
    new Song('God Plans', '05:31')
);
console.log(songDurationFromString);


const songDurationFromMS = getSongDuration(
    new Song('God Plans', 33000));
    
    console.log(songDurationFromMS);