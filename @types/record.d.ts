declare let dictionary: Record<string, typeof item>;
interface TrackStates {
    current: string;
    next: string;
}
declare const item: Record<keyof TrackStates, string>;
