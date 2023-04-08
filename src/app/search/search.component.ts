import { Component, EventEmitter, Output } from '@angular/core';
import { CountriesServiceService } from '../services/countries-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// const fb = new FormBuilder().nonNullable;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() filterChange = new EventEmitter<string>();

  areaForm: FormGroup;


  constructor(private fb: FormBuilder,
    private countriesServiceService: CountriesServiceService) {
    this.areaForm = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required]
    }
    );
  }


  // onAreaFormSubmit() {
  //   if (this.areaForm.valid) {
  //     const { from, to } = this.areaForm.value;
  //     this.countriesServiceService.findCountryByArea(from, to)
  //       .subscribe(results => {
  //         console.log(results);
  //       });
  //   }
  // }

}
