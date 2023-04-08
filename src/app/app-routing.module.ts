import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { RegionComponent } from './region/region.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { SearchComponent } from './search/search.component';
const routes: Routes = [
  { path: 'countries', component: CountriesComponent },
  { path: 'country/:country', component: CountriesComponent },
  { path: 'regions/:region', component: RegionComponent },
  { path: 'list', component: FavoriteListComponent },
  { path: 'countries/titleForm', component: SearchComponent },

  { path: 'regions', component: RegionComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
