import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Countries } from '../types';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  constructor(private httpClient: HttpClient) { }

  addFavorites(countries: Countries) {
    return this.httpClient.post<Countries>('/api/posts', countries);
  }

  getFavorites(countries: Countries) {
    return this.httpClient.get<Countries>('/api/posts');
  }
}


