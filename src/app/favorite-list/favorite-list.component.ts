import { Component, Input, OnInit } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';
import { Countries } from '../types';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {
  @Input() countries: Countries[]  = [];

  constructor(private favoriteService: FavoritesService) {
    this.countries = [];
  }
  ngOnInit(): void {
    this.countries = this.favoriteService.getFavorites();
  }
}
