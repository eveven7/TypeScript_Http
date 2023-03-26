import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { distinct, find, map, switchMap } from 'rxjs';
import { CountriesServiceService } from './countries-service.service';
@Injectable({
  providedIn: 'root'
})
export class RegionsServiceService {
  constructor(private httpClient: HttpClient, private countriesService: CountriesServiceService) { }


  getRegions() {
    return this.countriesService.loadCountriesRegion().pipe(switchMap((data) => {
      return data.map((countryObject) => { return countryObject.region })
    }), distinct());
  }
  getRegion(name: string) {
    return this.countriesService.loadCountriesRegion().pipe(map((data) => {
      return data.filter((region) => region.region == name)
    }))
  }
  getCountry(name: string) {
    return this.countriesService.loadCountriesRegion().pipe(map((data) => {
      return data.find((country) => country.name == name)
    }))
  }

}
