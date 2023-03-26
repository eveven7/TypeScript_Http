import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { find, map } from 'rxjs';
import { CountriesServiceService } from './countries-service.service';
@Injectable({
  providedIn: 'root'
})
export class RegionsServiceService {
  constructor(private httpClient: HttpClient, private countriesService: CountriesServiceService) { }


  getRegions() {
    return this.countriesService.loadCountriesRegion();
  }
  getRegion(name: string) {
    return this.countriesService.loadCountriesRegion().pipe(map((data) => {
      data.find((country) => country.name == name)
    }))
  }
}
