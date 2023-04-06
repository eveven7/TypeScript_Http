import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';
import { Countries } from '../types';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  ngOnInit(): void {
  }
  @Input() size = 'small';
  @Input() isFavorite = false;
  @Input() country = {};

  @Output() clickedFavorite = new EventEmitter();
  constructor
    (private favoriteService: FavoritesService) {

  }

  favorite() {
    this.favoriteService.addFavorites(this.country as Countries).subscribe();

    this.clickedFavorite.emit();
  }
}
