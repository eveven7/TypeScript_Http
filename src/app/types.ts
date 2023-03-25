export interface Countries {
    name: string;

}


export interface CountriesDetailed extends Countries {
    region: string;
    area: number;
    independent: boolean;
}

