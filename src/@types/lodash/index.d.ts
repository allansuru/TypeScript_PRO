import * as lodash from 'lodash';

declare module 'lodash' {
    //export function chunk<T>(collection: T, size?: number): any[][]

    interface LoDashStatic {
        log<T>(item: T): void;
    }
}