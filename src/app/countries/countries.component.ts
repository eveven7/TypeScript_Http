import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CountriesServiceService } from '../services/countries-service.service';
import { Countries } from '../types';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  country: Observable<Countries[]>;
  
  constructor(private countriesServiceService: CountriesServiceService,private activatedRoute: ActivatedRoute) {
    this.country = this.countriesServiceService.load();

  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((data) => { 
      this.country = this.countriesServiceService.load();
      
    });

}}
