import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { SingleComponent } from './single/single.component';

const routes: Routes = [
  { path: 'countries', component: CountriesComponent },
  { path: 'countries/:name', component: SingleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
