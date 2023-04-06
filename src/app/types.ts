export interface Countries {
    name: string;

}


export interface Regions extends Countries {
    region: string;
    independent: boolean;
    area: number;



}


export class country {
    constructor(
        public name: string,

        public region: string,
        public independent: boolean,
        public area: number

    ) { }
}

