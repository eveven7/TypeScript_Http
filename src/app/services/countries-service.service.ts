import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Countries, Regions } from '../types';
import { Observable, map, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesServiceService {

  constructor(private httpClient: HttpClient) { }
  load() { return this.httpClient.get<Countries[]>('https://restcountries.com/v2/all?fields=name,region,area'); }

  loadCountriesRegion() {
    return this.httpClient.get<Regions[]>('https://restcountries.com/v2/all?fields=name,region,area');
  }


    // findCountryByArea(from: number, to: number): Observable<Countries[]> {
    //   const url = `https://restcountries.com/v2/all?fields=name,region,area=from=${from}&to=${to}`;
    //   return this.httpClient.get<Countries[]>(url);
    // }

}
