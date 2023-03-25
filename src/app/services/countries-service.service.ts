import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Countries } from '../types';

@Injectable({
  providedIn: 'root'
})
export class CountriesServiceService {

  constructor(private httpClient: HttpClient) { }
  load() { return this.httpClient.get<Countries[]>('https://restcountries.com/v2/all?fields=name,region,area'); }
  // loadCountriesDetails() { return this.httpClient.get<Countries[]>('https://restcountries.com/v2/all?fields=name,region,area' + region); }

}
