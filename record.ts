let dictionary: Record<string, typeof item> = {}

interface TrackStates {
    current: string;
    next: string;
}

const item: Record<keyof TrackStates, string> = {
    current: 'jsjasas1',
    next: '121asas'
}

dictionary[0] = item;

console.log(dictionary)