import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Countries, Regions } from '../types';

@Injectable({
  providedIn: 'root'
})
export class CountriesServiceService {

  constructor(private httpClient: HttpClient) { }
  load() { return this.httpClient.get<Countries[]>('https://restcountries.com/v2/all?fields=name,region,area'); }

  loadCountriesRegion() {
    return this.httpClient.get<Regions[]>('https://restcountries.com/v2/all?fields=name,region,area');}
     

    
}
