import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  private readonly baseUrl = 'https://rickandmortyapi.com/api';

  constructor(private apiService: ApiService) {}

  getCharacters(page: number = 1): Observable<any> {
    return this.apiService.get(this.baseUrl, 'character/', { page });
  }

  getCharacterById(id: number): Observable<any> {
    return this.apiService.get(this.baseUrl, `character/${id}`);
  } 
}
