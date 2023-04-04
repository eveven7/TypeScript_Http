import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit{
  ngOnInit(): void {
  }
  @Input() size = 'small';
  @Input() isFavorite = false;
  @Output() clickedFavorite = new EventEmitter();

  favorite() {
    this.clickedFavorite.emit();
  }
}
