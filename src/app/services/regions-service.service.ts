import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { find } from 'rxjs';
import {  Regions } from '../types';
import { CountriesServiceService } from './countries-service.service';
@Injectable({
  providedIn: 'root'
})
export class RegionsServiceService {
  constructor(private httpClient: HttpClient, private countriesService: CountriesServiceService) { }

  
  getRegions() {
    return this.countriesService.loadCountriesRegion();
  }
  getRegion(region: string) {
    return this.countriesService.loadCountriesRegion().pipe(find(([country]) => country.region == region));
  }
}
