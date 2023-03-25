// import { Component } from '@angular/core';
// import { ActivatedRoute, ParamMap } from '@angular/router';
// import { Observable } from 'rxjs';
// import { CountriesServiceService } from '../services/countries-service.service';
// import { CountriesDetailed } from '../types';

// @Component({
//   selector: 'app-single',
//   templateUrl: './single.component.html',
//   styleUrls: ['./single.component.css']
// })
// export class SingleComponent {
//   country$?: Observable<CountriesDetailed>

//   constructor(private countriesServiceService: CountriesServiceService, private route: ActivatedRoute) {
//     this.route.paramMap.subscribe((params: ParamMap) => {
//       const region = params.get("region");
//       if (region != null) {
//         this.country$ = this.countriesServiceService.loadCountriesDetails(region);
//       }
//     });
//   }
// }
