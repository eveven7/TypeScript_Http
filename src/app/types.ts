export interface Countries {
    name: string;

}


export interface Regions extends Countries {
    region: string;
    independent: boolean;
    area: number;

}

