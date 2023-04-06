import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';
import { Countries } from '../types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit, OnChanges {
  countries$!: Observable<Countries[]>;

  constructor(private favoriteService: FavoritesService) {
  }

  ngOnInit(): void {
    this.countries$ = this.favoriteService.getFavorites();
  }
  ngOnChanges(): void {
    this.countries$ = this.favoriteService.getFavorites();
  }

  delete(
    id: number
  ) {
    this.favoriteService.deleteFavorites(id).subscribe();
  };
}
