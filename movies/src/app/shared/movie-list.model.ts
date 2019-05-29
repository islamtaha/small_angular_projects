export class MovieList {
    constructor(public id: number,
                public title: string, 
                public poster_path: string, 
                public vote_average: number,
                public overview: string,
                public release_date: string,
                public index: number) {}
}