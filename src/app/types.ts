export interface Countries {
    name: string;
id: number;
}


export interface Regions extends Countries {
    region: string;
    independent: boolean;
    area: number;



}



