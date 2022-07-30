import * as cheerio from 'cheerio'

export declare function each<T>(this: Cheerio<T>, fn: (this: T, i: number, el: T) => Promise<void>): Cheerio<T>;
