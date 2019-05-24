export class WeatherData{
    constructor(public temp: number,
                public max_temp: number, 
                public min_temp: number,
                public humidity: number,
                public wind_speed: number,
                public wind_degree: number) {}
}