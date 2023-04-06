import { Component, Input, OnInit } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';
import { Countries, country } from '../types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {
  countries$!: Observable<Countries>;

  constructor(private favoriteService: FavoritesService) {
  }

  ngOnInit(): void {
   this.countries$ = this.favoriteService.addFavorites(new country('test', 'test', true, 1111));
  }
}
