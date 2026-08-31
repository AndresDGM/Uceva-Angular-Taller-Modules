import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnimeResponse } from '../interfaces/anime.interface';

@Injectable({
  providedIn: 'root'
})

export class AnimeService {
    private readonly http = inject(HttpClient);

  private readonly apiUrl = 'https://api.jikan.moe/v4';

  getTopAnime(): Observable<AnimeResponse> {
    return this.http.get<AnimeResponse>(
      `${this.apiUrl}/top/anime`
    );
  }
}
