import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { RegionComponent } from './region/region.component';

const routes: Routes = [
  { path: 'countries', component: CountriesComponent },
  { path: 'country/:country', component: CountriesComponent },
  { path: 'regions/:region', component: RegionComponent },

  { path: 'regions', component: RegionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
