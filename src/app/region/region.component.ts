import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountriesServiceService } from '../services/countries-service.service';
import { Regions } from '../types';
import { RegionsServiceService } from '../services/regions-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  country$?: Observable<Regions[]>
  region: any = [];
  regions: any = [];

  constructor(private activatedRoute: ActivatedRoute, private countriesServiceService: CountriesServiceService, private regionsServiceService: RegionsServiceService) {

  }
  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((data) => {

      // this.countriesServiceService.load().subscribe(console.log); 
      if (data.get("region") == null) {
        this.regionsServiceService.getRegions().subscribe((region) => {
          this.regions.push(region)
        });
      } else {
        this.country$ = this.regionsServiceService.getRegion(data.get("region") || '')
      }
    });

    // this.activatedRoute.paramMap.subscribe((data) => {
    //   this.region = this.regionsServiceService.getRegion(data.get('name') || '').subscribe(console.log);
    // });

  }
}
