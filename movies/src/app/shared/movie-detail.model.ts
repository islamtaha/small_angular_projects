 export class MovieDetail {
    constructor(
        public adult: boolean,
        public budget: number,
        public homepage: string,
        public id: number,
        public imdb_id: string,
        public original_language: string,
        public original_title: string,
        public overview: string,
        public popularity: number,
        public poster_path: string,
        public release_date: string,
        public revenue: number,
        public runtime: number,
        public status: string,
        public title: string,
        public vote_average: number,
        public vote_count: number,
        public genres?: (GenresEntity)[] | null) {}
}


export interface GenresEntity {
    id: number;
    name: string;
  }