export interface Countries {
    name: string;
id: number;
area: number;

}


export interface Regions extends Countries {
    region: string;
    independent: boolean;
    area: number;



}



