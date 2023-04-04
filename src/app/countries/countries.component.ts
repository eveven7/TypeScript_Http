import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CountriesServiceService } from '../services/countries-service.service';
import { RegionsServiceService } from '../services/regions-service.service';
import { Countries, Regions } from '../types';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  country?: Observable<Countries[]>;
  name?: Observable<Regions|undefined>;

  constructor(private countriesServiceService: CountriesServiceService, private activatedRoute: ActivatedRoute, private regionsServiceService: RegionsServiceService) {

  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((data) => {
      // this.countriesServiceService.load().subscribe(console.log); 
      if (data.get("country") == null) {
        this.country = this.countriesServiceService.load();
      } else {
        this.name = this.regionsServiceService.getCountry(data.get("country") || '')
     
      }
    });

   

  } 

}
